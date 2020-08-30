import React from 'react';
import { useSelector } from 'react-redux';
import { Column, Task } from './components';

export default function Tasks() {
  const { columns, tasks } = useSelector(state => {
    console.log(state);
    const modifyTasks = state.tasks.reduce((ac, el) => {
      if (!ac[el.column_id]) {
        ac[el.column_id] = [el];

        return ac;
      }
      ac[el.column_id].push(el);

      return ac;
    }, {});

    return {
      ...state,
      tasks: modifyTasks,
    };
  });

  console.log(columns, 'col');
  console.log(tasks, 'task');

  if (columns.length === 0) return <p>У вас пока что нет задач</p>;

  return (
    <div className="project__tasks">
      {columns.map((c, i) => (
        <Column key={i} name={c.name}>
          {tasks[c.id] &&
            tasks[c.id].map((t, j) => <Task key={j} name={t.name} description={t.description} />)}
        </Column>
      ))}
    </div>
  );
}
