import { FC } from 'react'
import { Header } from './common/components/header/header'
import { Banner } from './common/components/banner/banner'

interface AppProps { }

export const App: FC<AppProps> = ({ }) => {
  return <div>
    <Header />
    <Banner />
  </div>
}