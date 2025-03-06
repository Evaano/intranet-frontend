// components/AltLayout.tsx
import { AppShell, Burger, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router";

export default function Layout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      {/* Header */}
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          Logo
        </Group>
      </AppShell.Header>

      {/* Navbar */}
      <AppShell.Navbar p="md">
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text>Navigation</Text>
        </Group>
        {/* Add your navigation links here */}
      </AppShell.Navbar>

      {/* Main Content (child routes render here) */}
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>

      {/* Footer */}
      <AppShell.Footer p="md">
        <Text>Footer</Text>
      </AppShell.Footer>
    </AppShell>
  );
}
