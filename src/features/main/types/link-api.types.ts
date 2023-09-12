import { Link, TransformedLink } from '../../../store/interfaces/link.types'

export interface GetLinksResponse {
  links: Link[],
  linksCount: number
}

export interface GetLinksTransformed{
  links: TransformedLink[],
  linksTotalNumber: number
}

export interface GetLinksQueryList {
  take?: number;
  skip?: number;

  [key: string]: number | undefined;

}

