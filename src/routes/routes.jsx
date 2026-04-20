import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Dashboard from '../dashboard/Dashboard';
import DashboardHome from '../dashboard/DashboardHome';
import PrivateRouting from '../privaterouting/PrivateRouting';
import About from '../pages/About';
import Roadmap from '../pages/Roadmap';
import Contact from '../pages/Contact';
import { dashboardConfig } from '../config/dashboardConfig';

// Derive dashboard child routes from the single source-of-truth config.
const dashboardChildren = [
  { index: true, element: <DashboardHome /> },
  ...dashboardConfig.flatMap((group) =>
    group.links.map((link) => ({
      path: link.routePath,
      element: link.element,
    }))
  ),
];

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      {
        path: '/roadmap',
        element: (
          <PrivateRouting>
            <Roadmap />
          </PrivateRouting>
        ),
      },
      { path: '/contact', element: <Contact /> },
      {
        path: '/dashboard',
        element: (
          <PrivateRouting>
            <Dashboard />
          </PrivateRouting>
        ),
        children: dashboardChildren,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Registration /> },
]);

export default routes;