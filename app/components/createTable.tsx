'use client';

import { Button } from '@/app/components/button';
import { createTable } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function CreateTable({ type }: { type: 'goal' | 'task' }) {
  const initialState = { message: null, errors: {} };
  const createTableWithType = createTable.bind(null, type);
  const [state, dispatch] = useFormState(createTableWithType, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 dark:bg-primary md:p-6">
        <div className="text-tertiary mb-4 dark:text-white">
          <label htmlFor="title" className="mb-4 block text-sm font-medium">
            New table name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="title"
                name="title"
                type="text"
                placeholder="..."
                className="peer mb-2 block w-full flex-1 rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500 dark:bg-transparent"
                aria-labelledby="title-error"
                required
              />
            </div>
            <Button
              type="submit"
              className="bg-primary dark:bg-white dark:text-primary"
            >
              Create table
            </Button>
          </div>
        </div>

        {/* <div id="title-error" aria-live="polite" aria-atomic="true">
          {state.errors?.title &&
            state.errors.title.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div> */}
      </div>
    </form>
  );
}
