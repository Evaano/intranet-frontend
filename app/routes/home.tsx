import type { Route } from "./+types/home";
import { Container, Grid, Title, Box } from "@mantine/core";
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
      <Title order={1} c="brunswick-green.5" mb="md">
        Dashboard
      </Title>

      <Grid gutter="md">
        <Grid.Col
          span={{ xs: 12, md: 6, xl: 4.5 }}
          style={{
            display: "flex",
            minWidth: 0,
            flex: "1 1 auto",
          }}
        >
          <Box style={{ flex: 1, width: "100%" }}>
            <AttendanceStats />
          </Box>
        </Grid.Col>

        <Grid.Col
          span={{ xs: 12, md: 6, xl: 4.5 }}
          style={{
            display: "flex",
            minWidth: 0,
            flex: "1 1 auto",
          }}
        >
          <Box style={{ flex: 1, width: "100%" }}>
            <StaffStats />
          </Box>
        </Grid.Col>

        {/* Sidebar */}
        <Grid.Col
          span={{ xs: 12, md: 12, xl: 3 }}
          order={{ xs: 3, md: 3, xl: 3 }}
          style={{ display: "flex" }}
        >
          <Box style={{ width: "100%" }}>
            <Sidebar />
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
