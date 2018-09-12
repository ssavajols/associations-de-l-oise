import React from "react"
import Link from 'gatsby-link'

import { Counter } from '../modules/counter/counter'

export default () => (<div>
  <div>Hello</div>
  <div>world!</div>  
  <Counter />
  <Link to='/page-2'>Go to page 2</Link>
</div>)
