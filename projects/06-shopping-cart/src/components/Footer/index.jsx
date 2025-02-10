import './Footer.css'

const Footer = ({filters}) => {
  return (
    <footer className='footer'>
      {
        JSON.stringify(filters,null,2)
      }
      {
        /*
        <h4>
        Prueba técnica de React - 
        <span>@empanada</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
        */
      }
    </footer>
  )
}

export default Footer