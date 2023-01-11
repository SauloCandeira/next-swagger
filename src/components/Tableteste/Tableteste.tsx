import { Task } from "src/interfaces/Tasks"

interface Props {
  tasks: Task[];
}

export function Tableteste({tasks} : Props) { 
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
                <th> ID </th>
                <th> TITULO </th>
                <th> DESCRIÇÃO </th>
                <th> DATA </th>
            </tr>
          </thead>
          <tbody>  

            {tasks &&
              tasks.map((task, index) => (
                <tr key={index}>
                    <td> {task.id} </td>
                    <td> {task.title} </td>
                    <td> {task.description} </td>
                    <td> {task.created_on} </td>
                </tr>
            ))}

          </tbody>
        </table>
        {tasks ? null : <h2 style={{ textAlign: 'center' }}>Nenhuma OS</h2>}
      </div>
    </>
  );
};

export default Tableteste;