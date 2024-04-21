import Image from 'next/image';
// import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
// import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal } from '@/app/lib/utils';
// import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchTables } from '@/app/lib/data';
import { Task, Table } from '@/app/lib/definitions';
import TasksTable from './table';
import CreateForm from './createTable';
import { Suspense } from 'react';

export default async function TaskTables() {
  const fetchedTables = await fetchTables();
  const tables: Table[] = fetchedTables.map((table) => {
    return {
      id: table.id,
      title: table.title,
      tasks: [],
    };
  });
  console.log('tables');
  console.log(tables);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg p-2 md:pt-0">
          {tables?.map((table: Table) => (
            <div className="my-10 rounded-lg bg-gray-50 p-6">
              <h2 className="mb-2">{table.title}</h2>
              <TasksTable tasks={table.tasks} />
            </div>
          ))}
          <CreateForm />
        </div>
      </div>
    </div>
  );
}
