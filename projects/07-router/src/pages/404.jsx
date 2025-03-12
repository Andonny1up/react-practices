import React from 'react'
import { Link } from '../Link'

const Page404 = () => {
  return (
    <>
    <div>
        <h1>This is NOT fine</h1>
        <img src="https://midu.dev/images/this-is-fine-404.gif" alt="Gif del perro" />
    </div>
        <Link to='/'>volver a la Home</Link>
    </>
  )
}

export default Page404