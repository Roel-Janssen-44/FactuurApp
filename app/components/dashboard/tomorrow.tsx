import { fetchTasksTomorrow } from '@/app/lib/data';
import { Task, Table } from '@/app/lib/definitions';
import TasksTable from '@components/tasks/table';

export default async function TasksTomorrow() {
  const fetchedTasks = await fetchTasksTomorrow();
  const table: Table = {
    id: null,
    title: 'Tasks for tomorrow',
    tasks: fetchedTasks as Task[],
    type: 'task',
  };

  return (
    <div className="scrollbar-track-sky-300 scrollbar-thumb-sky-700">
      <TasksTable
        table={table}
        tasks={fetchedTasks as Task[]}
        showDelete={false}
      />
    </div>
  );
}
