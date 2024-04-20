import Pagination from '@/app/ui/tasks/pagination';
import Search from '@/app/ui/search';
import Tables from '@/app/ui/tasks/tables';
import { CreateInvoice } from '@/app/ui/tasks/buttons';
import { lusitana } from '@/app/ui/fonts';
// import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchTasks } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tasks',
};

export default async function Page() {
  //     {
  //   searchParams,
  // }: {
  //   searchParams?: {
  //     // query?: string;
  //     page?: string;
  //   };
  // })
  // {
  //   const query = searchParams?.query || '';
  //   const currentPage = Number(searchParams?.page) || 1;

  //   const totalPages = await fetchInvoicesPages(query);
  //   const tasks = await fetchTasks();

  //   console.log('tasks');
  //   console.log(tasks);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Tasks</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* <Search placeholder="Search invoices..." /> */}
        {/* <CreateInvoice /> */}
      </div>
      {/* To do - create skeleton */}
      <Suspense fallback={'fallback'}>
        <Tables />
      </Suspense>
      {/* <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div> */}
    </div>
  );
}
