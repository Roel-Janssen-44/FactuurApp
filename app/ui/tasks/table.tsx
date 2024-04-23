'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { formatDateToLocal } from '@/app/lib/utils';
import { Task, Table } from '@/app/lib/definitions';

import { Button } from '@/components/ui/button';
import CreateTask from './createTask';
import { TrashIcon } from '@heroicons/react/24/outline';
import { updateTask, deleteTask, updateTableName } from '@/app/lib/actions';
import { Input } from '@/components/ui/input';

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

export default function TaskTable({
  table,
  tasks,
}: {
  table: Table;
  tasks: Task[];
}) {
  // const [showForm, setShowForm] = useState(true);
  // const [formData, setFormData] = useState<Task | null>(null);

  if (!tasks) return null;

  // const createNewTask = () => {
  //   setShowForm(true);
  //   setFormData(null);
  // };

  const handleChange = (
    taskId: string,
    columnName: string,
    defaultValue: string,
    newValue: string,
  ) => {
    console.log('handleChange', taskId, columnName);
    console.log(defaultValue);
    console.log(newValue);
    if (newValue == defaultValue) return;
    updateTask(taskId, columnName, newValue);
  };

  const handleTitleChange = (newValue: string) => {
    console.log('handleTitleChange', table.id, newValue);
    if (newValue == table.title) return;
    console.log('update table title');
    updateTableName(table.id, newValue);
    // updateTask(tableId, 'title', newValue);
  };

  return (
    <div className="my-10 rounded-lg bg-gray-50 p-6 first:mt-0">
      <h2 className="mb-4 text-lg">
        <Input
          className="w-[350px] border-none bg-transparent text-xl"
          defaultValue={table.title}
          onBlur={(e) => {
            handleTitleChange(e.target.value);
          }}
        />
      </h2>
      <table className="table min-w-full text-gray-900">
        <thead className="rounded-lg bg-gray-100 text-left text-sm font-normal">
          <tr>
            <th scope="col" className="px-4 py-2 font-medium sm:pl-6">
              Title
            </th>
            <th scope="col" className="px-3 py-2 font-medium">
              Priority
            </th>
            <th scope="col" className="px-3 py-2 pl-6 font-medium">
              Date
            </th>
            <th scope="col" className="px-3 py-2 font-medium">
              Status
            </th>
            <th scope="col" className="px-3 py-2 font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {tasks.length != 0 &&
            tasks.map((task: Task) => (
              <tr
                key={task.id}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="px-3 py-1">
                  <Input
                    className="border-none bg-transparent"
                    defaultValue={task.title}
                    onBlur={(e) => {
                      handleChange(
                        task.id,
                        'title',
                        task.title,
                        e.target.value,
                      );
                    }}
                  />
                </td>
                <td className="px-3">
                  <Select
                    defaultValue={task.priority}
                    name="priority"
                    aria-labelledby="priority-error"
                    onValueChange={(value) =>
                      handleChange(task.id, 'priority', task.priority, value)
                    }
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
                </td>
                <td className="px-3">
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
                        onSelect={(e) => {
                          console.log(e);
                          console.log(typeof e);
                          if (e != null) {
                            handleChange(
                              task.id,
                              'date',
                              format(new Date(task.date), 'yyyy-MM-dd'),
                              format(e, 'yyyy-MM-dd'),
                            );
                          } else {
                            handleChange(
                              task.id,
                              'date',
                              format(new Date(task.date), 'yyyy-MM-dd'),
                              null,
                            );
                          }
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </td>
                <td className="px-3">
                  <Select
                    defaultValue={task.status}
                    name="status"
                    aria-labelledby="status-error"
                    onValueChange={(value) =>
                      handleChange(task.id, 'status', task.status, value)
                    }
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
                      <SelectItem value="working on it">
                        Working on it
                      </SelectItem>
                      <SelectItem value="done">Done</SelectItem>
                      <SelectItem value="stuck">Stuck</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                <td>
                  <Button
                    onClick={() => deleteTask(task.id)}
                    size="icon"
                    variant="outline"
                  >
                    <div className="flex flex-row justify-center">
                      <TrashIcon className="h-5 w-5" />
                    </div>
                  </Button>
                </td>
              </tr>
            ))}

          {/* <tr
            onClick={() => setShowForm(!showForm)}
            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
          >
            {!showForm && <td>+</td>}
          </tr> */}
        </tbody>
      </table>
      <CreateTask table_id={table.id} />
    </div>
  );
}
