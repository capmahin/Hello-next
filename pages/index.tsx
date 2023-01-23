import './main.module.css'

//Style-JSX

function Heading(props) {

  return (
    <div>
      <h1 className="red">{props.heading}</h1>

    </div>
  )
}

export default function Home() {
  return <div>
    <Heading heading="heading" />
    <h1>here</h1>

  </div >


}
