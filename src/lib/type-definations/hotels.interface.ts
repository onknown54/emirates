import { Facility } from "./common.interface";

export interface HotelCardProps {
  imageUrl: string;
  name: string;
  address: string;
  roomType?: string;
  rating?: number;
  reviewsCount?: number;
  facilities?: Facility[];

  checkIn?: string;
  checkOut?: string;

  price: number;
  nights?: number;
  currency?: string;
  totalPrice?: number;
  currencyDisplay?: "symbol" | "code" | "name";

  className?: string;
  onShowMap?: () => void;
  onEdit?: () => void;
  onRemove?: () => void;
}
