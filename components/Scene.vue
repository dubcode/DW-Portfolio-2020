<template>
  <div id="container" />
</template>
<style>
#container {
  display: block;
  float: left;
  height: 100vh;
  width: 100%;
  filter: hue-rotate(20deg) saturate(200%);
  opacity: 0;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  transition: all 1s;
  overflow: hidden;
}
body.--activated #container {
  opacity: 1;
}
</style>
<script>
import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
export default {
  name: 'ThreeTest',
  data () {
    return {
      camera: null,
      scene: null,
      renderer: null,
      time: 0,
      val: null,
      mesh: null,
      ambientLight: null
    }
  },
  methods: {
    init () {
      /* Container */
      const container = document.getElementById('container')

      /* Scene */
      this.scene = new Three.Scene()

      const loader = new OBJLoader()
      loader.load('u.obj', (object) => {
        this.model = object
        this.model.position.x = -1
        this.model.position.y = -1
        this.model.rotation.x = 45
        this.model.scale.set(10, 10, 10)
        // if you want to add your custom material
        this.model.traverse(function (child) {
          if (child instanceof Three.Mesh) {
            const wireframeGeomtry = new Three.WireframeGeometry(child.geometry)
            const wireframeMaterial = new Three.LineBasicMaterial({ linewidth: 0.1, color: '#2100b0', opacity: 0.5 })
            const wireframe = new Three.LineSegments(wireframeGeomtry, wireframeMaterial)
            child.add(wireframe)
          }
        })
        // then directly add the object
        this.scene.add(object)
      })

      this.ambientLight = new Three.AmbientLight('#000')
      this.scene.add(this.ambientLight)

      /* Camera */
      this.camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 100)
      this.camera.aspect = container.clientWidth / container.clientHeight
      this.camera.updateProjectionMatrix()

      /* Set Renderer */
      this.renderer = new Three.WebGLRenderer({ antialias: true, alpha: true })

      this.composer = new EffectComposer(this.renderer)
      this.composer.setSize(container.clientWidth, container.clientHeight)
      this.composer.addPass(new RenderPass(this.scene, this.camera))

      const bloomPass = new UnrealBloomPass(new Three.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85)
      bloomPass.exposure = 0
      bloomPass.threshold = 0
      bloomPass.strength = 3
      bloomPass.radius = 1
      this.composer.addPass(bloomPass)
      bloomPass.renderToScreen = true

      /* Set Renderer Size */
      this.renderer.setSize(container.clientWidth, container.clientHeight)

      /* Render to DOM #Container */
      container.appendChild(this.renderer.domElement)

      const controls = new OrbitControls(this.camera, this.renderer.domElement)

      /* controls.update() must be called after any manual changes to the camera's transform */
      this.camera.position.set(0, 0, 1)
      controls.update()
    },
    easeOutQuart: t => 1 - (--t) * t * t * t,
    easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeInOutQuint: t => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t,
    /* METHOD - onclick */
    frameAnimate () {
      this.time++
      this.val = this.easeInOutQuad(this.time) / 10000
      console.log(this.val)
      if (this.time < 34) {
        this.scene.rotation.y += this.val
        window.requestAnimationFrame(this.frameAnimate)
      } else if (this.time === 34) {
        window.cancelAnimationFrame(this.frameAnimate)
        this.time = 0
        this.val = 0
      }
    },
    spin () {
      this.frameAnimate()
    },
    animate () {
      requestAnimationFrame(this.animate)
      this.scene.rotation.y += 0.005
      this.composer.render(this.scene, this.camera)
    }
  },
  mounted () {
    this.init()
    this.animate()
  }
}
</script>
