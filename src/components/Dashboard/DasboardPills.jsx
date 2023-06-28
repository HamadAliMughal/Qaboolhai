import React, { useState, useEffect } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import DashboardCards from './DashboardCards';

export default function DashboardPills() {
  const [fillActive, setFillActive] = useState('tab1');

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };

  return (
    <>
      <MDBTabs pills fill className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
            Favorites
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
            Viewed Me
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
            Request
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab4')} active={fillActive === 'tab4'}>
            Verify Identity
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={fillActive === 'tab1'}><DashboardCards/></MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab2'}>Tab 2 content</MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab3'}>Tab 3 content</MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab4'}>Tab 4 content</MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}