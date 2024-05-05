import { fetchTasksToday } from '@/app/lib/data';
import { Task, Table } from '@/app/lib/definitions';
import TasksTable from '@components/tasks/table';

export default async function TasksToday() {
  const fetchedTasks = await fetchTasksToday();
  const table: Table = {
    id: null,
    title: 'Tasks for today',
    tasks: fetchedTasks as Task[],
    type: 'task',
  };

  return (
    <TasksTable
      table={table}
      tasks={fetchedTasks as Task[]}
      showDelete={false}
      date={'today'}
    />
  );
}
