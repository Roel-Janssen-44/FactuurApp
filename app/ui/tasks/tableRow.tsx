'use client';

import { format } from 'date-fns';
import { formatDateToLocal } from '@/app/lib/utils';
import { Task, Table } from '@/app/lib/definitions';

import { Button } from '@/components/ui/button';
import CreateTask from './createTask';
import { TrashIcon } from '@heroicons/react/24/outline';
import { updateTask, deleteTask, updateTableName } from '@/app/lib/actions';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

import { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { useFormState } from 'react-dom';

export default function TaskTable({
  tableId,
  task,
}: {
  tableId: string;
  task: Task;
}) {
  const initialState = { message: null, errors: {} };

  const formRef = useRef(null);
  const inputRef = useRef(null);

  const handleBlur = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
      console.log('Submitting form');
    }
  };

  const updateTaskWithId = updateTask.bind(null, [tableId, task.id]);
  const [state, dispatch] = useFormState(updateTaskWithId, initialState);

  //

  // const handleChange = (
  //   taskId: string,
  //   columnName: string,
  //   defaultValue: string,
  //   newValue: string,
  // ) => {
  //   console.log('handleChange', taskId, columnName);
  //   console.log(defaultValue);
  //   console.log(newValue);
  //   if (newValue == defaultValue) return;
  //   updateTask(taskId, columnName, newValue);
  // };

  // const handleTitleChange = (newValue: string) => {
  //   console.log('handleTitleChange', table.id, newValue);
  //   if (newValue == table.title) return;
  //   console.log('update table title');
  //   updateTableName(table.id, newValue);
  //   // updateTask(tableId, 'title', newValue);
  // };

  return (
    <form action={dispatch}>
      <div
        key={task.id}
        className="flex w-full flex-row border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
      >
        <div className="px-3 py-1">
          <Input
            className="border-none bg-transparent"
            defaultValue={task.title}
            onBlur={(e) => {
              if (e.target.value == '') return;
              handleBlur();
              if (inputRef.current) {
                inputRef.current.value = '';
              }
            }}
          />
        </div>
        <div className="px-3">
          <Select
            defaultValue={task.priority}
            name="priority"
            aria-labelledby="priority-error"
            // onValueChange={(value) =>
            //   handleChange(task.id, 'priority', task.priority, value)
            // }
          >
            <SelectTrigger
              className={`w-[150px] ${
                task.priority == 'low'
                  ? 'bg-red-400'
                  : task.priority == 'medium'
                  ? 'bg-red-600'
                  : task.priority == 'high'
                  ? 'bg-red-800'
                  : 'bg-transparent'
              }`}
            >
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="null">None</SelectItem>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="px-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn(
                  'w-[150px] justify-start border-none bg-transparent text-left font-normal',
                  !task.date && 'text-muted-foreground',
                )}
              >
                {task.date ? format(task.date, 'PPP') : <span></span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={new Date(task.date)}
                // onSelect={(e) => {
                //   console.log(e);
                //   console.log(typeof e);
                //   if (e != null) {
                //     handleChange(
                //       task.id,
                //       'date',
                //       format(new Date(task.date), 'yyyy-MM-dd'),
                //       format(e, 'yyyy-MM-dd'),
                //     );
                //   } else {
                //     handleChange(
                //       task.id,
                //       'date',
                //       format(new Date(task.date), 'yyyy-MM-dd'),
                //       null,
                //     );
                //   }
                // }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="px-3">
          <Select
            defaultValue={task.status}
            name="status"
            aria-labelledby="status-error"
            // onValueChange={(value) =>
            //   handleChange(task.id, 'status', task.status, value)
            // }
          >
            <SelectTrigger
              className={`w-[150px] ${
                task.status == 'planned'
                  ? 'bg-blue-700'
                  : task.status == 'working on it'
                  ? 'bg-orange-700'
                  : task.status == 'done'
                  ? 'bg-green-700'
                  : task.status == 'stuck'
                  ? 'bg-red-700'
                  : 'bg-transparent'
              }`}
            >
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="null">None</SelectItem>
              <SelectItem value="planned">Planned</SelectItem>
              <SelectItem value="working on it">Working on it</SelectItem>
              <SelectItem value="done">Done</SelectItem>
              <SelectItem value="stuck">Stuck</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button
            onClick={() => deleteTask(task.id)}
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
