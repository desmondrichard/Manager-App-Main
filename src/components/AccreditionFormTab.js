import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './AccreditionFormTab.css';
import AccreadPlayers from './Accreadiation/AccreadPlayers';
import AccreadSupportStaffs from './Accreadiation/AccreadSupportStaffs';
import AccreadOwners from './Accreadiation/AccreadOwners';
import AccreadFranchiseOfficials from './Accreadiation/AccreadFranchiseOfficials';
import AccreadFranchiseSponsors from './Accreadiation/AccreadFranchiseSponsors';

function AccreditionFormTab() {
  // Next btn:
  const [key, setKey] = useState("0")

  function getDataFromChild(k) {
    setKey(k);
  }
  function getPreviousKeyFromChild(k) {
    setKey(k);
  }
  return (
    <div className='my-2'>
      {/* Tabs: start*/}
      <Container fluid >
        <Row style={{ margin: '0px' }}>
          <Tabs justify variant='pills' activeKey={key} className='mb-1 p-0 tab'>
            {/* Tab:1 */}
            <Tab eventKey='0' title='Players'>
              <AccreadPlayers activationKey={key} onChildNextActivationKey={getDataFromChild} />
            </Tab>
            {/* Tab:2 */}
            <Tab eventKey='1' title='Support Staffs'>
              <AccreadSupportStaffs activationKey={key} onChildNextActivationKey={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
            </Tab>
            {/* Tab:3 */}
            <Tab eventKey='2' title='Owners/Management'>
              <AccreadOwners activationKey={key} onChildNextActivationKey={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
            </Tab>
            {/* Tab:4 */}
            <Tab eventKey='3' title='Franchise Officials'>
              <AccreadFranchiseOfficials activationKey={key} onChildNextActivationKey={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
            </Tab>
            {/* Tab:5 */}
            <Tab eventKey='4' title='Franchise Sponsors'>
              <AccreadFranchiseSponsors activationKey={key} onPreviousActivationKey={getPreviousKeyFromChild} />
            </Tab>

          </Tabs>
        </Row>

      </Container>
      {/* Tabs:end */}
    </div>
  )
}

export default AccreditionFormTab