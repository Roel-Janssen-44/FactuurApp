'use server';

import { auth } from 'auth';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

import { format, startOfWeek, addDays } from 'date-fns';

const TableSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.string(),
});

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
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return;

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

  console.log('creating table');
  console.log(title);
  console.log(userId);
  try {
    await sql`
      INSERT INTO tables (title, type, user_id)
      VALUES (${title}, ${tableType}, ${userId})
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
  console.log('createTask');
  console.log('formData');
  console.log(formData);
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return;

  const title = formData.get('title');
  const date = formData.get('date').toString();

  let setDate: string | null;
  if (date == 'today') {
    const currentDate = new Date();
    setDate = currentDate.toDateString();
  } else if (date == 'tomorrow') {
    const currentDate = new Date();
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate = tomorrow.toDateString();
  } else {
    setDate = null;
  }

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
      INSERT INTO tasks (title, table_id, type, user_id, date)
      VALUES (${title}, ${table_id}, ${type}, ${userId}, ${setDate})
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

export async function deleteTable(tableId: string) {
  try {
    await sql`
      DELETE FROM "tables" WHERE id = ${tableId}
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
  // console.log('updateWeeklyTask');
  // console.log('formData', formData);
  // console.log('taskId', taskId);

  const day = formData.get('day');
  const completed = formData.get('completed');
  const completedId = formData.get('id');

  const currentDate = new Date();
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });

  const mondayDate = format(addDays(weekStart, 0), 'yyyy-MM-dd');
  const tuesdayDate = format(addDays(weekStart, 1), 'yyyy-MM-dd');
  const wednesdayDate = format(addDays(weekStart, 2), 'yyyy-MM-dd');
  const thursdayDate = format(addDays(weekStart, 3), 'yyyy-MM-dd');
  const fridayDate = format(addDays(weekStart, 4), 'yyyy-MM-dd');
  const saturdayDate = format(addDays(weekStart, 5), 'yyyy-MM-dd');
  const sundayDate = format(addDays(weekStart, 6), 'yyyy-MM-dd');

  let selectedDay: string;
  let isCompleted: boolean;
  if (completed == 'on') {
    isCompleted = true;
  } else {
    isCompleted = false;
  }
  if (day == 'monday') {
    selectedDay = mondayDate;
  } else if (day == 'tuesday') {
    selectedDay = tuesdayDate;
  } else if (day == 'wednesday') {
    selectedDay = wednesdayDate;
  } else if (day == 'thursday') {
    selectedDay = thursdayDate;
  } else if (day == 'friday') {
    selectedDay = fridayDate;
  } else if (day == 'saturday') {
    selectedDay = saturdayDate;
  } else if (day == 'sunday') {
    selectedDay = sundayDate;
  } else {
    throw new Error('Invalid day');
  }

  if (isCompleted) {
    try {
      sql`
      INSERT INTO task_completions (task_id, completion_date )
      VALUES (${taskId}, ${selectedDay})
      `;
    } catch (error) {
      console.log('error');
      console.log(error);
      return {
        message: 'Database Error: Failed to Update Task.',
      };
    }
  } else {
    if (completedId == null) return;
    completedId.toString();
    try {
      sql`
        DELETE FROM task_completions
        WHERE id=${String(completedId)}
      `;
    } catch (error) {
      console.log('error');
      console.log(error);
      return {
        message: 'Database Error: Failed to Update Task.',
      };
    }
  }

  revalidatePath('/dashboard');
  // // redirect('/dashboard/tasks');
}
