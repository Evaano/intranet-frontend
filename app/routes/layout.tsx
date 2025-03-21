import { AppShell, Group, Paper } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router";
import { Navbar } from "~/components/navbar/navbar";
import { UserButton } from "~/components/user-button/user-button";
import classes from "~/components/navbar/navbar.module.css";

export default function Layout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      layout="alt"
      header={{ height: 70 }}
      navbar={{
        width: 220,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      {/* Header */}
      <AppShell.Header
        withBorder={false}
        visibleFrom="sm"
        p="md"
        bg="transparent"
      >
        <Group justify="flex-end">
          <UserButton />
        </Group>
      </AppShell.Header>

      {/* Navbar */}
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>

      {/* Main Content (child routes render here) */}
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
