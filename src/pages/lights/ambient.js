
import React from 'react'
import THREE from '@/utils/t3'
import Stats from '@/utils/Stats'

function createCamera (c) {
  const camera = new THREE.PerspectiveCamera(45, c.offsetWidth / c.offsetHeight, 0.1, 1000)
  camera.position.set(-25, 30, 25)
  camera.lookAt(new THREE.Vector3(10, 0, 0))
  camera.update = () => {
    camera.aspect = c.offsetWidth / c.offsetHeight
    camera.updateProjectionMatrix()
  }
  return camera
}

function createGround () {
  const geometry = new THREE.PlaneGeometry(60, 20)
  const material = new THREE.MeshLambertMaterial({ color: 0xffffff })
  const mesh = new THREE.Mesh(geometry, material)

  /* rotate and position the plane */
  mesh.rotation.x = -0.5 * Math.PI
  mesh.position.set(15, 0, 0)

  return mesh
}

function createCube () {
  const geo = new THREE.BoxGeometry(4, 4, 4)
  const material = new THREE.MeshLambertMaterial({ color: 0xff0000 })
  const cube = new THREE.Mesh(geo, material)
  cube.position.set(-4, 3, 0)

  return cube
}

function createRenderer (c) {
  let canvas = c.querySelector('canvas')
  if (!canvas) {
    canvas = document.createElement('canvas')
    c.appendChild(canvas)
  }
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true
  })
  renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0))
  const update = () => {
    renderer.setSize(c.offsetWidth, c.offsetHeight)
  }
  update()
  renderer.updateSize = update
  return renderer
}

function createStats () {
  const stats = Stats()
  stats.setMode(0)

  stats.domElement.style.position = 'absolute'
  stats.domElement.style.left = 0
  stats.domElement.style.top = 0

  return stats
}

class View extends React.Component {
  animateRef = null

  handleResize = () => {
    if (this.renderer) { this.renderer.updateSize() }
    if (this.camera) { this.camera.update() }
  }
  init () {
    this.container = this._dom.parentNode
    this.scene = new THREE.Scene()
    this.camera = createCamera(this.container)
    this.renderer = createRenderer(this.container)

    this.ground = createGround()
    this.cube = createCube()
    this.light = new THREE.AmbientLight('#c0c0c0')

    this.scene.add(this.ground)
    this.scene.add(this.cube)
    this.scene.add(this.light)

    this.stats = createStats()
    this.container.appendChild(this.stats.domElement)
  }
  componentDidMount () {
    this.init()
    this.renderScene()
    window.addEventListener('resize', this.handleResize, false)
    setTimeout(() => {
      this.handleResize()
    }, 100)
  }
  componentWillUnmount () {
    cancelAnimationFrame(this.animateRef)
    this.container.removeChild(this.stats.domElement)
    window.removeEventListener('resize', this.handleResize)
  }
  updatePosition () {
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01
    this.cube.rotation.z += 0.01
  }
  renderScene = () => {
    this.stats.update()
    this.renderer.render(this.scene, this.camera)
    this.updatePosition()
    this.animateRef = requestAnimationFrame(this.renderScene)
  }
  render () {
    return <canvas ref={node => this._dom = node }></canvas>
  }
}

export default View
