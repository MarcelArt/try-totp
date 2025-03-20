import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TOTP } from 'totp-generator'

function App() {
  const [, setCount] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1); // Trigger a re-render by updating state
    }, 30000); // 30 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);



  const { otp } = TOTP.generate('BZN5MUZXOV5CDTTYEYQU3FJ5SBZBDLJU');

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{otp}</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
