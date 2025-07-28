import { Facility } from "./common.interface";

export interface AirportPoint {
  code: string;
  time: string;
  date: string;
}

export interface DurationBadgeProps {
  duration: string;
  isDirect: boolean;
}

export interface FlightCardProps {
  airline: string;
  flightNumber: string;
  cabinTag?: string;
  depart: AirportPoint;
  arrive: AirportPoint;
  duration: string;
  isDirect?: boolean;
  price: number;
  currency?: string;
  currencyDisplay?: "symbol" | "code" | "name";
  facilities?: Facility[];
  onRemove?: () => void;
  onEdit?: () => void;
}

export type TimeBlockProps = AirportPoint & { align?: "start" | "end" };
