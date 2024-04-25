'use client';

import { Goal, Table } from '@/app/lib/definitions';
import { Input } from '@/app/components/chadcn/input';

import CreateTask from '@/app/components/createRow';
import TableRow from '@/app/components/goals/row';
// import TableRow from '@components/tables/goals/row';
import { updateTableName } from '@/app/lib/actions';

export default function TaskTableRow({
  table,
  goals,
}: {
  table: Table;
  goals: Goal[];
}) {
  if (!goals) return null;

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
      <div className="w-full overflow-x-auto rounded-lg bg-gray-50 text-gray-900 scrollbar scrollbar-track-slate-300 scrollbar-thumb-slate-700 scrollbar-track-rounded scrollbar-thumb-rounded scrollbar-h-3">
        <div className="table text-left text-sm font-normal">
          <div className="flex w-full flex-row flex-nowrap items-center">
            <div className="inline-block w-[350px] px-4 py-3 pb-2 font-medium sm:pl-6">
              Title
            </div>
            <div className="inline-block w-[175px] px-3 py-3 pb-2 font-medium">
              Repeating task
            </div>
            <div className="inline-block w-[175px] px-3 py-3 pb-2 font-medium">
              Days per week
            </div>
          </div>
        </div>
        <div className="relative table w-full max-w-full">
          {goals.length != 0 &&
            goals.map((goal: Goal) => (
              <TableRow goal={goal} tableId={table.id} key={goal.id} />
            ))}
          <CreateTask table_id={table.id} />
        </div>
      </div>
    </div>
  );
}
