import { useState } from 'react';
import { Tabs, Tab } from '../components/Tabs';
import Appointment from './Appointment';
import UserInformation from './UserInformation';
import Confirmation from './Confirmation';

const Home = () => {
  const [activeTab, setActiveTab] = useState('Choose Appointment');

  const handleNavigate = (newActiveTab: string) => () => {
    setActiveTab(newActiveTab);
  };

  return (
    <div>
      <Tabs activeTab={activeTab}>
        <Tab label="Choose Appointment">
          <div className="py-4">
            <Appointment navigate={handleNavigate} />
          </div>
        </Tab>
        <Tab label="Your Info">
          <div className="py-4">
            <UserInformation navigate={handleNavigate} />
          </div>
        </Tab>
        <Tab label="Confirmation">
          <div className="py-4">
            <Confirmation navigate={handleNavigate} />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Home;
