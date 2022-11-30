import './App.css'
import Header from './component/header/Header'
import Navbar from './component/navbar/Navbar'

function App() {

  return (
    <div className='App'>
      <Header />
      <div className='w-full min-h-[90vh] grid grid-cols-12'>
        <Navbar />

        <div>
          {/** left part */}
          {/** right part */}
        </div>
      </div>
    </div>
  )
}

export default App
