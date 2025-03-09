import {
    Icon2fa,
    IconBellRinging,
    IconDatabaseImport,
    IconFingerprint,
    IconKey,
    IconReceipt2, IconSettings
} from "@tabler/icons-react";

export const NavRoutes = [
    { link: '', label: 'Dashboard', icon: IconBellRinging },
    { link: '', label: 'Attendance', icon: IconReceipt2 },
    { link: '', label: 'Announcements', icon: IconFingerprint },
    { link: '', label: 'SSH Keys', icon: IconKey },
    { link: '', label: 'Databases', icon: IconDatabaseImport },
    { link: '', label: 'Authentication', icon: Icon2fa },
    { link: '', label: 'Other Settings', icon: IconSettings },
];