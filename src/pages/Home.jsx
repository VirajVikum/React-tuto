import React from 'react'
import { Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Home</h1>

<h5>Link to <Link to={"/Profile"}>profile</Link></h5>
<h5>Link to <Link to={"/about"}>About</Link></h5>
<h5>Link to <Link to={"/cal"}>Use State Hook</Link></h5>
<h5>Link to <Link to={"/bootstrp"}>React Bootstrap</Link></h5>
<h5>Link to <Link to={"/evnt"}>Events handling</Link></h5>
<h5>Link to <Link to={"/effct"}>Use Effect Hook</Link></h5>
<h5>Link to <Link to={"/cond"}>Conditional Rendering</Link></h5>
<h5>Link to <Link to={"/contxt"}>useContext Hook</Link></h5>
<h5>Link to <Link to={"/reducr"}>useReducer Hook</Link></h5>

    </div>
  )
}
