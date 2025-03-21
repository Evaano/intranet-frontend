// stats-card.tsx
import {
  Box,
  Container,
  Flex,
  Group,
  Paper,
  Select,
  Text,
  Title,
  Stack,
} from "@mantine/core";
import { DonutChart } from "@mantine/charts";
import { DatePickerInput } from "@mantine/dates";

interface StatsCardProps {
  title: string;
  chartData: { id: number; name: string; value: number; color: string }[];
  legendItems: { id: number; label: string; color: string; value: number }[];
  departments: string[];
}

export function StatsCard({
  title,
  chartData,
  legendItems,
  departments,
}: StatsCardProps) {
  return (
    <Box style={{ width: "100%", height: "100%" }}>
      <Title order={4} c="brunswick-green.9" my="md">
        {title}
      </Title>

      <Paper
        shadow="lg"
        radius="lg"
        p="xl"
        mih={{ base: 600, md: 400 }}
        style={{
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Container fluid p={0}>
          <Group mb="xl" grow style={{ maxWidth: "100%" }}>
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

          <Flex
            gap={{ base: 20, md: 60 }}
            justify="center"
            align="center"
            direction={{ base: "column", md: "row" }}
            style={{ height: "100%" }}
          >
            <Box style={{ flexShrink: 0 }}>
              <DonutChart
                size={180}
                thickness={50}
                data={chartData}
                withTooltip={false}
                strokeWidth={0}
              />
            </Box>

            <Stack gap="xs" style={{ maxWidth: 200, width: "100%" }}>
              {legendItems.map(({ id, label, color, value }) => (
                <Group key={id} justify="space-between" wrap="nowrap">
                  <Group gap="xs" wrap="nowrap">
                    <Box
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        backgroundColor: color,
                      }}
                    />
                    <Text size="sm" c="brunswick-green.9" >
                      {label}
                    </Text>
                  </Group>
                  <Text size="sm" c="earth-yellow.7" fw={700}>
                    {value}
                  </Text>
                </Group>
              ))}
            </Stack>
          </Flex>
        </Container>
      </Paper>
    </Box>
  );
}
