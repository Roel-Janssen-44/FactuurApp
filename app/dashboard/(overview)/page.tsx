// 'use server';

import { Suspense } from 'react';
import { Metadata } from 'next';
import TasksToday from '@/app/components/dashboard/today';
import TasksTomorrow from '@/app/components/dashboard/tomorrow';
import Tables from '@/app/components/tasks/tables';
import Goals from '@/app/components/goals/tables';
import { exo } from '@/app/components/fonts';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/chadcn/accordion';
import WeeklyView from '@/app/components/dashboard/weeklyView';
import DashboardMessage from '@components/dashboardMessage';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function Page() {
  return (
    <main>
      <DashboardMessage />

      <Accordion
        type="multiple"
        defaultValue={['Weekly view', 'My tasks', 'My goals']}
        className="w-full"
      >
        <AccordionItem value={'Weekly view'}>
          <AccordionTrigger>
            <h2 className={`mb-4 text-2xl font-bold ${exo.className}`}>
              Weekly view
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            <Suspense fallback={'Loading weekly view'}>
              <WeeklyView />
            </Suspense>
            <div className="grid gap-6 sm:grid-cols-2">
              {/* To do - task creation in today & tomorrow */}
              <Suspense fallback={'Loading tasks of today'}>
                <TasksToday />
              </Suspense>
              <Suspense fallback={'Loading tasks for tomorrow'}>
                <TasksTomorrow />
              </Suspense>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value={'My tasks'}>
          <AccordionTrigger>
            <h2 className={`mb-4 text-2xl font-bold ${exo.className}`}>
              My tasks
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            <Suspense fallback={'Loading tasks'}>
              <Tables showCreateNewTable={false} />
            </Suspense>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value={'My goals'}>
          <AccordionTrigger>
            <h2 className={`mb-4 text-2xl font-bold ${exo.className}`}>
              My goals
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            <Suspense fallback={'Loading goald'}>
              <Goals showCreateNewTable={false} />
            </Suspense>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
