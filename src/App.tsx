import './App.css'
import Header from './component/header/Header'
import Navbar from './component/navbar/Navbar'

function App() {

  return (
    <div className='App'>
      <Header />
      <div className='w-full min-h-[90vh] grid grid-cols-12'>
        <Navbar />
        <div className='grid grid-cols-1 lg:grid-cols-5 w-full col-span-10'>
          {/** left part */}
          {/** right part */}
        </div>
      </div>
    </div>
  )
}

export default App
