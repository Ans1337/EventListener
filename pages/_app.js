import '../styles/globals.css'
import '../styles/style1.css'
import '../styles/style2.css'

import 'bootstrap/dist/css/bootstrap.css'
import { NotificationProvider } from 'web3uikit';
import { MoralisProvider } from 'react-moralis';

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
        <Component {...pageProps} />
      </NotificationProvider>
    </MoralisProvider>
  )
}

export default MyApp
