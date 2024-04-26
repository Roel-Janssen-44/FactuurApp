'use client';

import { format, startOfWeek, addDays } from 'date-fns';
import { Goal } from '@/app/lib/definitions';
import { Button } from '@/app/components/chadcn/button';
import { TrashIcon } from '@heroicons/react/24/outline';
import { updateWeeklyTask, deleteTask } from '@/app/lib/actions';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/chadcn/select';

import { Checkbox } from '@components/chadcn/checkbox';
import { useRef } from 'react';
import { Input } from '@/app/components/chadcn/input';
import { useFormState } from 'react-dom';

export default function WeeklyViewRow({ task }: { task: Goal }) {
  const initialState = { message: null, errors: {} };

  const formRef = useRef(null);

  const handleBlur = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };
  const updateWeeklyTaskWithId = updateWeeklyTask.bind(null, task.id);
  const [state, dispatch] = useFormState(updateWeeklyTaskWithId, initialState);

  const currentDate = new Date();
  const currentDayOfTheWeek = currentDate.getDay();
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });

  const mondayRef = useRef(null);
  const tuesdayRef = useRef(null);
  const wednesdayRef = useRef(null);
  const thursdayRef = useRef(null);
  const fridayRef = useRef(null);
  const saturdayRef = useRef(null);
  const sundayRef = useRef(null);

  return (
    <form
      key={task.id}
      ref={formRef}
      action={dispatch}
      className="border-b-[1px] border-gray-200 odd:bg-gray-100"
    >
      <div className="flex w-full flex-row flex-nowrap items-center text-sm transition-colors hover:bg-gray-200">
        <div className="inline-block w-[255px] px-4 py-3 pb-2 font-medium sm:pl-6">
          {task.title}
          <span className="text-xs"> (2 of {task.daysPerWeek})</span>
          <br />
          {task.id}
        </div>
        <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
          {/* <input ref={mondayRef} type="monday" name="monday" id="monday" /> */}
          <Checkbox
            name="monday"
            onCheckedChange={(e) => {
              handleBlur();
            }}
            // onCheckedChange={(e) => {
            //   console.log('check change');
            //   console.log(e);
            //   if (mondayRef.current) {
            //     if (e) {
            //       mondayRef.current.value = format(
            //         new Date(weekStart),
            //         'yyyy-MM-dd',
            //       );
            //     } else {
            //       mondayRef.current.value = '';
            //     }
            //   }
            //   handleBlur();
            // }}
          />
        </div>
        <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
          {/* <input ref={tuesdayRef} type="tuesday" name="tuesday" id="tuesday" /> */}
          <Checkbox
            name="tuesday"
            onCheckedChange={(e) => {
              handleBlur();
            }}
            // onCheckedChange={(e) => {
            //   console.log('check change');
            //   console.log(e);
            //   if (tuesdayRef.current) {
            //     if (e) {
            //       tuesdayRef.current.value = format(
            //         addDays(new Date(weekStart), 1),
            //         'yyyy-MM-dd',
            //       );
            //     } else {
            //       tuesdayRef.current.value = '';
            //     }
            //   }
            //   handleBlur();
            // }}
          />
        </div>
        <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
          {/* <input
            ref={wednesdayRef}
            type="wednesday"
            name="wednesday"
            id="wednesday"
          /> */}
          <Checkbox
            name="wednesday"
            onCheckedChange={(e) => {
              handleBlur();
            }}
            // onCheckedChange={(e) => {
            //   console.log('check change');
            //   console.log(e);
            //   if (wednesdayRef.current) {
            //     if (e) {
            //       wednesdayRef.current.value = format(
            //         addDays(new Date(weekStart), 2),
            //         'yyyy-MM-dd',
            //       );
            //     } else {
            //       wednesdayRef.current.value = '';
            //     }
            //   }
            //   handleBlur();
            // }}
          />
        </div>
        <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
          {/* <input
            ref={thursdayRef}
            type="thursday"
            name="thursday"
            id="thursday"
          /> */}
          <Checkbox
            name="thursday"
            onCheckedChange={(e) => {
              handleBlur();
            }}
            // onCheckedChange={(e) => {
            //   console.log('check change');
            //   console.log(e);
            //   if (thursdayRef.current) {
            //     if (e) {
            //       thursdayRef.current.value = format(
            //         addDays(new Date(weekStart), 3),
            //         'yyyy-MM-dd',
            //       );
            //     } else {
            //       thursdayRef.current.value = '';
            //     }
            //   }
            //   handleBlur();
            // }}
          />
        </div>

        <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
          {/* <input ref={fridayRef} type="friday" name="friday" id="friday" /> */}
          <Checkbox
            name="friday"
            onCheckedChange={(e) => {
              handleBlur();
            }}
            // onCheckedChange={(e) => {
            //   console.log('check change');
            //   console.log(e);
            //   if (fridayRef.current) {
            //     if (e) {
            //       fridayRef.current.value = format(
            //         addDays(new Date(weekStart), 4),
            //         'yyyy-MM-dd',
            //       );
            //     } else {
            //       fridayRef.current.value = '';
            //     }
            //   }
            //   handleBlur();
            // }}
          />
        </div>
        <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
          {/* <input
            ref={saturdayRef}
            type="saturday"
            name="saturday"
            id="saturday"
          /> */}
          <Checkbox
            name="saturday"
            onCheckedChange={(e) => {
              handleBlur();
            }}
            // onCheckedChange={(e) => {
            //   console.log('check change');
            //   console.log(e);
            //   if (saturdayRef.current) {
            //     if (e) {
            //       saturdayRef.current.value = format(
            //         addDays(new Date(weekStart), 5),
            //         'yyyy-MM-dd',
            //       );
            //     } else {
            //       saturdayRef.current.value = '';
            //     }
            //   }
            //   handleBlur();
            // }}
          />
        </div>
        <div className="inline-block w-[95px] border-l-2 border-gray-200 px-3 py-3 pb-2 text-center font-medium">
          {/* <input ref={sundayRef} type="sunday" name="sunday" id="sunday" /> */}
          <Checkbox
            name="sunday"
            onCheckedChange={(e) => {
              handleBlur();
            }}
            // onCheckedChange={(e) => {
            //   console.log('check change');
            //   console.log(e);
            //   if (sundayRef.current) {
            //     if (e) {
            //       sundayRef.current.value = format(
            //         addDays(new Date(weekStart), 6),
            //         'yyyy-MM-dd',
            //       );
            //     } else {
            //       sundayRef.current.value = '';
            //     }
            //   }
            //   handleBlur();
            // }}
          />
        </div>
      </div>
    </form>
  );
}
