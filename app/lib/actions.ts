'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

import { formatDateToLocal } from '../../app/lib/utils';
import { format, startOfWeek, addDays } from 'date-fns';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

const TableSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

const CreateTable = TableSchema.omit({ id: true, type: true });

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export type TableState = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete Invoice.',
    };
  }
  revalidatePath('/dashboard/invoices');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function createTable(
  tableType: string,
  prevState: TableState,
  formData: FormData,
) {
  const validatedFields = CreateTable.safeParse({
    title: formData.get('title'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Table.',
    };
  }
  const { title } = validatedFields.data;

  try {
    await sql`
      INSERT INTO tables (title, type)
      VALUES (${title}, ${tableType})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Table.',
    };
  }

  revalidatePath('/dashboard');
  if (tableType === 'task') {
    revalidatePath('/dashboard/tasks');
  } else if (tableType === 'goal') {
    revalidatePath('/dashboard/goals');
  }
  // redirect('/dashboard/tasks');
}

export type TaskState = {
  errors?: {
    title: string[];
    priority?: string[];
    date?: string[];
  };
  message?: string | null;
};

export async function createTask(
  table_id: string,
  type: string,
  prevState: TaskState,
  formData: FormData,
) {
  const title = formData.get('title');

  if (typeof title !== 'string' || title.trim() === '') {
    console.log('Validation failed: Title is required.');
    return {
      errors: { title: ['Title is required'] },
      message: 'Missing Fields. Failed to Create Task.',
    };
  }

  if (title.length < 3 || title.length > 100) {
    console.log(
      'Validation failed: Title must be between 3 and 100 characters.',
    );
    return {
      errors: { title: ['Title must be between 3 and 100 characters'] },
      message: 'Validation Error. Failed to Create Task.',
    };
  }

  try {
    await sql`
      INSERT INTO tasks (title, table_id, type)
      VALUES (${title}, ${table_id}, ${type})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Task.',
    };
  }
  revalidatePath('/dashboard');
  revalidatePath('/dashboard/tasks');
  revalidatePath('/dashboard/goals');
  // redirect('/dashboard/tasks');
}

export async function updateTask(
  tableId: string,
  taskId: string,
  prevState: TaskState,
  formData: FormData,
) {
  const title = formData.get('title');
  const priority = formData.get('priority');
  const date = formData.get('date').toString();
  const completed = formData.get('completed');

  let validatedDate: string | null;
  if (date == '') {
    validatedDate = null;
  } else {
    validatedDate = new Date(date).toDateString();
  }

  let completedBool: boolean;
  if (completed == 'on') {
    completedBool = true;
  } else {
    completedBool = false;
  }

  if (typeof title != 'string') return;
  if (typeof priority != 'string') return;

  // Completed
  if (completedBool) {
    console.log('completed');
    try {
      sql`
      UPDATE tasks
      set
      title=${title},
      completed=true,
      priority=${priority},
      status='done',
      date=${validatedDate}
      WHERE id=${taskId}`;
    } catch (error) {
      return {
        message: 'Database Error: Failed to Update Task.',
      };
    }
    // Planned
  } else if (!completedBool && validatedDate != null) {
    console.log('Planned');
    try {
      sql`
      UPDATE tasks
      set
      title=${title},
      completed=false,
      priority=${priority},
      status='planned',
      date=${validatedDate}
      WHERE id=${taskId}`;
    } catch (error) {
      return {
        message: 'Database Error: Failed to Update Task.',
      };
    }
    // Not planned
  } else {
    console.log('not planned');
    try {
      sql`
        UPDATE tasks
        set
        title=${title},
        completed=false,
        priority=${priority},
        status=null,
        date=null
        WHERE id=${taskId}`;
    } catch (error) {
      return {
        message: 'Database Error: Failed to Update Task.',
      };
    }
  }

  revalidatePath('/dashboard');
  revalidatePath('/dashboard/tasks');
  revalidatePath('/dashboard/goals');
  // redirect('/dashboard/tasks');
}

