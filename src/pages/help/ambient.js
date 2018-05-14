
import styles from './help.scss'

export default () => {
  return (
    <div className={styles.container}>
      <h1>Ambient Light Help Document</h1>

      <p>采用 dat.GUI 改变环境光，并记录，当切换页面切换回来时恢复之前的环境光。</p>
      <p></p>
    </div>
  )
}
