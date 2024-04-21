'use client';

import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createTable } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function CreateTask() {
  //   const initialState = { message: null, errors: {} };

  //   const [state, dispatch] = useFormState(createTable, initialState);

  return (
    // <form action={dispatch}>
    <form className="flex flex-row gap-2">
      <div className="rounded-md bg-gray-50">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="sr-only mb-2 block text-sm font-medium"
          >
            Choose a title for the task
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Enter table title"
                className="peer block w-[220px] rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
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
      <div className="rounded-md bg-gray-50">
        <div className="mb-4">
          <label
            htmlFor="priority"
            className="sr-only mb-2 block text-sm font-medium"
          >
            Choose a priority for the task
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="priority"
                name="priority"
                type="text"
                placeholder="Enter table priority"
                className="peer block w-[220px] rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                aria-labelledby="priority-error"
                required
              />
            </div>
          </div>
        </div>

        {/* <div id="priority-error" aria-live="polite" aria-atomic="true">
          {state.errors?.priority &&
            state.errors.priority.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div> */}
      </div>
    </form>
  );
}
