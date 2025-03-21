import { StatsCard } from "~/components/stats-card/stats-card";

export const chartData = [
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

export function StaffStats() {
  return (
    <StatsCard
      title="Staff Statistics"
      chartData={chartData}
      legendItems={legendItems}
      departments={departments}
    />
  );
}
