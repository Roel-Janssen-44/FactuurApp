'use client';

import { Button } from '@/app/ui/button';
import { createTable } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function CreateTable({ type }: { type: 'goal' | 'task' }) {
  const initialState = { message: null, errors: {} };

  const createTableWithType = createTable.bind(null, type);
  const [state, dispatch] = useFormState(createTableWithType, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Choose a title
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Enter table title"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                aria-labelledby="title-error"
                required
              />
            </div>
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

      <div className="flex justify-end gap-4">
        <Button type="submit">Create table</Button>
      </div>
    </form>
  );
}
