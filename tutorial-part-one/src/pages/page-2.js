import React from "react"
import Link from 'gatsby-link'

import { Counter } from '../modules/counter/counter'

export default () => (<div>
  <div>Welcome to page 2</div>
  <Counter />
  <Link to='/'>Go to home</Link>
</div>)
