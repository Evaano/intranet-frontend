import type { Route } from "./+types/home";
import { Container, Flex, Paper, Title } from "@mantine/core";
import { AttendanceStats } from "~/components/attendance-stats/attendance-stats";
import { StaffStats } from "~/components/staff-stats/staff-stats";

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
      <Flex
        justify="space-between"
        wrap={{ base: "wrap", sm: "nowrap" }}
        gap="md"
      >
        <Flex
          justify="space-between"
          gap="xl"
          wrap={{ base: "wrap", sm: "nowrap" }}
          mb={{ base: "md", sm: 0 }}
        >
          <AttendanceStats />
          <StaffStats />
        </Flex>
        <Paper
          mih={800}
          miw={300}
          shadow="lg"
          radius="lg"
          p="xl"
          style={{
            backgroundColor: "rgba(182, 182, 182, 0.1)",
            backdropFilter: "blur(16px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Your content goes here */}
        </Paper>
      </Flex>
    </Container>
  );
}
