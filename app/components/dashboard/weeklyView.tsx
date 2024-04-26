import { fetchGoals } from '@/app/lib/data';
import { Goal } from '@/app/lib/definitions';
import { format, startOfWeek, addDays } from 'date-fns';
import { useRef } from 'react';
import { Checkbox } from '@components/chadcn/checkbox';

import WeeklyViewRow from './weeklyViewRow';

export default async function WeeklyView() {
  const fetchedTasks = await fetchGoals();
  console.log('fetchedTasks');
  console.log(fetchedTasks);

  const fetchedGoals = await fetchGoals();
  let tasks: Goal[] = [];

  fetchedGoals.forEach((goal) => {
    if (!goal.table_id) return;

    const changedGoal: Goal = {
      id: goal.id,
      title: goal.title,
      table_id: goal.table_id,
      daysPerWeek: goal.daysperweek?.toString() || '0',
      completed: goal.completed,
    };

    tasks.push(changedGoal);
  });

  const currentDate = new Date();

  const currentDayOfTheWeek = currentDate.getDay();
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });

  console.log('currentDayOfTheWeek');
  console.log(currentDayOfTheWeek);
  console.log('weekStart');
  console.log(weekStart);

  // To do - get the week start date
  // const weekStart = '21-04-2024';

  //craete a ref for the date input
  // const dateMondayRef = useRef(null);

  return (
    <div className="mb-20">
      <h2 className="mb-4 text-xl">Weekly view</h2>
      <div className="w-full overflow-x-auto rounded-lg bg-gray-50 p-2 text-gray-900 scrollbar scrollbar-track-slate-300 scrollbar-thumb-slate-700 scrollbar-track-rounded scrollbar-thumb-rounded scrollbar-h-3">
        <div className="table text-left text-sm font-normal">
          <div className="flex w-full flex-row flex-nowrap items-center">
            <div className="inline-block w-[255px] px-4 py-3 pb-2 font-medium sm:pl-6">
              Weekstart {format(weekStart, 'dd-MM-yyyy')} <br />
              Task {format(currentDate, 'dd-MM-yyyy')}
            </div>

            <div
              className={`inline-block w-[95px] border-l-2 border-gray-200 px-4 py-3 pb-2 text-center font-medium sm:pl-6 ${
                format(currentDate, 'dd-MM-yyyy') ==
                format(weekStart, 'dd-MM-yyyy')
                  ? 'bg-gray-200'
                  : ''
              }`}
            >
              Monday
              <br />
              {format(weekStart, 'dd-MM-yyyy')}
            </div>
            <div
              className={`inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium ${
                format(currentDate, 'dd-MM-yyyy') ==
                format(addDays(weekStart, 1), 'dd-MM-yyyy')
                  ? 'bg-gray-200'
                  : ''
              }`}
            >
              Tuesday
              <br />
              {format(addDays(weekStart, 1), 'dd-MM-yyyy')}
            </div>
            <div
              className={`inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium ${
                format(currentDate, 'dd-MM-yyyy') ==
                format(addDays(weekStart, 2), 'dd-MM-yyyy')
                  ? 'bg-gray-200'
                  : ''
              }`}
            >
              <span className="-ml-1">Wednesday</span>
              <br />
              {format(addDays(weekStart, 2), 'dd-MM-yyyy')}
            </div>
            <div
              className={`inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium ${
                format(currentDate, 'dd-MM-yyyy') ==
                format(addDays(weekStart, 3), 'dd-MM-yyyy')
                  ? 'bg-gray-200'
                  : ''
              }`}
            >
              Thursday
              <br />
              {format(addDays(weekStart, 3), 'dd-MM-yyyy')}
            </div>
            <div
              className={`inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium ${
                format(currentDate, 'dd-MM-yyyy') ==
                format(addDays(weekStart, 4), 'dd-MM-yyyy')
                  ? 'bg-gray-200'
                  : ''
              }`}
            >
              Friday
              <br />
              {format(addDays(weekStart, 4), 'dd-MM-yyyy')}
            </div>
            <div
              className={`inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium ${
                format(currentDate, 'dd-MM-yyyy') ==
                format(addDays(weekStart, 5), 'dd-MM-yyyy')
                  ? 'bg-gray-200'
                  : ''
              }`}
            >
              Saterday
              <br />
              {format(addDays(weekStart, 5), 'dd-MM-yyyy')}
            </div>
            <div
              className={`inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium ${
                format(currentDate, 'dd-MM-yyyy') ==
                format(addDays(weekStart, 6), 'dd-MM-yyyy')
                  ? 'bg-gray-200'
                  : ''
              }`}
            >
              Sunday
              <br />
              {format(addDays(weekStart, 6), 'dd-MM-yyyy')}
            </div>
          </div>
        </div>
        <div className="relative mb-2 table w-full max-w-full">
          {tasks.map((task: Goal) => (
            <WeeklyViewRow task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}
