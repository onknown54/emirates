export interface StatusCardProps {
  type: StatusCardType;
}

export enum StatusCardType {
  ACTIVITIES = "activities",
  HOTELS = "hotels",
  FLIGHTS = "flights",
}
