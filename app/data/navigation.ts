// data/navigation.ts
import {
  HomeIcon,
  UsersIcon,
  Square3Stack3DIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "PBA", href: "#", icon: UsersIcon, current: false },
  { name: "Career Map", href: "#", icon: Square3Stack3DIcon, current: false },
  { name: "Lessons", href: "#", icon: AcademicCapIcon, current: false },
];
