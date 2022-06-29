import Hero from '../components/hero/Hero';
import { Tab } from '../components/Tab/Tab.js';
import Abbonamenti from '../components/abbonamenti/Abbonamenti.js';

const Homepage = () => {
  return (
    <>
      <Hero />
      <Tab></Tab>
      <Abbonamenti />
    </>
  );
};

export default Homepage;
