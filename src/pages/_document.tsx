import { Html, Head, Main, NextScript } from 'next/document'
import { OVERLAY_ROOT_ID } from '../common/lib/data/constans'


export default function Document() {
  return (
    <Html data-theme="cupcake">
      <Head />
      <div id={OVERLAY_ROOT_ID} className="z-50"></div>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}