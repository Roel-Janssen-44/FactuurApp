import { fetchGoalTables, fetchGoals } from '@/app/lib/data';
import { Table, Goal } from '@/app/lib/definitions';
import GoalTable from './table';
import CreateTable from '@components/createTable';

export default async function GoalTables() {
  const fetchedTables = await fetchGoalTables();
  const fetchedGoals = await fetchGoals();

  let tables: Table[] = fetchedTables.map((table) => {
    return {
      id: table.id,
      title: table.title,
      goals: [],
      type: 'goal',
    };
  });

  fetchedGoals.forEach((goal: Goal) => {
    if (!goal.table_id) return;

    const table = tables.find((table) => table.id === goal.table_id);
    if (table) {
      table.goals.push(goal);
    }
  });

  return (
    <div>
      {tables?.map((table: Table) => (
        <GoalTable key={table.id} table={table} goals={table.goals} />
      ))}
      <CreateTable type="goal" />
    </div>
  );
}
