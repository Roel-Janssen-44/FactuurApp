import GoalTables from '@/app/ui/tasks/goalTables';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Tasks',
};

export default async function Page() {
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-4 text-2xl`}>Goals</h1>
      <Suspense fallback={'fallback'}>
        <GoalTables />
      </Suspense>
    </div>
  );
}
