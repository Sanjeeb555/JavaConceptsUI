import React, { useState, useEffect, useCallback, memo } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Code } from "lucide-react";
import { dashboardConfig } from "../config/dashboardConfig";

// Derive sidebar data from the single source-of-truth config.
// Each link gets a full absolute path by prepending /dashboard/.
const sidebarData = dashboardConfig.map(({ title, icon, links }) => ({
  title,
  icon,
  links: links.map(({ label, routePath }) => ({
    label,
    path: `/dashboard/${routePath}`,
  })),
}));

const SidebarItem = memo(({ title, links, icon: Icon, isOpen, onClick }) => {
  return (
    <div className="group ">
      <div
        onClick={onClick}
        className="flex items-center justify-between px-4 py-3 font-medium cursor-pointer text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg border border-white/10 backdrop-blur-sm "
      >
        <div className="flex items-center space-x-3">
          {Icon && (
            <Icon
              size={18}
              className="text-white/90 group-hover:text-yellow-300 transition-transform duration-300 group-hover:scale-125"
            />
          )}
          <span className="text-sm font-semibold">{title}</span>
        </div>
        {links.length > 0 &&
          (isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
      </div>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
          isOpen ? "max-h-[800px] opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg border border-white/10 p-2 space-y-1">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-2 text-xs rounded-lg transition-all duration-200 transform hover:scale-[1.02] ${
                  isActive
                    ? "bg-white text-indigo-700 font-semibold shadow-md border border-indigo-200"
                    : "text-white/90 hover:bg-white/10 hover:text-white font-medium"
                }`
              }
            >
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-current rounded-full opacity-60"></div>
                <span>{link.label}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
});

const Dashboard = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation();

  const handleToggle = useCallback((index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  useEffect(() => {
    const foundIndex = sidebarData.findIndex((item) =>
      item.links.some((link) => location.pathname.includes(link.path))
    );
    if (foundIndex !== -1) setOpenIndex(foundIndex);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen overflow-hidden bg-gray-50">
      
      <aside className="w-80 h-screen overflow-y-auto bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 p-4 space-y-3 shadow-2xl relative no-scrollbar">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/5 to-transparent"></div>

        <div className="relative z-10 text-center mb-8">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div className="p-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg shadow-lg">
                <Code size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Java Buddy</h1>
            </div>
          </div>
        </div>

        <div className="relative z-10 space-y-2">
          {sidebarData.map((item, index) => (
            <SidebarItem
              key={item.title}
              title={item.title}
              links={item.links}
              icon={item.icon}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

        <div className="relative z-10 mt-8 pt-4 border-t border-white/10 text-center">
          <p className="text-white/50 text-xs">Learn • Practice • Master</p>
        </div>
      </aside>

      <main id="scroll-container" className="flex-1 h-screen overflow-y-auto  no-scrollbar bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;