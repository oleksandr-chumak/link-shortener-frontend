import { axiosInstance } from '../../../services/axios/instances/axios-instance'
import { axiosProtectedInstance } from '../../../services/axios/instances/axios-protected-instance'
import { AxiosInstance } from 'axios'
import { join } from '../../../utils'
import { isURL } from '../utils'
import { Link, TransformedLink } from '../../../store/interfaces/link.types'
import { apiConfig } from '../../../common/config'
import { GetLinksQueryList, GetLinksResponse, GetLinksTransformed } from '../types'

export class LinkService {
  private static protectedHttp: AxiosInstance = axiosProtectedInstance
  private static http: AxiosInstance = axiosInstance

  static async getLinks(query?: GetLinksQueryList): Promise<GetLinksTransformed> {
    const listQuery = this.generateListQuery(query)
    const response = await this.protectedHttp.get<GetLinksResponse>(join('links', listQuery))
    const data = response.data
    return {
      links: this.transformLinks(data.links),
      linksTotalNumber: data.linksCount
    }
  }

  static async shortenLink(link: string): Promise<Link> {
    if (!isURL(link)) {
      throw new Error('Invalid link format')
    }
    const body = {
      link: link,
    }
    try {
      const response = await this.http.post<Link>(join('link', 'shorten'), body)
      return response.data
    } catch (e) {
      throw new Error('Invalid link format')
    }
  }

  static async shortenAuthLink(link: string): Promise<Link> {
    if (!isURL(link)) {
      throw new Error('Invalid link format')
    }
    const body = {
      link: link,
    }
    try {
      const response = await this.protectedHttp.post<Link>(join('link', 'auth', 'shorten'), body)
      return response.data
    } catch (e) {
      throw new Error('Invalid link format')
    }
  }


  private static generateListQuery(query?: GetLinksQueryList) {
    if (!query) {
      return ''
    }
    const queryArray: string[] = []
    for (const queryKey in query) {
      queryArray.push(`${queryKey}=${query[queryKey]}`)
    }
    return queryArray.length !== 0 ? `?${queryArray.join('&')}` : ''
  }

  private static transformLinks(links: Link[]): TransformedLink[] {
    return links.map((link) => {
      const { code, ...linkWithoutCode } = link
      return { shortLink: join(apiConfig.url || '', code), ...linkWithoutCode }
    })
  }
}