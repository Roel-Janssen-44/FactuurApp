import Image from 'next/image';
// import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
// import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal } from '@/app/lib/utils';
// import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchTables, fetchTasks } from '@/app/lib/data';
import { Task, Table } from '@/app/lib/definitions';
import TasksTable from './table';
import CreateForm from './createTable';
import { Suspense } from 'react';

export default async function TaskTables() {
  const fetchedTables = await fetchTables();
  const fetchedTasks = await fetchTasks();
  let tables: Table[] = fetchedTables.map((table) => {
    return {
      id: table.id,
      title: table.title,
      tasks: [],
    };
  });

  fetchedTasks.forEach((task: Task) => {
    if (!task.table_id) return;

    const table = tables.find((table) => table.id === task.table_id);
    if (table) {
      table.tasks.push(task);
    }
  });

  return (
    <div>
      {tables?.map((table: Table) => (
        <TasksTable key={table.id} table={table} tasks={table.tasks} />
      ))}
      <CreateForm />
    </div>
  );
}
