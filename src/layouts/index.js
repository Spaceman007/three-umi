
import Layout from '@/components/layout'
import styles from './index.scss'
import { Icon, Menu } from 'antd'
import React from 'react'
import Link from 'umi/link'
import { connect } from 'dva'

const { Header, Sider, Content } = Layout
const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu

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
    let { url } = this.props.match
    return (
      <Layout>
        <Sider className={styles.sider} style={{...this.state.sider}}>
          <Menu mode='inline' theme='dark' style={{height:'100vh'}}>
            <MenuItem key='title'><Link to={`${url}`}>THREE DEMOS</Link></MenuItem>
            <SubMenu title='Lights' key='fhei'>
              <MenuItem key='ambient-light'><Link to={`${url}lights/ambient`}>Ambient Light</Link></MenuItem>
              <MenuItem key='point-light'><Link to={`${url}lights/point`}>Point Light</Link></MenuItem>
              <MenuItem key='spot-light'><Link to={`${url}lights/spot`}>Spot Light</Link></MenuItem>
            </SubMenu>
            <SubMenu title='Cameras' key='cameras'>
              <MenuItem key='orthographic'>OrthoGraphic Camera</MenuItem>
              <MenuItem key='perspective'>Perspective Camera</MenuItem>
            </SubMenu>
            <MenuItem key='materials'>Materials</MenuItem>
            <MenuItem key='geometries'>Geometries</MenuItem>
            <MenuItem key='textures'>Textures</MenuItem>
          </Menu>
        </Sider>
        <Layout style={{zIndex:100}}>
          <Header className={styles.header}>
            <span className={styles.fold}>
              {
                this.state.fold
                ? <Icon type='menu-unfold' onClick={this.unfold} />
                : <Icon type='menu-fold' onClick={this.fold}/>
              }
            </span>
            <span className={styles.title}>{this.props.title}</span>
          </Header>
          <Content className={styles.content}>
            { this.props.children }
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default connect(
  (state) => {
    return {
      title: state.global.title
    }
  }
)(View)
