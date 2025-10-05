import { Outlet} from "react-router-dom";

function RootLayout() {
  return (
    <div className="container">
      <Outlet />   
    </div>
  );
}
export default RootLayout;