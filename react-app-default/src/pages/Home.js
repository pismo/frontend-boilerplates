import React from 'react'
// import AWS from './../clients/AWS'
import { connect } from 'react-redux'

class Home extends React.Component {
  render() {
    return(
      <p>Home</p>
    )
  }
}

const mapStateToProps = ({user}, props) => ({
  user,
  ...props,
})

export default connect(mapStateToProps)(Home)

