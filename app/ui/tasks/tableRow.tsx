'use client';

import { format } from 'date-fns';
import { Task } from '@/app/lib/definitions';

import { Button } from '@/components/ui/button';
import { TrashIcon } from '@heroicons/react/24/outline';
import { updateTask, deleteTask } from '@/app/lib/actions';

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

import { useRef } from 'react';
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
  const dateInputRef = useRef(null);

  const handleBlur = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  const updateTaskWithId = updateTask.bind(null, tableId, task.id);
  const [state, dispatch] = useFormState(updateTaskWithId, initialState);

  return (
    <form
      key={task.id}
      ref={formRef}
      action={dispatch}
      className="border-b-[1px] border-gray-200 even:bg-gray-100"
    >
      <div className="flex w-full flex-row flex-nowrap items-center text-sm transition-colors  last-of-type:border-none hover:bg-gray-200 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
        <div className="w-[350px] border-r-[1px] border-gray-200 px-3 py-1">
          <Input
            name="title"
            className="cursor-pointer border-none bg-transparent"
            defaultValue={task.title}
            onBlur={(e) => {
              if (e.target.value == '') return;
              if (e.target.value == task.title) return;
              handleBlur();
            }}
          />
        </div>
        <div className="w-[175px] border-r-[1px] border-gray-200 px-3">
          <Select
            defaultValue={task.priority}
            name="priority"
            aria-labelledby="priority-error"
            onValueChange={(value) => {
              if (value == '') return;
              if (value == task.priority) return;
              handleBlur();
            }}
          >
            <SelectTrigger
              className={`w-[150px] ${
                task.priority == 'low'
                  ? 'bg-red-400'
                  : task.priority == 'medium'
                  ? 'bg-red-600'
                  : task.priority == 'high'
                  ? 'bg-red-800'
                  : 'border-none bg-transparent text-transparent'
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
        <input
          aria-hidden
          className="hidden h-20 w-40 bg-green-500"
          name="date"
          type="date"
          ref={dateInputRef}
          defaultValue={task.date ? format(task.date, 'PPP') : null}
        />
        <div className="w-[175px] border-r-[1px] border-gray-200 px-3">
          <Popover>
            <PopoverTrigger asChild name="date">
              <Button
                name="date"
                variant={'outline'}
                className={cn(
                  'w-full justify-start border-none bg-transparent text-left font-normal hover:bg-transparent',
                  !task.date && 'text-muted-foreground',
                )}
              >
                {task.date ? format(task.date, 'PPP') : ''}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={new Date(task.date)}
                onSelect={(e) => {
                  dateInputRef.current.value = format(e, 'yyyy-MM-dd');
                  if (
                    format(new Date(task.date), 'yyyy-MM-dd') ==
                    format(e, 'yyyy-MM-dd')
                  ) {
                    dateInputRef.current.value = '';
                    return;
                  }
                  handleBlur();
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="w-[175px] border-r-[1px] border-gray-200 px-3">
          <Select
            defaultValue={task.status}
            name="status"
            aria-labelledby="status-error"
            onValueChange={(value) => {
              if (value == '') return;
              if (value == task.status) return;
              handleBlur();
            }}
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
        <div className="px-3">
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
