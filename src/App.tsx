import './App.css'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

function App() {

  return (
    <main className='main-content'>
      <div className='business-card'>
        < Info/>
        < About/>
        < Interests/>
        < Footer/>
      </div>
    </main>
  )
}

export default App
