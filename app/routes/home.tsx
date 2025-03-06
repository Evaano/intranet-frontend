import type { Route } from "./+types/home";
import { Container } from "@mantine/core";
import { Welcome } from "~/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <Container fluid>
      <Welcome />
    </Container>
  );
}
