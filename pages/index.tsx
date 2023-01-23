import styles from './index.module.scss'

//Style-JSX

function Heading(props) {

  return (
    <div>
      <h1 className={styles.red}> <span>i am red </span>{props.heading}</h1>

    </div>
  )
}

export default function Home() {
  return <div>
    <Heading heading="heading" />
    <h1>here</h1>

  </div >


}
