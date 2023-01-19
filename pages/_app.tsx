import '@/styles/globals.css'
import {AppProps} from 'next/app'
import { Amplify } from 'aws-amplify'
import config from '../src/aws-exports'
import {AmplifyProvider} from '@aws-amplify/ui-react'
import{ studioTheme } from '../src/ui-components'
import '@aws-amplify/ui-react/styles.css'

interface CustomPageProps{}

Amplify.configure(config)

function MyApp({ Component,pageProps}:AppProps<CustomPageProps>){
  return(
  <AmplifyProvider theme ={studioTheme}>
    <Component {...pageProps}/>
  </AmplifyProvider>
  )
}

export default MyApp 
