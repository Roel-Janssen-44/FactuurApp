'use client';

import { useState, useRef } from 'react';
import { createTask } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { Input } from '@/components/ui/input';

export default function CreateTask({ table_id }: { table_id: string }) {
  const initialState = { message: null, errors: {} };

  // const createTaskWithId = createTask.bind(null, table_id);
  // const [state, dispatch] = useFormState(createTaskWithId, initialState);

  const formRef = useRef(null);
  const inputRef = useRef(null);

  const handleBlur = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
      console.log('Submitting form');
    }
  };

  const createTaskWithTableId = createTask.bind(null, table_id);
  const [state, dispatch] = useFormState(createTaskWithTableId, initialState);

  return (
    <form ref={formRef} className="flex flex-row gap-2" action={dispatch}>
      {/* <form ref={formRef} action={dispatch} className="flex flex-row gap-2"> */}
      <div className="w-full rounded-md bg-gray-50">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="sr-only mb-2 block text-sm font-medium"
          >
            Choose a title for the task
          </label>
          <div className="relative">
            <Input
              ref={inputRef}
              id="title"
              name="title"
              type="text"
              placeholder="..."
              className="peer ml-3 mt-1 block w-screen max-w-[98%] rounded-md border-none bg-transparent py-2 pl-3 pr-20 text-sm outline-2 placeholder:text-gray-500"
              aria-labelledby="title-error"
              required
              onBlur={(e) => {
                if (e.target.value == '') return;
                handleBlur();
                if (inputRef.current) {
                  inputRef.current.value = '';
                }
              }}
            />
          </div>
        </div>
        {/* <div id="title-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.title &&
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
