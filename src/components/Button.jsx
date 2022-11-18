import '../stylesComponents/Button.css';

const Button = ( { color, newQuote } ) => {
  return (
    <>
      <button 
        className="button"
        onClick={ newQuote }
        style = { { background: color, color:'white'} }
      > <i className='bx bx-chevron-right'></i></button>
    </>
  )
}

export default Button
