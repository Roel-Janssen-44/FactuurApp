'use client';

import { Goal, Table } from '@/app/lib/definitions';
import { Input } from '@/app/components/chadcn/input';

import CreateTask from '@/app/components/createRow';
import TableRow from '@/app/components/goals/row';
import { updateTableName } from '@/app/lib/actions';

import { Button } from '@/app/components/chadcn/button';
import { TrashIcon } from '@heroicons/react/24/outline';
import { deleteTable } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function TaskTableRow({
  table,
  goals,
  showDelete,
}: {
  table: Table;
  goals: Goal[];
  showDelete: boolean;
}) {
  const initialState = { message: null, errors: {} };
  const deleteTableWithId = deleteTable.bind(null, table.id);
  const [state, dispatch] = useFormState(deleteTableWithId, initialState);
  if (!goals) return null;

  const handleTitleChange = (newValue: string) => {
    if (newValue == table.title) return;
    updateTableName(table.id, newValue);
  };

  return (
    <div className="dark:bg-primary relative my-10 rounded-lg bg-gray-100 p-3">
      <h2 className="text- my-2 flex flex-row justify-between">
        <Input
          className="w-[300px] border-none bg-transparent text-xl dark:bg-transparent"
          defaultValue={table.title}
          onBlur={(e) => {
            handleTitleChange(e.target.value);
          }}
        />
        {showDelete && (
          <form
            key={'Delete_table_form' + table.id}
            action={dispatch}
            className={`relative flex flex-row border-b-[1px] border-gray-200 odd:bg-gray-100`}
          >
            <Button type="submit" size="icon" variant="outline">
              <div className="flex flex-row justify-center">
                <TrashIcon className="h-5 w-5" />
              </div>
            </Button>
          </form>
        )}
      </h2>
      <div className="scrollbar-thumb-active dark:bg-secondary w-full overflow-x-auto rounded-lg bg-gray-50 scrollbar scrollbar-track-slate-300 scrollbar-track-rounded scrollbar-thumb-rounded scrollbar-h-3">
        {goals.length != 0 && (
          <div className="table text-left text-sm font-normal">
            <div className="flex w-full flex-row flex-nowrap items-center">
              <div className="inline-block w-[350px] px-4 py-3 pb-2 font-medium sm:pl-6">
                Title
              </div>
              <div className="inline-block w-[175px] px-3 py-3 pb-2 font-medium">
                Days per week
              </div>
            </div>
          </div>
        )}
        <div className="relative table w-full max-w-full">
          {goals.length != 0 &&
            goals.map((goal: Goal) => (
              <TableRow goal={goal} tableId={table.id} key={goal.id} />
            ))}
          <CreateTask table_id={table.id} type="goal" />
        </div>
      </div>
    </div>
  );
}
