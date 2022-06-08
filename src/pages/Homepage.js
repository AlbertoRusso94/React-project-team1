import { Tab } from '../components/tab/Tab';
import Abbonamenti from '../components/abbonamenti/Abbonamenti';

const Homepage = () => {
  return (
    <div style={{ paddingTop: '800px' }}>
      <Tab></Tab>
      <Abbonamenti />
    </div>
  );
};

export default Homepage;
