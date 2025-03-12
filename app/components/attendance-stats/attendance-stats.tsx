import {
  Box,
  Container,
  Flex,
  Group,
  Paper,
  Select,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { DonutChart } from "@mantine/charts";
import { DatePickerInput } from "@mantine/dates";

export const data = [
  { id: 1, name: "To Attend", value: 75, color: "#5DA7EB" },
  { id: 2, name: "Attended", value: 699, color: "#2CA076" },
  { id: 3, name: "Absent", value: 30, color: "#D11C29" },
  { id: 4, name: "Sick Leave", value: 106, color: "#9880AD" },
  { id: 5, name: "FRL", value: 54, color: "#C48174" },
  { id: 6, name: "Off", value: 56, color: "#FF9663" },
  { id: 7, name: "Other Leave", value: 43, color: "#F4A2BD" },
];

const legendItems = [
  { id: 8, label: "Total", color: "#B6B6B6", value: 1063 },
  { id: 9, label: "To Attend", color: "#5DA7EB", value: 75 },
  { id: 10, label: "Attended", color: "#2CA076", value: 699 },
  { id: 11, label: "Absent", color: "#D11C29", value: 30 },
  { id: 12, label: "Sick Leave", color: "#9880AD", value: 106 },
  { id: 13, label: "FRL", color: "#C48174", value: 54 },
  { id: 14, label: "Off", color: "#FF9663", value: 56 },
  { id: 15, label: "Other Leave", color: "#F4A2BD", value: 43 },
];

const departments: string[] = [
  "Medical Department",
  "ICT Department",
  "Public Relations and Media",
  "Laboratory Medicine",
  "Bureau",
  "Medical Administration",
  "Medical Records",
  "Nursing Department",
  "Estate",
  "Human Resources",
  "Quality Assurance",
  "Finance",
  "Procurement",
];

export function AttendanceStats() {
  return (
    <Container fluid>
      <Title order={4} c="brunswick-green.9">
        Attendance Statistics
      </Title>
      <Paper shadow="lg" radius="lg" p="xl" h="100%">
        <Group mb="xl">
          <DatePickerInput
            variant="filled"
            clearable
            placeholder="Date"
            size="xs"
          />
          <Select
            placeholder="Department"
            data={departments}
            radius="md"
            variant="filled"
            size="xs"
          />
        </Group>

        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <Container fluid>
            <DonutChart
              size={200}
              thickness={50}
              data={data}
              withTooltip={false}
              strokeWidth={0}
            />
          </Container>

          <Container fluid>
            {legendItems.map(({ id, label, color, value }) => (
              <Group key={id} gap="xl" mb={7} justify="space-between" w="100%">
                <Group gap="xs">
                  <Box
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: color,
                    }}
                  />
                  <Text c="brunswick-green.9" size="sm">
                    {label}
                  </Text>
                </Group>
                <Text c="earth-yellow.7" size="sm" fw={700}>
                  {value}
                </Text>
              </Group>
            ))}
          </Container>
        </SimpleGrid>
      </Paper>
    </Container>
  );
}
