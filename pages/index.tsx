import { useEffect } from "react"

export default function Home(props) {
  useEffect(()=>{
    alert('Hello!')
  },[])
  return (
    <div>
      <h1>I am index page !!!!</h1>
      </div>
  )
    
    
}
