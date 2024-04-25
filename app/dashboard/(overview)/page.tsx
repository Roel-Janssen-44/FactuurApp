import { Card } from '@/app/components/dashboard/cards';
import RevenueChart from '@/app/components/dashboard/revenue-chart';
import LatestInvoices from '@/app/components/dashboard/latest-invoices';
import { lusitana } from '@/app/components/fonts';
import { Suspense } from 'react';
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/components/skeletons';
import CardWrapper from '@/app/components/dashboard/cards';
import { Metadata } from 'next';
import Tables from '@/app/components/tasks/tables';
import TasksToday from '@/app/components/dashboard/today';
import TasksTomorrow from '@/app/components/dashboard/tomorrow';
import Goals from '@/app/components/goals/tables';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/chadcn/accordion';
import WeeklyView from '@/app/components/dashboard/weeklyView';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <Accordion
        type="multiple"
        defaultValue={['My tasks', 'My goals']}
        className="w-full"
      >
        <Suspense fallback={'Loading weekly view'}>
          <WeeklyView />
        </Suspense>
        <div className="grid gap-6 sm:grid-cols-2">
          <Suspense fallback={'Loading tasks of today'}>
            <TasksToday />
          </Suspense>
          <Suspense fallback={'Loading tasks for tomorrow'}>
            <TasksTomorrow />
          </Suspense>
          {/* <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense> */}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          {/* <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense> */}
        </div>

        <AccordionItem value={'My tasks'}>
          <AccordionTrigger>
            <h2 className="mb-4 text-xl">My tasks</h2>
          </AccordionTrigger>
          <AccordionContent>
            <Suspense fallback={'Loading tasks'}>
              <Tables />
            </Suspense>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value={'My goals'}>
          <AccordionTrigger>
            <h2 className="mb-4 text-xl">My goals</h2>
          </AccordionTrigger>
          <AccordionContent>
            <Suspense fallback={'Loading goald'}>
              <Goals />
            </Suspense>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
