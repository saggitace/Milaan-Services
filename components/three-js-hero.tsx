"use client"

import { useEffect, useRef } from "react"

export default function ThreeJSHero() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    let scene: any, camera: any, renderer: any, particles: any
    const meshes: any[] = []

    const init = async () => {
      const {
        Scene,
        PerspectiveCamera,
        WebGLRenderer,
        BufferGeometry,
        BufferAttribute,
        PointsMaterial,
        Points,
        BoxGeometry,
        SphereGeometry,
        ConeGeometry,
        MeshBasicMaterial,
        Mesh
      } = await import("three")

      // Scene setup
      scene = new Scene()
      camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      renderer = new WebGLRenderer({ alpha: true, antialias: true })

      if (mountRef.current) {
        const rect = mountRef.current.getBoundingClientRect()
        renderer.setSize(rect.width, rect.height)
        renderer.setClearColor(0x000000, 0)
        mountRef.current.appendChild(renderer.domElement)
      }

      // Particles
      const particlesGeometry = new BufferGeometry()
      const particlesCount = 100
      const posArray = new Float32Array(particlesCount * 3).map(() => (Math.random() - 0.5) * 10)

      particlesGeometry.setAttribute("position", new BufferAttribute(posArray, 3))
      const particlesMaterial = new PointsMaterial({
        size: 0.05,
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.8,
      })
      particles = new Points(particlesGeometry, particlesMaterial)
      scene.add(particles)

      // Pre-create geometries and materials
      const geometries = [
        new BoxGeometry(0.5, 0.5, 0.5),
        new SphereGeometry(0.3, 32, 32),
        new ConeGeometry(0.3, 0.6, 8),
      ]
      const materials = [
        new MeshBasicMaterial({ color: 0x3b82f6, wireframe: true }),
        new MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true }),
        new MeshBasicMaterial({ color: 0x06b6d4, wireframe: true }),
      ]

      // Add meshes
      for (let i = 0; i < 5; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)]
        const material = materials[Math.floor(Math.random() * materials.length)]
        const mesh = new Mesh(geometry, material)
        mesh.position.set(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4
        )
        scene.add(mesh)
        meshes.push(mesh)
      }

      camera.position.z = 5

      // Animation loop
      renderer.setAnimationLoop(() => {
        if (particles) {
          particles.rotation.x += 0.001
          particles.rotation.y += 0.002
        }
        meshes.forEach(mesh => {
          mesh.rotation.x += 0.01
          mesh.rotation.y += 0.01
        })
        renderer.render(scene, camera)
      })
    }

    init()

    // Resize
    const handleResize = () => {
      if (mountRef.current && camera && renderer) {
        const rect = mountRef.current.getBoundingClientRect()
        camera.aspect = rect.width / rect.height
        camera.updateProjectionMatrix()
        renderer.setSize(rect.width, rect.height)
      }
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (renderer) {
        renderer.setAnimationLoop(null)
        renderer.dispose()
      }
      if (particles) {
        particles.geometry.dispose()
        ;(particles.material as any).dispose()
      }
      meshes.forEach(mesh => {
        mesh.geometry.dispose()
        ;(mesh.material as any).dispose()
      })
      if (mountRef.current && renderer?.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none opacity-30" />
}
