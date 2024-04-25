import { fetchGoals } from '@/app/lib/data';

export default async function WeeklyView() {
  const fetchedTasks = await fetchGoals();
  console.log('fetchedTasks');
  console.log(fetchedTasks);
  return (
    <div className="mb-20">
      <h2 className="mb-4 text-xl">Weekly view</h2>
      <div className="w-full overflow-x-auto rounded-lg bg-gray-50 p-2 text-gray-900 scrollbar scrollbar-track-slate-300 scrollbar-thumb-slate-700 scrollbar-track-rounded scrollbar-thumb-rounded scrollbar-h-3">
        <div className="table text-left text-sm font-normal">
          <div className="flex w-full flex-row flex-nowrap items-center">
            <div className="inline-block w-[255px] px-4 py-3 pb-2 font-medium sm:pl-6">
              Task
            </div>
            <div className="inline-block w-[95px] border-l-2 border-gray-200 px-4 py-3 pb-2 text-center font-medium sm:pl-6">
              Monday
            </div>
            <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
              Tuesday
            </div>
            <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
              <span className="-ml-1">Wednesday</span>
            </div>
            <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
              Thursday
            </div>
            <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
              Friday
            </div>
            <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
              Saterday
            </div>
            <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
              Sunday
            </div>
          </div>
        </div>
        <div className="relative mb-2 table w-full max-w-full">
          {fetchedTasks.map((task: Task) => (
            <div className="flex w-full flex-row flex-nowrap items-center border-t-[1px] border-gray-200">
              <div className="inline-block w-[255px] px-4 py-3 pb-2 font-medium sm:pl-6">
                {task.title}
                <span className="text-xs"> (2 of 5)</span>
              </div>
              <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
                x
              </div>
              <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
                x
              </div>
              <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
                x
              </div>
              <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
                x
              </div>
              <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
                x
              </div>
              <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
                x
              </div>
              <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
                x
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
