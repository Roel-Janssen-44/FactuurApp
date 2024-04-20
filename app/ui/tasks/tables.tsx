import Image from 'next/image';
// import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
// import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal } from '@/app/lib/utils';
// import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchTables } from '@/app/lib/data';
import { Task, Table } from '@/app/lib/definitions';
import TaskTable from './table';

export default async function InvoicesTable() {
  // const tables = await fetchTables();
  const tables: Table[] = [
    {
      id: 'iud-1',
      title: 'Fitness',
      tasks: [
        {
          id: 'goal-11',
          title: 'Morning Jog',
          completed: false,
          priority: 'medium',
          date: '2024-04-20',
        } as Task,
        {
          id: 'goal-12',
          title: 'Read a book',
          completed: false,
          priority: 'low',
          date: '2024-04-20',
        } as Task,
      ],
    },
    {
      id: 'iud-2',
      title: 'Work',
      tasks: [
        {
          id: 'goal-21',
          title: 'Morning Jog',
          completed: false,
          priority: 'medium',
          date: '2024-04-20',
        },
        {
          id: 'goal-22',
          title: 'Read a book',
          completed: false,
          priority: 'low',
          date: '2024-04-20',
        },
      ],
    },
  ];

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          {tables?.map((table: Table) => (
            <div className="my-10">
              <h2>{table.title}</h2>
              <TaskTable tasks={table.tasks} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