export type GoalState = {
  errors?: {
    title: string[];
    daysPerWeek?: string[];
  };
  message?: string | null;
};
export async function updateGoal(
  tableId: string,
  goalId: string,
  prevState: GoalState,
  formData: FormData,
) {
  const title = formData.get('title');
  const daysPerWeek = formData.get('daysPerWeek');

  if (typeof title != 'string') return;
  if (typeof daysPerWeek != 'string') return;
  const daysPerWeekInt = parseInt(daysPerWeek);

  try {
    sql`
    UPDATE tasks
    set
    title=${title},
    daysperweek=${daysPerWeekInt}
    WHERE id=${goalId}`;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update Task.',
    };
  }

  revalidatePath('/dashboard');
  revalidatePath('/dashboard/tasks');
  revalidatePath('/dashboard/goals');
  // redirect('/dashboard/tasks');
}

export async function updateTableName(tableId: string, newValue: string) {
  try {
    await sql`
      UPDATE tables 
      SET title=${newValue} 
      WHERE id=${tableId}
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update Task.',
    };
  }

  revalidatePath('/dashboard');
  revalidatePath('/dashboard/tasks');
  revalidatePath('/dashboard/goals');
  // redirect('/dashboard/tasks');
}

export async function deleteTask(taskId: string) {
  try {
    await sql`
      DELETE FROM tasks WHERE id = ${taskId}
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete Task.',
    };
  }

  revalidatePath('/dashboard');
  revalidatePath('/dashboard/tasks');
  revalidatePath('/dashboard/goals');
  // redirect('/dashboard/tasks');
}

