import Greetings from './Greetings.tsx'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to my work space</h1>
      <Greetings name="Toko" />
      <Greetings name="Universian" />
      <Greetings name="React" />
    </>
  );
}

export default App
