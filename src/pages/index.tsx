import {Task, Task2 } from 'src/interfaces/Tasks'
import { Tableteste } from "src/components/Tableteste/Tableteste"

interface Props {
  tasks: Task[]
  tasks2: Task2[]
}


export default function index({tasks, tasks2}: Props) {
  return( 
  <>
    {tasks.length === 0 ? <h1> no tasks </h1> : <Tableteste tasks={tasks}/>} 
    {tasks2.length === 0 ? <h1> no tasks </h1> : <Tableteste tasks={tasks2}/>} 
    {<Tableteste tasks={null}/>}
  </>
  )
}

export const getServerSideProps = async () => {

  const res = await fetch('http://localhost:3000/api/tasks');
  const tasks = await res.json()


  const res2 = await fetch('http://localhost:3000/api/tasks2');
  const tasks2 = await res2.json()

  return{
    props: {
      tasks: tasks,
      tasks2: tasks2
    }
  }
}