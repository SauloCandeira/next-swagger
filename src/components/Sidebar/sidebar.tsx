import React, { useState } from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../Sidebaritem/sidebaritem'

// const Sidebar = ({ active }) => {
const Sidebar = () => {

  // const closeSidebar = () => {
  //   active(false)
  // }

  // const [sidebar, setSidebar] = useState(true)

  return (
    // <Container sidebar={setSidebar}>
    <Container>
      {/* <FaTimes onClick={closeSidebar} />   */}
      <Content>
        <SidebarItem key='1' Icon={FaHome} Text="Dashboard" />
        <SidebarItem key='2' Icon={FaChartBar} Text="Equipe externa" />
        <SidebarItem key='3' Icon={FaUserAlt} Text="Clientes" />
        <SidebarItem key='4' Icon={FaEnvelope} Text="Relatório" />
        <SidebarItem key='5' Icon={FaRegCalendarAlt} Text="Sair" />
        {/* <SidebarItem Icon={FaIdCardAlt} Text="Employees" />
        <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
        <SidebarItem Icon={FaRegSun} Text="Settings" /> */}
      </Content>
    </Container>
  )
}

export default Sidebar