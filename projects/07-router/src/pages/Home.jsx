import { Link } from "../Link"

export default function HomePage () {
    return (
      <>
        <h1>Home</h1>
        <p>React Router desde 0</p>
        <Link to='/about'>Sobre Nosotros</Link>
      </>
    )
  }