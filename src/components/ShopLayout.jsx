import { Outlet } from 'react-router-dom';

const ShopLayout = () => {
  return (
    <div className="pt-28 min-h-screen">
      <Outlet />
    </div>
  );
};

export default ShopLayout;
