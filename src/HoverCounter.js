import React from 'react'
import UpdatedComponent from './withCounter';

class HoverCounter extends React.Component {
  render() {
  const {count,handleCount} = this.props
    return (
      <div>
        <h2 onMouseOver={handleCount}>hovered {count} times</h2>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter);
