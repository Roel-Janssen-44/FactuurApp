'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

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
});

const TaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  priority: z.string(),
  date: z.string(),
  status: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

const CreateTable = TableSchema.omit({ id: true });
const CreateTask = TaskSchema.omit({
  id: true,
  priority: true,
  date: true,
  status: true,
});

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
export type TaskState = {
  errors?: {
    title?: string[];
    priority?: string[];
    date?: string[];
    status?: string[];
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

export async function createTable(prevState: TableState, formData: FormData) {
  const validatedFields = TableSchema.safeParse({
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
      INSERT INTO tables (title)
      VALUES (${title})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Table.',
    };
  }

  revalidatePath('/dashboard/tasks');
  redirect('/dashboard/tasks');
}

export async function createTask(
  table_id: string,
  prevState: TaskState,
  formData: FormData,
) {
  const validatedFields = CreateTask.safeParse({
    title: formData.get('title'),
  });

  console.log('validatedFields', validatedFields);
  console.log(validatedFields.error);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Table.',
    };
  }

  const { title } = validatedFields.data;

  console.log('craeteing task');
  console.log(title);
  console.log(table_id);
  try {
    await sql`
      INSERT INTO tasks (title, table_id)
      VALUES (${title}, ${table_id})
    `;
    console.log('task created');
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Task.',
    };
  }

  revalidatePath('/dashboard/tasks');
  redirect('/dashboard/tasks');
}

export async function updateTask(
  taskId: string,
  columnName: string,
  newValue: string,
) {
  const query = generateTaskQuery(taskId, columnName, newValue);
  try {
    switch (columnName) {
      case 'title':
        await sql`
          UPDATE tasks 
          SET title=${newValue} 
          WHERE id=${taskId}
        `;
        break;
      case 'priority':
        await sql`
          UPDATE tasks 
          SET priority=${newValue} 
          WHERE id=${taskId}
        `;
        break;
      case 'date':
        await sql`
          UPDATE tasks 
          SET date=${newValue} 
          WHERE id=${taskId}
        `;
        break;
      case 'status':
        await sql`
          UPDATE tasks 
          SET status=${newValue} 
          WHERE id=${taskId}
        `;
        break;
    }
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update Task.',
    };
  }

  revalidatePath('/dashboard/tasks');
  redirect('/dashboard/tasks');
}

const generateTaskQuery = (
  taskId: string,
  tableName: string,
  newValue: string,
) => {
  return `UPDATE tasks SET ${tableName}='${newValue}' WHERE id='${taskId}'`;
};

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

  revalidatePath('/dashboard/tasks');
  redirect('/dashboard/tasks');
}
