'use client';

import { format } from 'date-fns';
import { Goal } from '@/app/lib/definitions';

import { Button } from '@/app/components/chadcn/button';
import { TrashIcon } from '@heroicons/react/24/outline';
import { updateTask, deleteTask } from '@/app/lib/actions';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/chadcn/select';

import { Calendar } from '@/app/components/chadcn/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/components/chadcn/popover';
import { cn } from '@lib/utils';
// import { Checkbox } from '@/components/chadcn/checkbox';

import { Checkbox } from '@components/chadcn/checkbox';
import { useRef } from 'react';
import { Input } from '@/app/components/chadcn/input';
import { useFormState } from 'react-dom';

export default function GoalTableRow({
  tableId,
  goal,
}: {
  tableId: string;
  goal: Goal;
}) {
  const initialState = { message: null, errors: {} };

  const formRef = useRef(null);
  const dateInputRef = useRef(null);

  const handleBlur = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  const updateTaskWithId = updateTask.bind(null, tableId, goal.id);
  const [state, dispatch] = useFormState(updateTaskWithId, initialState);

  return (
    <form
      key={goal.id}
      ref={formRef}
      action={dispatch}
      className="border-b-[1px] border-gray-200 odd:bg-gray-100"
    >
      <div className="flex w-full flex-row flex-nowrap items-center text-sm transition-colors hover:bg-gray-200">
        <div className="w-[350px] border-r-[1px] border-gray-200 px-3 py-1">
          <Input
            name="title"
            className="cursor-pointer border-none bg-transparent"
            defaultValue={goal.title}
            onBlur={(e) => {
              if (e.target.value == '') return;
              if (e.target.value == goal.title) return;
              handleBlur();
            }}
          />
        </div>
        <div className="relative h-full w-[175px] border-r-[1px] border-gray-200 px-3">
          <Checkbox id={goal.id} className="my-auto" />
          <label
            htmlFor={goal.id}
            className="absolute left-0 top-0 block h-full w-full cursor-pointer bg-transparent"
          ></label>
        </div>

        <div className="w-[175px] border-r-[1px] border-gray-200 px-3">
          <Select
            defaultValue={goal.status}
            name="status"
            aria-labelledby="status-error"
            onValueChange={(value) => {
              if (value == '') return;
              if (value == goal.status) return;
              handleBlur();
            }}
          >
            <SelectTrigger
              className={`w-[150px] border-none ${
                goal.status == 'planned'
                  ? 'bg-blue-700'
                  : goal.status == 'working on it'
                  ? 'bg-orange-700'
                  : goal.status == 'done'
                  ? 'bg-green-700'
                  : goal.status == 'stuck'
                  ? 'bg-red-700'
                  : 'border-none bg-transparent text-transparent'
              }`}
            >
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="7">7</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="px-3">
          <Button
            onClick={() => deleteTask(goal.id)}
            size="icon"
            variant="outline"
          >
            <div className="flex flex-row justify-center">
              <TrashIcon className="h-5 w-5" />
            </div>
          </Button>
        </div>
      </div>
    </form>
  );
}
