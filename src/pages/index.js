
import styles from './index.scss'

export default () => {
  return (
    <div className={styles.container}>
      <h1>A umi dashboard</h1>
      <h3>代码已开源到 <a href="https://github.com/Spaceman007/three-umi">github</a></h3>
      <hr />
      <br />
      <p>
        这是一个采用 <a href="https://umijs.org/zh-Hans/">umi.js（五米）</a> 构建的 react 应用。
      </p>
      <p>
        umi 内部集成了 <a href="https://ant.design/docs/react/introduce-cn">antd</a>，router，<a href="https://github.com/dvajs/dva">dva</a>，而 dva 又集成了 redux, redux-sagas。
      </p>
      <p>在分离使用 react，react-router，react-redux，redux-sagas 时，对于 react-redux，得分别定义 actions, actionTypes, reducers, 这样对每个模块都得创建好几个文件，在开发时经常需要在不同的文件之间切换，这使得开发体验变得不好。
      </p>
      <p>
        采用 umi 可以显著提升开发体验。因为 umi 基于 pages 文件夹自动生成路由，而 dva 则负责将 redux, redux-sagas 集成到一个文件中，变成 model。
      </p>
      <p>
        用 umi 写 react 应用只需要关注逻辑，而不用再关注 redux，sagas 的细节。
      </p>
      <hr />
      <br />
      <p>
        用 umi 写 react 十分简单，可以参考 <a href="https://umijs.org/zh-Hans/">umi 官方文档</a>，另外我也记录了一份文档 <a href="https://yuque.com/spaceman007/umi/xvyq8e" target="_blank" rel="noopener noreferrer">構建第一個 umi app。</a>
      </p>
    </div>
  )
}
