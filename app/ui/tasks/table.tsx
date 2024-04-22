'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { formatDateToLocal } from '@/app/lib/utils';
import { Task, Table } from '@/app/lib/definitions';

import { Button } from '@/components/ui/button';
import CreateTask from './createTask';
import { TrashIcon } from '@heroicons/react/24/outline';
import { deleteTask } from '@/app/lib/actions';
import { Input } from '@/components/ui/input';

export default function TaskTable({
  table,
  tasks,
}: {
  table: Table;
  tasks: Task[];
}) {
  if (!tasks) return null;

  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState<Task | null>(null);

  const createNewTask = () => {
    setShowForm(true);
    setFormData(null);
  };

  const handleChange = (
    taskId: string,
    columnName: string,
    defaultValue: string,
    newValue: string,
  ) => {
    console.log(`task id: ${taskId}`);
    console.log(`columnName... ${columnName}`);
    console.log(`defaultValue... ${defaultValue}`);
    console.log(`new value... ${newValue}`);
    if (newValue == defaultValue) return;
    console.log('changing task');
  };

  return (
    <div className="my-10 rounded-lg bg-gray-50 p-6">
      <h2>{table.title}</h2>
      <table className="table min-w-full text-gray-900">
        <thead className="rounded-lg bg-gray-100 text-left text-sm font-normal">
          <tr>
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
              Title
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Priority
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Date
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Status
            </th>
            <th scope="col" className="px-3 py-5 font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {tasks.length != 0 &&
            tasks.map((task: Task) => (
              <tr
                key={task.id}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                {/* <td className="whitespace-nowrap px-3 py-3">{task.title}</td> */}
                <td className="whitespace-nowrap px-3 py-3">
                  {/* <input
                    onChange={(e) => {
                      handleChange(task.id, 'title', e.target.value);
                    }}
                    onUnfocus={(e) => {
                      handleChange(task.id, 'title', e.target.value);
                    }
                    // value={task.title}
                  /> */}
                  <Input
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
                <td className="whitespace-nowrap px-3 py-3">{task.priority}</td>
                <td className="whitespace-nowrap px-3 py-3">
                  {task.date && formatDateToLocal(task.date)}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {task.completed ? 'Completed' : 'Not completed'}
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

          <tr
            onClick={() => setShowForm(!showForm)}
            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
          >
            {!showForm && <td>+</td>}
          </tr>
        </tbody>
      </table>
      {showForm && <CreateTask table_id={table.id} />}
    </div>
  );
}
