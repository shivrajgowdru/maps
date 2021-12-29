import React from "react";
import UpdatedComponent from "./withCounter";

class ClickCounter extends React.Component{
  
    render(){
      const { count , handleCount } = this.props
    return(
      <div>
          <button onClick={handleCount}>clicked {count} times</button>
      </div>
    )
  }
}
export default UpdatedComponent(ClickCounter);