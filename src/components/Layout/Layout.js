import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "components/AppBar/AppBar";

function Layout() {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>      
    </div>
  );
}

export default Layout;