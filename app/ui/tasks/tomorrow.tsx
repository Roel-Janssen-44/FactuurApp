import { fetchTasksTomorrow } from '@/app/lib/data';
import { Task, Table } from '@/app/lib/definitions';
import TasksTable from './table';
import CreateForm from './createTable';

export default async function TasksTomorrow() {
  const fetchedTasks = await fetchTasksTomorrow();
  const table: Table = {
    id: null,
    title: 'Tasks for tomorrow',
    tasks: fetchedTasks as Task[],
  };

  return (
    <div className="scrollbar-thumb-sky-700 scrollbar-track-sky-300">
      <TasksTable table={table} tasks={fetchedTasks as Task[]} />
    </div>
  );
}
