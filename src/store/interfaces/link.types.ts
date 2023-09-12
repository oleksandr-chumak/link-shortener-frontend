export type LinkStatus = 'active' | 'inactive'



export interface Link {
  id: string;
  code: string;
  originalLink: string;
  clicks: number;
  status: LinkStatus
  createdAt: Date;
  updatedAt: Date;
}

export interface TransformedLink extends Omit<Link, 'code'>{
  shortLink: string
}
export interface LinkInitialState {
  links: TransformedLink[]
  currentPage: number;
  linksTotalNumber: number;
  loading: boolean;
  error: unknown;
}