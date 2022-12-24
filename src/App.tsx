import './App.css'
import Header from './component/header/Header'
import Leftpart from './component/leftPart/Leftpart'
import Navbar from './component/navbar/Navbar'
import Rightpart from './component/rightpart/Rightpart'

function App() {

  return (
    <div >
      <Header />
      <div className='w-full min-h-[90vh] grid grid-cols-12'>
        <Navbar />
        <div className='grid grid-cols-1 xl:grid-cols-5 w-full col-span-10'>
          {/** left part */}
          <Leftpart/>
          {/** right part */}
          <Rightpart/>
        </div> 
      </div>
    </div>
  )
}

export default App
