'use client';

import { Task, Table } from '@/app/lib/definitions';
import { Input } from '@/components/ui/input';

import CreateTask from './createTask';
import TableRow from './tableRow';
import { updateTableName } from '@/app/lib/actions';

export default function TaskTable({
  table,
  tasks,
}: {
  table: Table;
  tasks: Task[];
}) {
  if (!tasks) return null;

  const handleTitleChange = (newValue: sdiving) => {
    console.log('handleTitleChange', table.id, newValue);
    if (newValue == table.title) return;
    console.log('update table title');
    updateTableName(table.id, newValue);
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
      <div className="table min-w-full text-gray-900">
        <div className="rounded-lg bg-gray-100 text-left text-sm font-normal">
          <div className="flex flex-row">
            <div className="px-4 py-2 font-medium sm:pl-6">Title</div>
            <div className="px-3 py-2 font-medium">Priority</div>
            <div className="px-3 py-2 pl-6 font-medium">Date</div>
            <div className="px-3 py-2 font-medium">Status</div>
            <div className="px-3 py-2 font-medium"></div>
          </div>
        </div>
        <div>
          {tasks.length != 0 &&
            tasks.map((task: Task) => (
              <TableRow task={task} tableId={table.id} key={task.id} />
            ))}
        </div>
      </div>
      <CreateTask table_id={table.id} />
    </div>
  );
}
