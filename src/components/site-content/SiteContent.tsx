import MainSection from '../main-section/MainSection';
import { Sidebar } from '../sidebar/Sidebar';

const SiteContent = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <MainSection />
    </div>
  );
};

export default SiteContent;
