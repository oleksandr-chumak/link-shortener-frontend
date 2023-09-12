import React from 'react'
import { TableHeader, TableHeaderCell, TableHeaderRow } from '../../UI'

export const DesktopTableHeader = () => {
  return (
    <TableHeader>
      <TableHeaderRow>
        <TableHeaderCell>Short Link</TableHeaderCell>
        <TableHeaderCell>Original Link</TableHeaderCell>
        <TableHeaderCell>QR Code</TableHeaderCell>
        <TableHeaderCell>Clicks</TableHeaderCell>
        <TableHeaderCell>Status</TableHeaderCell>
        <TableHeaderCell>Date</TableHeaderCell>
      </TableHeaderRow>
    </TableHeader>
  )
}

