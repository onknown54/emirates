export type ActivityCardProps = {
  title: string;
  price: number;
  dayTag?: string;
  rating?: number;
  imageUrl: string;
  currency?: string;
  duration?: string;
  included?: string;
  dateTime?: string;
  description?: string;
  reviewsCount?: number;
  onDirections?: () => void;
  onEdit?: () => void;
  onRemove?: () => void;
  currencyDisplay?: "symbol" | "code" | "name";
};

export interface ActivityListingProps {
  href: string;
  title: string;
  className: string;
  children: React.ReactNode;
}
