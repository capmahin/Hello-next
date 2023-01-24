// import styles from './index.module.scss'

// //Style-JSX

// function Heading(props) {

//   return (
//     <div>
//       <h1 className={styles.red}> <span>i am red </span>{props.heading}</h1>

//     </div>
//   )
// }

export default function Home() {
  return <div>
    <form method="POST" action="/api/login">
      <input type="text" name="username" value="admin" />
      <br />
      <input type="password" name="password" value="admin" />
      <br />
      <input type="submit" value="Login" />
    </form>

  </div >


}
