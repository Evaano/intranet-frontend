import {
  IconCalendarCheck,
  IconDatabase,
  IconFileText,
  IconLayoutDashboard,
  IconSettings,
  IconShieldLock,
  IconSpeakerphone,
} from "@tabler/icons-react";

export const NavRoutes = [
  { link: "/home", label: "Dashboard", icon: IconLayoutDashboard },
  { link: "", label: "Attendance", icon: IconCalendarCheck },
  { link: "", label: "Announcements", icon: IconSpeakerphone },
  { link: "", label: "Reports", icon: IconFileText },
  { link: "", label: "Data Import", icon: IconDatabase },
  { link: "", label: "Security", icon: IconShieldLock },
  { link: "", label: "Settings", icon: IconSettings },
];
