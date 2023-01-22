
//Style-JSX

function Heading(props) {
  const variables = Math.random() > 0.5 ? 'red' : 'green'
  return (
    <div>
      <h1>{props.heading}</h1>
      <style jsx global>
        {
          `h1 {
                        color: ${variables};
                      }`
        }
      </style>
    </div>
  )
}

export default function Home() {
  return <div>
    <Heading heading="heading" />
    <h1>here</h1>

  </div >


}
