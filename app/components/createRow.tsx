'use client';

import { useState, useRef } from 'react';
import { createTask } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { Input } from '@/app/components/chadcn/input';

export default function CreateTask({ table_id }: { table_id: string }) {
  const initialState = { message: null, errors: {} };

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
    <form ref={formRef} action={dispatch}>
      <div className="w-full rounded-md bg-transparent pr-6">
        <div className="mb-1">
          <label
            htmlFor="title"
            className="sr-only mb-2 block text-sm font-medium"
          >
            Choose a title for the task
          </label>
          <div className="w-full">
            <Input
              ref={inputRef}
              id="title"
              name="title"
              type="text"
              placeholder="..."
              className="ml-3 mt-1 block w-full rounded-md border-none bg-transparent py-2 pl-3 pr-20 text-sm outline-2 placeholder:text-gray-400"
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
      </div>
    </form>
  );
}
