import { Outlet } from 'react-router-dom';

const ServicesLayout = () => {
  return (
    <div className="pt-28 min-h-screen">
      <Outlet />
    </div>
  );
};

export default ServicesLayout;