export type WeeklyTaskState = {
  errors?: {
    monday?: string[];
    tuesday?: string[];
    wednesday?: string[];
    thursday?: string[];
    friday?: string[];
    saturday?: string[];
    sunday?: string[];
  };
  message?: string | null;
};
export async function updateWeeklyTask(
  taskId: string,
  prevState: WeeklyTaskState,
  formData: FormData,
) {
  console.log('updateWeeklyTask');
  console.log('formData', formData);
  console.log('taskId', taskId);

  const monday = formData.get('monday');
  const tuesday = formData.get('tuesday');
  const wednesday = formData.get('wednesday');
  const thursday = formData.get('thursday');
  const friday = formData.get('friday');
  const saturday = formData.get('saturday');
  const sunday = formData.get('sunday');

  const currentDate = new Date();
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
  const mondayDate = weekStart.toDateString();
  const tuesdayDate = new Date(
    format(addDays(weekStart, 1), 'yyyy-MM-dd'),
  ).toDateString();
  const wednesdayDate = new Date(
    format(addDays(weekStart, 2), 'yyyy-MM-dd'),
  ).toDateString();
  const thursdayDate = new Date(
    format(addDays(weekStart, 3), 'yyyy-MM-dd'),
  ).toDateString();
  const fridayDate = new Date(
    format(addDays(weekStart, 4), 'yyyy-MM-dd'),
  ).toDateString();
  const saturdayDate = new Date(
    format(addDays(weekStart, 5), 'yyyy-MM-dd'),
  ).toDateString();
  const sundayDate = new Date(
    format(addDays(weekStart, 6), 'yyyy-MM-dd'),
  ).toDateString();

  console.log('sundayDate');
  console.log(sundayDate);

  // manageTask('monday', monday, taskId, mondayDate);
  // manageTask('tuesday', tuesday, taskId, tuesdayDate);
  // manageTask('wednesday', wednesday, taskId, wednesdayDate);
  // manageTask('thursday', thursday, taskId, thursdayDate);
  // manageTask('friday', friday, taskId, fridayDate);
  // manageTask('saturday', saturday, taskId, saturdayDate);
  // manageTask('sunday', sunday, taskId, sundayDate);

  if (monday == 'on') {
    console.log('creating monday');
    try {
      sql`
      INSERT INTO task_completions (task_id, completion_date )
      VALUES (${taskId}, ${mondayDate})
      `;
    } catch (error) {
      console.log('error');
      console.log(error);
      return {
        message: 'Database Error: Failed to Update Task.',
      };
    }
  } else {
    console.log('deleting monday');
    try {
      sql`
      DELETE FROM task_completions
      WHERE task_id=${taskId} AND completion_date=${mondayDate}
    `;
    } catch (error) {
      console.log('error');
      console.log(error);
      return {
        message: 'Database Error: Failed to Update Task.',
      };
    }
  }
  if (tuesday == 'on') {
    console.log('creating tuesday');
    try {
      sql`
      INSERT INTO task_completions (task_id, completion_date )
      VALUES (${taskId}, ${tuesdayDate})
      `;
    } catch (error) {
      console.log('error');
      console.log(error);
      return {
        message: 'Database Error: Failed to Update Task.',
      };
    }
  } else {
    console.log('deleting tuesday');
    try {
      sql`
      DELETE FROM task_completions
      WHERE task_id=${taskId} AND completion_date=${tuesdayDate}
    `;
    } catch (error) {
      console.log('error');
      console.log(error);
      return {
        message: 'Database Error: Failed to Update Task.',
      };
    }
  }
  if (wednesday == 'on') {
    console.log('creating wednesday');
    try {
      sql`
      INSERT INTO task_completions (task_id, completion_date )
      VALUES (${taskId}, ${wednesdayDate})
      `;
    } catch (error) {
      console.log('error');
      console.log(error);
      return {
        message: 'Database Error: Failed to Update Task.',
      };
    }
  } else {
    console.log('deleting wednesday');
    try {
      sql`
      DELETE FROM task_completions
      WHERE task_id=${taskId} AND completion_date=${wednesdayDate}
    `;
    } catch (error) {
      console.log('error');
      console.log(error);
      return {
        message: 'Database Error: Failed to Update Task.',
      };
    }
  }

  if (thursday == 'on') {
    console.log('creating thursday');
    try {
      sql`
      INSERT INTO task_completions (task_id, completion_date )
      VALUES (${taskId}, ${thursdayDate})
      `;
    } catch (error) {
      console.log('error');
      console.log(error);
      return {
        message: 'Database Error: Failed to Update Task.',
      };
    }
  } else {
    console.log('deleting thursday');
    try {
      sql`
      DELETE FROM task_completions
      WHERE task_id=${taskId} AND completion_date=${thursdayDate}
    `;
    } catch (error) {
      console.log('error');
      console.log(error);
      return {
        message: 'Database Error: Failed to Update Task.',
      };
    }
  }
  if (friday == 'on') {
    console.log('creating friday');
    try {
      sql`
      INSERT INTO task_completions (task_id, completion_date )
      VALUES (${taskId}, ${fridayDate})
      `;
    } catch (error) {
      console.log('error');
      console.log(error);
      return {
        message: 'Database Error: Failed to Update Task.',
      };
    }
  } else {
    console.log('deleting friday');
    try {
      sql`
      DELETE FROM task_completions
      WHERE task_id=${taskId} AND completion_date=${fridayDate}
    `;
    } catch (error) {
      console.log('error');
      console.log(error);
      return {
        message: 'Database Error: Failed to Update Task.',
      };
    }
  }
  if (saturday == 'on') {
    console.log('creating saturday');
    try {
      sql`
      INSERT INTO task_completions (task_id, completion_date )
      VALUES (${taskId}, ${saturdayDate})
      `;
    } catch (error) {
      console.log('error');
      console.log(error);
      return {
        message: 'Database Error: Failed to Update Task.',
      };
    }
  } else {
    console.log('deleting saturday');
    try {
      sql`
      DELETE FROM task_completions
      WHERE task_id=${taskId} AND completion_date=${saturdayDate}
    `;
    } catch (error) {
      console.log('error');
      console.log(error);
      return {
        message: 'Database Error: Failed to Update Task.',
      };
    }
  }
  if (sunday == 'on') {
    console.log('creating sunday');
    try {
      sql`
      INSERT INTO task_completions (task_id, completion_date )
      VALUES (${taskId}, ${sundayDate})
      `;
    } catch (error) {
      console.log('error');
      console.log(error);
      return {
        message: 'Database Error: Failed to Update Task.',
      };
    }
  } else {
    console.log('deleting sunday');
    try {
      sql`
      DELETE FROM task_completions
      WHERE task_id=${taskId} AND completion_date=${sundayDate}
    `;
    } catch (error) {
      console.log('error');
      console.log(error);
      return {
        message: 'Database Error: Failed to Update Task.',
      };
    }
  }

  // revalidatePath('/dashboard');
  // revalidatePath('/dashboard/tasks');
  // revalidatePath('/dashboard/goals');
  // // redirect('/dashboard/tasks');
}
