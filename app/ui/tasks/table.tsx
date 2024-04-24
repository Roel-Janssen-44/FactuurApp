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

  const handleTitleChange = (newValue: string) => {
    if (newValue == table.title) return;
    updateTableName(table.id, newValue);
  };

  return (
    <div className="relative my-10 rounded-lg bg-gray-100 p-3 first:mt-0">
      <h2 className="my-2 text-lg">
        <Input
          className="w-[300px] border-none bg-transparent text-xl"
          defaultValue={table.title}
          onBlur={(e) => {
            handleTitleChange(e.target.value);
          }}
        />
      </h2>
      <div className="scrollbar-thumb-rounded scrollbar-h-3 scrollbar-track-rounded scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 w-full overflow-x-scroll rounded-lg bg-gray-50 text-gray-900">
        <div className="table text-left text-sm font-normal">
          <div className="flex w-full flex-row flex-nowrap items-center">
            <div className="inline-block w-[350px] px-4 py-3 pb-2 font-medium sm:pl-6">
              Title
            </div>
            <div className="inline-block w-[175px] px-3 py-3 pb-2 font-medium">
              Priority
            </div>
            <div className="inline-block w-[175px] px-3 py-3 pb-2 pl-6 font-medium">
              Date
            </div>
            <div className="inline-block w-[175px] px-3 py-3 pb-2 font-medium">
              Status
            </div>
          </div>
        </div>
        <div className="relative table w-full max-w-full">
          {tasks.length != 0 &&
            tasks.map((task: Task) => (
              <TableRow task={task} tableId={table.id} key={task.id} />
            ))}
          <CreateTask table_id={table.id} />
        </div>
      </div>
    </div>
  );
}
