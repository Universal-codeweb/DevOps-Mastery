import Greetings from './Greetings.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import StudentCard from './StudentCard.tsx'
import Counter from './Counter.tsx'
import ChangeEmoji from './ChangeEmoji.tsx'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to my work space</h1>
      <Greetings name="Toko" />
      <Greetings name="Universian" />
      <Greetings name="React" />
      <Header/>
      <StudentCard 
      name="Yuzhou" 
      age= {18}
      role="astronaut" 
      />
     
      
      <Counter/>
      <hr></hr>
      <ChangeEmoji/>
      <Footer/>


    </>
  );
}

export default App
