import React,{useState} from 'react'

function Timer() {
 
  const [count,setcount] = useState(0);

  return (
    <div>
      <p>
        {count}
      </p>
      <button onClick={()=>{
        setcount(count+1)
      }}>
        CLick me to add
      </button>

      <button onClick={() => {
        setcount(count-1)
      }}>
        click me to delete
      </button>
    </div>
  )
}

export default Timer;
