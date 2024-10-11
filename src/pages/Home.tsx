import { useState } from 'react';
import { Tabs, Tab } from '../components/Tabs';
import Appointment from './Appointment';
import UserInformation from './UserInformation';

const Home = () => {
  const [activeTab, setActiveTab] = useState('Choose Appointment');
  // const [activeTab, setActiveTab] = useState('Your Info');

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
            <h2 className="mb-2 text-lg font-medium">Confirmation Content</h2>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Home;