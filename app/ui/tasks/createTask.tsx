'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { createTask } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function CreateTask({ table_id }: { table_id: string }) {
  const initialState = { message: null, errors: {} };

  const [date, setDate] = useState<Date>();

  const createTaskWithId = createTask.bind(null, table_id);
  const [state, dispatch] = useFormState(createTaskWithId, initialState);

  return (
    <form action={dispatch} className="flex flex-row gap-2">
      {/* <form action={() => null} className="flex flex-row gap-2"> */}
      <input type="hidden" id="table_id" name="table_id" value={table_id} />
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
                placeholder="Title"
                className="peer block w-[350px] rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                aria-labelledby="title-error"
                required
              />
            </div>
          </div>
        </div>
        <div id="title-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.title &&
            state.errors.title.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>

      {/* <div className="rounded-md bg-gray-50">
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
                placeholder="Priority"
                className="peer block w-[150px] rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                aria-labelledby="priority-error"
                required
              />
            </div>
          </div>
        </div>
        <div id="priority-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.priority &&
            state.errors.priority.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>

      <div className="rounded-md bg-gray-50">
        <div className="mb-4">
          <label
            htmlFor="date"
            className="sr-only mb-2 block text-sm font-medium"
          >
            Choose a date for the task
          </label>
          <input
            id="date"
            aria-labelledby="date-error"
            type="hidden"
            name="date"
            value={date ? format(date, 'yyyy-MM-dd') : ''}
          />
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-[150px] justify-start text-left font-normal',
                      !date && 'text-muted-foreground',
                    )}
                  >
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
        <div id="date-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.date &&
            state.errors.date.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>

      <div className="rounded-md bg-gray-50">
        <div className="mb-4">
          <label
            htmlFor="status"
            className="sr-only mb-2 block text-sm font-medium"
          >
            Choose a status for the task
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <Select name="status" aria-labelledby="status-error">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Planned</SelectItem>
                  <SelectItem value="dark">Working on it</SelectItem>
                  <SelectItem value="system">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div id="status-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.status &&
            state.errors.status.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div> */}

      <button type="submit">Create task</button>
    </form>
  );
}
