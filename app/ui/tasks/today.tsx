import { fetchTasksToday } from '@/app/lib/data';
import { Task, Table } from '@/app/lib/definitions';
import TasksTable from './table';
import CreateForm from './createTable';

export default async function TasksToday() {
  const fetchedTasks = await fetchTasksToday();
  const table: Table = {
    id: null,
    title: 'Tasks for today',
    tasks: fetchedTasks as Task[],
  };

  return (
    <div className="scrollbar-thumb-sky-700 scrollbar-track-sky-300">
      <TasksTable table={table} tasks={fetchedTasks as Task[]} />
    </div>
  );
}
