import Button from './Button'
import '../stylesComponents/Quote.css'


const Quote = ( {quoten, color, newQuote}) => {
  
  const { quote, author } = quoten;
  
  return (

    <article className='Quote' style={ { background: 'white' } }>

      <section className="header__quote">

        <div className="quotationMarks" style={  {color:color} }><i class='bx bxs-quote-left'></i></div>
        <div className="quote" style={  {color:color} }>{ quote }</div>

      </section>

      <section className="author__quote">

        <p style={  {color:color} }>{ author }</p>

      </section>

      <section className="button__quote">
        <Button 
            newQuote ={ newQuote } 
            color = { color }
        />
      </section>

    </article>
  )
}

export default Quote
