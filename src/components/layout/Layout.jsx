import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[1px] bg-gray-800"></div> 
      <MainContent />
    </div>
  );
};

export default Layout;
