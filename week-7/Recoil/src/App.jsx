import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { networkAtom, jobAtom, notificationAtom, messagingAtom, total } from './atom'

function App() {
  return (<RecoilRoot>
    <MainApp></MainApp>
  </RecoilRoot>)
}

function MainApp(){
  const networkCount = useRecoilValue(networkAtom)
  const jobCount = useRecoilValue(jobAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const messageingCount = useRecoilValue(messagingAtom);
  const totalCount = useRecoilValue(total)
  
  return (
    <>

            <button>Home</button>
            <button>My Network ({networkCount >= 100 ? "99+" : networkCount})</button>
            <button>Jobs ({jobCount >= 100 ? "99+" : jobCount})</button>
            <button>Notification ({notificationCount >= 100 ? "99+" : notificationCount})</button>
            <button>Me ({totalCount})</button>
    </>
  )
}

export default App
