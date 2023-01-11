import { Container } from './styles'
import { sidebardata } from '../Sidebardata/sidebardata'

// const Sidebar = ({ active }) => {
function Sidebar2(){
  return (

    <Container>
      <ul style={{height: 'auto', padding: '0', width:'100%'}}>
        {sidebardata.map((val,key)=> {
          return( 
            <li style={{}} key={key} onClick={ () => {window.location.pathname = val.link}}> 
              <div>{val.icon}</div> 
              <div> {val.title} </div>
            </li>
          );
        })}
      </ul>
    </Container>
  )
}

export default Sidebar2