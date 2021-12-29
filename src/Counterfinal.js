import React from 'react'
import UpdatedComponent from './withCounter'

class CounterFinal extends React.Component{

  render(){
    const {count,handleCount} = this.props
    return(
      <div>
        <h1 onMouseOut={handleCount}>this is the {count} final counter  </h1>
      </div>
    )
  }
} export default UpdatedComponent(CounterFinal)