import { v4 as uuid } from "uuid";
import { Compass, Home, Library, Logout, Settings, Trends } from "./icons";

export interface IMenuItem {
  id: string;
  label: string;
  route: string;

  icon?: () => React.ReactNode;
  onClick?: () => void;
}

export const menuItems: IMenuItem[] = [
  {
    id: uuid(),
    label: "Home",
    route: "/dashboard/home",
    icon: () => <Home className="w-4 h-4 text-red-500" />,
  },
  {
    id: uuid(),
    label: "Trends",
    route: "/dashboard/trending",
    icon: () => <Trends className="w-4 h-4 fill-ss-primary" />,
  },
  {
    id: uuid(),
    label: "Library",
    route: "/dashboard/library",
    icon: () => <Library className="w-4 h-4 fill-ss-primary" />,
  },
  {
    id: uuid(),
    label: "Discover",
    route: "/dashboard/discover",
    icon: () => <Compass className="w-4 h-4 fill-ss-primary" />,
  },
];

export const extraMenuItems: IMenuItem[] = [
  {
    id: uuid(),
    label: "Settings",
    route: "/dashboard/settings",
    icon: () => <Settings className="w-4 h-4 fill-ss-primary" />,
  },
  {
    id: uuid(),
    label: "Logout",
    route: "/auth/signin",
    icon: () => <Logout className="w-4 h-4 fill-ss-primary" />,
  },
];
