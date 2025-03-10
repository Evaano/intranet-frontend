import { Box, Flex, Group, Paper, Select, Text, Title } from "@mantine/core";
import { DonutChart } from "@mantine/charts";

export const data = [
  { id: 1, name: "To Attend", value: 75, color: "#5DA7EB" },
  { id: 2, name: "Attended", value: 410, color: "#2CA076" },
  { id: 3, name: "Absent", value: 30, color: "#D11C29" },
  { id: 4, name: "Sick Leave", value: 106, color: "#9880AD" },
  { id: 5, name: "FRL", value: 54, color: "#C48174" },
  { id: 6, name: "Off", value: 56, color: "#FF9663" },
  { id: 7, name: "Other Leave", value: 43, color: "#F4A2BD" },
];

const legendItems = [
  { id: 8, label: "Total", color: "#B6B6B6", value: 774 },
  { id: 9, label: "To Attend", color: "#5DA7EB", value: 75 },
  { id: 10, label: "Attended", color: "#2CA076", value: 410 },
  { id: 11, label: "Absent", color: "#D11C29", value: 30 },
  { id: 12, label: "Sick Leave", color: "#9880AD", value: 106 },
  { id: 13, label: "FRL", color: "#C48174", value: 54 },
  { id: 14, label: "Off", color: "#FF9663", value: 56 },
  { id: 15, label: "Other Leave", color: "#F4A2BD", value: 43 },
];

export function AttendanceStats() {
  return (
    <Box mt="md">
      <Title order={4} c="brunswick-green.9">
        Attendance Statistics
      </Title>
      <Paper shadow="lg" radius="lg" p="xl" mih={300}>
        <Group>
          <Select
            placeholder="Date"
            data={["React", "Angular", "Vue", "Svelte"]}
            radius="md"
            variant="filled"
            size="xs"
          />
          <Select
            placeholder="Department"
            data={["React", "Angular", "Vue", "Svelte"]}
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
