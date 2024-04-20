import { formatDateToLocal } from '@/app/lib/utils';
import { Task } from '@/app/lib/definitions';

export default async function TaskTable({ tasks }: { tasks: Task[] }) {
  return (
    <table className="hidden min-w-full text-gray-900 md:table">
      <thead className="rounded-lg text-left text-sm font-normal">
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
          <th scope="col" className="relative py-3 pl-6 pr-3">
            <span className="sr-only">Expand</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {tasks?.map((task: Task) => (
          <tr
            key={task.id}
            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
          >
            <td className="whitespace-nowrap px-3 py-3">{task.title}</td>
            <td className="whitespace-nowrap px-3 py-3">{task.priority}</td>
            <td className="whitespace-nowrap px-3 py-3">
              {formatDateToLocal(task.date)}
            </td>
            <td className="whitespace-nowrap px-3 py-3">
              {task.completed ? 'Completed' : 'Not completed'}
              {/* <taskStatus status={task.status} /> */}
            </td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
              <div className="flex justify-end gap-3">
                {/* <Updatetask id={task.id} />
                <Deletetask id={task.id} /> */}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
