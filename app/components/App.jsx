import React, { PropTypes } from 'react'
import { Grid } from 'react-bootstrap'

import Navbar from './utilities/Navbar'

//returns our main application page, whose children will render based on state
//     {this.props.children} // whichever component is currently active
const App = (props) => (
  <Grid fluid={true}>
    <Navbar campuses={props.campuses}/>
    {props.children}
  </Grid>
)

App.propTypes = {
  campuses: PropTypes.object.isRequired,
  children: PropTypes.node
}

export default App