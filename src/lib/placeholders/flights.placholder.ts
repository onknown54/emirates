import {
  BoltIcon,
  ComputerDesktopIcon,
  MusicalNoteIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";
import { Facility } from "../type-definations";

export const defaultFacilities: Facility[] = [
  { label: "Baggage: 20kg", icon: BoltIcon },
  { label: "Cabin Baggage: 8kg", icon: BoltIcon },
  { label: "In flight entertainment", icon: ComputerDesktopIcon },
  { label: "In flight meal", icon: MusicalNoteIcon },
  { label: "USB Port", icon: WifiIcon },
];
