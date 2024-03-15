import { atom } from "jotai";

export const activeNavItem = atom<string>("/");

export const navItems: NavItems[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About us",
    url: "/about-us",
  },
  {
    title: "Courses",
    url: "/courses",
  },
  {
    title: "Resources",
    url: "/resources",
  },
  {
    title: "Support Center",
    url: "/support",
  },
];
