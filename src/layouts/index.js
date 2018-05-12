
import Layout from '@/components/layout'
import styles from './index.scss'
import { Icon } from 'antd'
import React from 'react'

const { Header, Sider, Content } = Layout

class View extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
    this.state = {
      fold: false,
      sider: {
        width: 200,
        minWidth: 200,
        maxWidth: 200,
        flex: '0 0 200px'
      }
    }
  }

  toggleSider = () => {
    if (this.state.fold) {
      this.setState({
        sider: {
          width: 200,
          minWidth: 200,
          maxWidth: 200,
          flex: '0 0 200px'
        }
      })
    } else {
      this.setState({
        sider: {
          width: 0,
          minWidth: 0,
          maxWidth: 0,
          flex: '0 0 0'
        }
      })
    }
  }

  fold = () => {
    this.toggleSider()
    this.setState({
      fold: true
    })
  }
  unfold = () => {
    this.toggleSider()
    this.setState({
      fold: false
    })
  }

  render () {
    return (
      <Layout>
        <Sider className={styles.sider} style={{...this.state.sider}}>
          Hodo
        </Sider>
        <Layout>
          <Header className={styles.header}>
            <span className={styles.fold}>
              {
                this.state.fold
                ? <Icon type='menu-unfold' onClick={this.unfold} />
                : <Icon type='menu-fold' onClick={this.fold}/>
              }
            </span>
          </Header>
          <Content className={styles.content}>
            { this.props.children }
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default View
