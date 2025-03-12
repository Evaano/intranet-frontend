import type { Route } from "./+types/home";
import { Container, Flex, Group, Paper, Title } from "@mantine/core";
import { AttendanceStats } from "~/components/attendance-stats/attendance-stats";
import { StaffStats } from "~/components/staff-stats/staff-stats";
import { Sidebar } from "~/components/sidebar/sidebar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <Container fluid>
      <Title order={1} c="brunswick-green.5">
        Dashboard
      </Title>
      <Flex wrap="wrap" align="flex-start" justify="space-between" gap="md">
        <Group justify="space-between" grow>
          <AttendanceStats />
          <AttendanceStats />
        </Group>
          <Group justify="space-between" grow>
              <Sidebar />
          </Group>
      </Flex>
    </Container>
  );
}
