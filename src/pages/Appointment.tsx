import { Tabs, Tab } from '../components/Tabs';

const Appointment = () => {
  return (
    <div>
      <Tabs>
        <Tab label="Choose Appointment">
          <div className="py-4">
            <h2 className="mb-2 text-lg font-medium">Choose Appointment Content</h2>
          </div>
        </Tab>
        <Tab label="Your Info">
          <div className="py-4">
            <h2 className="mb-2 text-lg font-medium">Your Info Content</h2>
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

export default Appointment;