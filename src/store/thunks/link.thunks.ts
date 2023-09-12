import { createAsyncThunk } from '@reduxjs/toolkit'
import { LinkService } from '../../features/main/services/link.service'
import { GetLinksTransformed } from '../../features'
import { LINK_SKIP, LINK_TAKE } from '../../features/main/constants/link.contsants'

const getLinks = createAsyncThunk<GetLinksTransformed, number>(
  'link/getLinks',
  (page) => {
    return LinkService.getLinks({ take: LINK_TAKE, skip: (page - 1) * LINK_SKIP })
  },
)


export const generateLinkThunks = () => {
  return {
    getLinks,
  }
}

