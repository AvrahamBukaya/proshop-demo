import { Container } from 'react-bootstrap'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HomeScreen from './screens/HomeScreen.jsx'

function App() {

  return (
    <>
    <Header/>
    

    <main className='py-3'>
      <Container>
      <h2>Welcome to ProShop</h2>
      <HomeScreen/>
      </Container>
    </main>
    <Footer className="footer"/>

    </>
      

  )
}

export default App
