import {
  BoltIcon,
  ComputerDesktopIcon,
  MusicalNoteIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";
import { Facility, FlightCardProps } from "../type-definations";

export const defaultFacilities: Facility[] = [
  { label: "USB Port", icon: WifiIcon },
  { label: "Baggage: 20kg", icon: BoltIcon },
  { label: "In flight meal", icon: MusicalNoteIcon },
  { label: "In flight entertainment", icon: ComputerDesktopIcon },
];

export const FlightItems: FlightCardProps[] = [
  {
    price: 123450.0,
    duration: "1h 45m",
    cabinTag: "Premium",
    flightNumber: "AA-492",
    airline: "American Airlines",
    depart: { time: "08:35", date: "Sun, 7th Aug", code: "LOS" },
    arrive: { time: "09:55", date: "Sun, 7th Aug", code: "SIN" },
  },
  {
    price: 123450.0,
    duration: "1h 45m",
    cabinTag: "Premium",
    flightNumber: "AA-492",
    airline: "American Airlines",
    depart: { time: "08:35", date: "Sun, 7th Aug", code: "LOS" },
    arrive: { time: "09:55", date: "Sun, 7th Aug", code: "SIN" },
  },
  {
    price: 123450.0,
    duration: "1h 45m",
    cabinTag: "Premium",
    flightNumber: "AA-492",
    airline: "American Airlines",
    depart: { time: "08:35", date: "Sun, 7th Aug", code: "LOS" },
    arrive: { time: "09:55", date: "Sun, 7th Aug", code: "SIN" },
  },
  {
    price: 123450.0,
    duration: "1h 45m",
    cabinTag: "Premium",
    flightNumber: "AA-492",
    airline: "American Airlines",
    depart: { time: "08:35", date: "Sun, 7th Aug", code: "LOS" },
    arrive: { time: "09:55", date: "Sun, 7th Aug", code: "SIN" },
  },
];
