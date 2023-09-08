import React, { FC, useState } from 'react'
import { QRCellProps } from './qr-cell.types'
import { QRCodeIcon, QRCodeIconWrapper } from './qr-cell.styled'
import QrCodeShare from '../../QRCodeShare/qr-code.component'


export const QrCell: FC<QRCellProps> = ({ shortLink }) => {
  const [isQRCodeShown, setIsQRCodeShown] = useState<boolean>(false)
  const handleClick = () => {
    setIsQRCodeShown((prevState) => !prevState)
  }

  return (
    <>
      <QRCodeIconWrapper onClick={handleClick}>
        <QRCodeIcon />
      </QRCodeIconWrapper>
      {isQRCodeShown && <QrCodeShare close={handleClick} value={shortLink} />}
    </>
  )
}

