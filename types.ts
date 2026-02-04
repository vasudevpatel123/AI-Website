
export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  detailedContent?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}

export interface NavItem {
  label: string;
  href: string;
}
