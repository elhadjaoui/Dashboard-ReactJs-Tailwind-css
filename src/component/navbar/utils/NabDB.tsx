import { ChartPieIcon, CogIcon, ArrowLeftOnRectangleIcon, ShoppingCartIcon, HomeIcon, UserIcon } from '@heroicons/react/24/outline';

export const navLinks = [
  {
    id: 0,
    title: "Dashboard",
    icon: <HomeIcon className="nav-icon" />,
  },
  {
    id: 1,
    title: "Market",
    icon: <ShoppingCartIcon className="nav-icon" />,
  },
  {
    id: 2,
    title: "Portfolio",
    icon: <UserIcon className="nav-icon" />,
  },
  {
    id: 3,
    title: "News",
    icon: <ChartPieIcon className="nav-icon" />,
  },
  {
    id: 4,
    title: "Settings",
    icon: <CogIcon className="nav-icon" />,
  },
  {
    id: 5,
    title: "LogOut",
    icon: <ArrowLeftOnRectangleIcon className="nav-icon" />,
  },
];