import { serverConnectionConfig } from '../common/config'

export function getLocalServerUrl(...args: string[]) {
  const path = args.join('/');
  return `${serverConnectionConfig.accessProtocol}://${serverConnectionConfig.domain}:${serverConnectionConfig.port}/${path}`;
}