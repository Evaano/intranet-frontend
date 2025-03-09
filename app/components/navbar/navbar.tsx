import { useState } from "react";
import { Group, Image } from "@mantine/core";
import logo from "~/assets/Primary logo-HMH-bothLANG-b&w-Dark BG.svg";
import classes from "./navbar.module.css";
import { NavRoutes } from "~/data/nav-routes";

export function Navbar() {
  const [active, setActive] = useState("Billing");

  const links = NavRoutes.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="center">
          <Image radius="md" h={70} w="auto" fit="contain" src={logo} />
        </Group>
        {links}
      </div>
    </nav>
  );
}
