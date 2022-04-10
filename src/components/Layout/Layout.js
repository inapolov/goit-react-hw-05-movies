import { Outlet } from "react-router-dom";
import AppBar from "components/AppBar/AppBar";

function Layout() {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
}

export default Layout;