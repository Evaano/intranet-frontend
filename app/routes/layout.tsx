import {
  AppShell,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router";
import { Navbar } from "~/components/navbar/navbar";
import {UserButton} from "~/components/user-button/user-button";

export default function Layout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{
        width: 220,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      {/* Header */}
      <AppShell.Header withBorder={false} visibleFrom="sm">
        <Group h="100%" justify="flex-end" m="calc(var(--mantine-spacing-md) * 1.5)">
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
