import './App.css'
import Quote from './components/Quote';
import quotes from './db/quotes.json';
import { getRandom } from './helpers/getRand';
import { colors } from './helpers/colors';
import { useState } from 'react';


function App() {
  

  const [quoten, setQuote ] = useState(getRandom(quotes));

  const [color, setColor ]= useState(getRandom(colors));
    

  const newQuote = () =>{
      setQuote( getRandom(quotes));
      setColor( getRandom(colors) );
  }
  
  return (
    <div className="App" style={ {backgroundColor: color} }>
      <Quote 
        quoten = { quoten }
        color = { color }
        newQuote = { newQuote }
          />
    </div>
  )
}

export default App
