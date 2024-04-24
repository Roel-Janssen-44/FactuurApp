import { fetchGoals } from '@/app/lib/data';
import { Task, Table, GoalTask } from '@/app/lib/definitions';
import TasksTable from './table';

export default async function Goals() {
  const fetchedGoals = await fetchGoals();
  const table: Table = {
    id: null,
    title: 'Monthly goals',
    tasks: fetchedGoals as Task[],
  };

  return (
    <div className="scrollbar-thumb-sky-700 scrollbar-track-sky-300">
      <TasksTable table={table} tasks={fetchedGoals as GoalTask[]} />
    </div>
  );
}
