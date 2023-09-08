import { CloseIcon, QRCodeBackground, QRCodeContainer } from './qr-code.styled'
import { FC } from 'react'
import { QrCodeProps } from './qr-code.types'
import QRCode from 'react-qr-code'


const QrCodeShare:FC<QrCodeProps> = ({close,value}) => {
  return (
    <QRCodeBackground>
      <QRCodeContainer>
        <CloseIcon onClick={close}/>
        <QRCode value={value}/>
      </QRCodeContainer>
    </QRCodeBackground>
  )
}

export default QrCodeShare