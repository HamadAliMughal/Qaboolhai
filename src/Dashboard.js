import React from 'react'
import SideNav from './components/Dashboard/SideNav';
import DashboardPills from './components/Dashboard/DasboardPills';
import DashboardFilters from './components/Dashboard/DashboardFilters';
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';

function Dashboard() {
  return (
    <div style={{ margin:'5px'}}>
        <SideNav/>
        <MDBRow className='gy-3'>
          <MDBCol md='3' sm='12'>
             <DashboardFilters/>
          </MDBCol>
          <MDBCol md='9' sm='12'>
            <DashboardPills/>
          </MDBCol>
        </MDBRow>
        
    </div>
  )
}

export default Dashboard