import { Container, Content } from './styles'
import { FaHome, FaUsers, FaUserTie, FaChartBar,FaSignInAlt } from 'react-icons/fa'

export const sidebardata = [
  {
    title: "Home",
    icon: <FaHome />,
    link: "/home"
  },
  {
    title: "Equipe externa",
    icon: <FaUsers/>,
    link: "/equipe"
  },
  {
    title: "Clientes",
    icon: <FaUserTie />,
    link: "/clientes"
  },
  {
    title: "Relatório",
    icon: <FaChartBar />,
    link: "/relatório"
  },
  {
    title: "Sair",
    icon: <FaSignInAlt />,
    link: "/sair"
  },
]



// https://www.youtube.com/watch?v=5R9jFHlG6ik