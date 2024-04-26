'use client';

import { Goal } from '@/app/lib/definitions';
import { format, startOfWeek, addDays } from 'date-fns';
import { useRef } from 'react';
import { useFormState } from 'react-dom';

import { updateWeeklyTask } from '@/app/lib/actions';

import { Checkbox } from '@components/chadcn/checkbox';

export default async function WeeklyViewRow({ task }: { task: Goal }) {
  const initialState = { message: null, errors: {} };

  const currentDate = new Date();
  const currentDayOfTheWeek = currentDate.getDay();
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });

  const mondayRef = useRef(null);
  const tuesdayRef = useRef(null);
  const wednesdagRef = useRef(null);
  const thursdayRef = useRef(null);
  const fridayRef = useRef(null);
  const saturdayRef = useRef(null);
  const sundayRef = useRef(null);

  const handleChange = () => {
    console.log('handleChange');
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  const formRef = useRef(null);

  const updateWeeklyTaskWithId = updateWeeklyTask.bind(null, task.id);
  const [state, dispatch] = useFormState(updateWeeklyTaskWithId, initialState);

  return (
    <form
      ref={formRef}
      action={dispatch}
      className="flex w-full flex-row flex-nowrap items-center border-t-[1px] border-gray-200"
    >
      <div className="inline-block w-[255px] px-4 py-3 pb-2 font-medium sm:pl-6">
        {task.title}
        <span className="text-xs"> (2 of {task.daysPerWeek})</span>
      </div>
      <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
        <Checkbox
          id={task.id}
          defaultChecked={task.completed}
          onCheckedChange={(value) => {
            if (value) {
              mondayRef.current.value = format(weekStart, 'yyyy-MM-dd');
            } else {
              mondayRef.current.value = '';
            }
            handleChange();
          }}
        />
        <input
          // aria-hidden
          className=" h-20 w-20 bg-green-500"
          name="monday"
          type="date"
          ref={mondayRef}
          // To do - default value
          // defaultValue={}
        />
      </div>
      <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
        <Checkbox
          id={task.id}
          defaultChecked={task.completed}
          onCheckedChange={(value) => {
            if (value) {
              tuesdayRef.current.value = format(
                addDays(weekStart, 1),
                'yyyy-MM-dd',
              );
            } else {
              tuesdayRef.current.value = '';
            }
            handleChange();
          }}
        />
        <input
          // aria-hidden
          className=" h-20 w-20 bg-green-500"
          name="tuesday"
          type="date"
          ref={tuesdayRef}
          // To do - default value
          // defaultValue={}
        />
      </div>
      <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
        <Checkbox
          id={task.id}
          defaultChecked={task.completed}
          onCheckedChange={(value) => {
            if (value) {
              wednesdagRef.current.value = format(
                addDays(weekStart, 2),
                'yyyy-MM-dd',
              );
            } else {
              wednesdagRef.current.value = '';
            }
            handleChange();
          }}
        />
        <input
          // aria-hidden
          className=" h-20 w-20 bg-green-500"
          name="wednesday"
          type="date"
          ref={wednesdagRef}
          // To do - default value
          // defaultValue={}
        />
      </div>
      <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
        <Checkbox
          id={task.id}
          defaultChecked={task.completed}
          onCheckedChange={(value) => {
            if (value) {
              thursdayRef.current.value = format(
                addDays(weekStart, 3),
                'yyyy-MM-dd',
              );
            } else {
              thursdayRef.current.value = '';
            }
            handleChange();
          }}
        />
        <input
          // aria-hidden
          className=" h-20 w-20 bg-green-500"
          name="thurday"
          type="date"
          ref={thursdayRef}
          // To do - default value
          // defaultValue={}
        />
      </div>
      <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
        <Checkbox
          id={task.id}
          defaultChecked={task.completed}
          onCheckedChange={(value) => {
            if (value) {
              fridayRef.current.value = format(
                addDays(weekStart, 4),
                'yyyy-MM-dd',
              );
            } else {
              fridayRef.current.value = '';
            }
            handleChange();
          }}
        />
        <input
          // aria-hidden
          className=" h-20 w-20 bg-green-500"
          name="friday"
          type="date"
          ref={fridayRef}
          // To do - default value
          // defaultValue={}
        />
      </div>
      <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
        <Checkbox
          id={task.id}
          defaultChecked={task.completed}
          onCheckedChange={(value) => {
            if (value) {
              saturdayRef.current.value = format(
                addDays(weekStart, 5),
                'yyyy-MM-dd',
              );
            } else {
              saturdayRef.current.value = '';
            }
            handleChange();
          }}
        />
        <input
          // aria-hidden
          className=" h-20 w-20 bg-green-500"
          name="saturday"
          type="date"
          ref={saturdayRef}
          // To do - default value
          // defaultValue={}
        />
      </div>
      <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
        <Checkbox
          id={task.id}
          defaultChecked={task.completed}
          onCheckedChange={(value) => {
            if (value) {
              sundayRef.current.value = format(
                addDays(weekStart, 6),
                'yyyy-MM-dd',
              );
            } else {
              sundayRef.current.value = '';
            }
            handleChange();
          }}
        />
        <input
          // aria-hidden
          className=" h-20 w-20 bg-green-500"
          name="sunday"
          type="date"
          ref={sundayRef}
          // To do - default value
          // defaultValue={}
        />
      </div>
    </form>
  );
}
