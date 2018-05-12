
import React from 'react'
import './Layout.css'
import classNames from 'classnames'

const Header = function (props) {
  const { className, style } = props
  const classes = classNames('layout-header', className)
  return (
    <div className={classes} style={style}>
      {props.children}
    </div>
  )
}

const Sider = function (props) {
  const { className, style } = props
  const classes = classNames('layout-sider', className)
  return (
    <div className={classes} style={style}>
      {props.children}
    </div>
  )
}

const Content = function (props) {
  const { className, style } = props
  const classes = classNames('layout-content', className)
  return (
    <div className={classes} style={style}>
      {props.children}
    </div>
  )
}

const Footer = function (props) {
  const { className, style } = props
  const classes = classNames('layout-footer', className)
  return (
    <div className={classes} style={style}>
      {props.children}
    </div>
  )
}

const Layout = function (props) {
  const { children, className, style } = props
  const styleObj = {
    ...style,
    flexDirection: 'column'
  }

  if (children instanceof Array) {
    for (let child of children) {
      if (child.type === Sider) {
        styleObj.flexDirection = 'row'
        break
      }
    }
  }

  const classes = classNames(className, 'layout')

  return (
    <div className={classes} style={styleObj}>
      {props.children}
    </div>
  )
}

Layout.Header = Header
Layout.Content = Content
Layout.Sider = Sider
Layout.Footer = Footer

export default Layout
