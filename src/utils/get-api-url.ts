import { apiConfig } from '../common/config'

export function getApiUrl(...args: string[]) {
  const path = args.join('/');
  return `${apiConfig.url}/${path}`;
}