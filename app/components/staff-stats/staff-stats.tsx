import { Box, Flex, Group, Paper, Select, Text, Title } from "@mantine/core";
import { DonutChart } from "@mantine/charts";

export const data = [
  { id: 1, name: "Male (Local)", value: 75, color: "#7AD1E4" },
  { id: 2, name: "Female (Local)", value: 410, color: "#FFAAD3" },
  { id: 3, name: "Male (Foreign)", value: 30, color: "#4B98DF" },
  { id: 4, name: "Female (Foreign)", value: 106, color: "#FA5CA9" },
];

const legendItems = [
  { id: 1, label: "Total Staff", color: "#B6B6B6", value: 1063 },
  { id: 2, label: "Male (Local)", color: "#7AD1E4", value: 305 },
  {
    id: 3,
    label: "Female (Local)",
    color: "#FFAAD3",
    value: 601,
  },
  { id: 4, label: "Male (Foreign)", color: "#4B98DF", value: 53 },
  {
    id: 5,
    label: "Female (Foreign)",
    color: "#FA5CA9",
    value: 104,
  },
];

const departments: string[] = [
  'Medical Department',
  'ICT Department',
  'Public Relations and Media',
  'Laboratory Medicine',
  'Bureau',
  'Medical Administration',
  'Medical Records',
  'Nursing Department',
  'Estate',
  'Human Resources',
  'Quality Assurance',
  'Finance',
  'Procurement'
];

const sortedDepartments = [...departments].sort((a, b) => a.localeCompare(b));

export function StaffStats() {
  return (
    <Box mt="md">
      <Title order={4} c="brunswick-green.9">
        Staff Statistics
      </Title>
      <Paper shadow="lg" radius="lg" p="xl" mih={375}>
        <Group>
          <Select
            placeholder="Department"
            data={sortedDepartments}
            radius="md"
            variant="filled"
            size="xs"
          />
        </Group>

        {/* Use flex-direction column on small screens */}
        <Flex
          my="xl"
          direction={{ base: "column", sm: "row" }}
          justify={{ base: "center", sm: "space-between" }}
          align={{ base: "center", sm: "flex-start" }}
          gap="lg"
        >
          {/* Center the chart on small screens */}
          <Box style={{ textAlign: "center" }}>
            <DonutChart
              size={200}
              thickness={50}
              data={data}
              withTooltip={false}
              strokeWidth={0}
            />
          </Box>

          {/* Legend section */}
          <Flex
            justify="space-between"
            align={{ base: "center", sm: "flex-start" }}
            direction="column"
            wrap="wrap"
            w={{ base: "100%", sm: "auto" }}
            mt={{ base: "md", sm: 0 }}
          >
            <div style={{ width: "100%" }}>
              {legendItems.map(({ id, label, color, value }) => (
                <Group key={id} gap="xl" mb={7} justify="space-between">
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
            </div>
          </Flex>
        </Flex>
      </Paper>
    </Box>
  );
}
