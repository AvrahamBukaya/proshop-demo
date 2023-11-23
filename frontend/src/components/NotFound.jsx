import React from 'react'
import {Link} from 'react-router-dom'
import Style from '../assets/style/notFound.module.css'

const NotFound = () => {
  return (
    <article className={Style.main}>
        <h3>Page Not Found</h3>
        <p>
            Please navigate to: <Link  to={'/'} >Home Page</Link>
        </p>

    </article>
  )
}

export default NotFound
