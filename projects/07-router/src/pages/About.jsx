import { Link } from "../Link"

console.log('importando about');

export default function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <p>React Router desde 0</p>
      <Link to='/'>Home</Link>
    </>
  )
}