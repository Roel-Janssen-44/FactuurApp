'use client';

import { formatDateToLocal } from '@/app/lib/utils';
import { Task } from '@/app/lib/definitions';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import CreateTask from './createTask';

export default function TaskTable({ tasks }: { tasks: Task[] }) {
  if (!tasks) return null;

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Task | null>(null);

  const createNewTask = () => {
    setShowForm(true);
    setFormData(null);
  };

  return (
    <div>
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
          </tr>
        </thead>
        <tbody>
          {tasks.length != 0 &&
            tasks.map((task: Task) => (
              <tr
                key={task.id}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap px-3 py-3">{task.title}</td>
                <td className="whitespace-nowrap px-3 py-3">{task.priority}</td>
                <td className="whitespace-nowrap px-3 py-3">{task.date}</td>
                <td className="whitespace-nowrap px-3 py-3">
                  {task.completed ? 'Completed' : 'Not completed'}
                </td>
              </tr>
            ))}
          <tr
            onClick={() => setShowForm(!showForm)}
            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
          >
            <td>New</td>
          </tr>
        </tbody>
      </table>
      {showForm && <CreateTask />}

      {/* <Button
        className="my-2 rounded-lg bg-blue-500 p-3"
        onClick={() => setShowForm(!showForm)}
      >
        Add task
      </Button> */}
      {/* {showForm && <CreateTask />} */}
    </div>
  );
}
