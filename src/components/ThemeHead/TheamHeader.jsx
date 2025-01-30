import React from 'react'
import { ThemeContext } from '../../providers/themes/Index'

export default function TheamHeader() {

    const theme = React.useContext(ThemeContext);

  return (
    <div>
        <h1  style={{ color: theme.foreground}}>TheamHeader</h1></div>
  )
}
