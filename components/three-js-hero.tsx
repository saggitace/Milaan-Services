"use client"

import { useEffect, useRef } from "react"

export default function ThreeJSHero() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    let scene: any, camera: any, renderer: any, particles: any
    let animationId: number

    const init = async () => {
      // Dynamically import Three.js to avoid SSR issues
      const THREE = await import("three")

      // Scene setup
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

      if (mountRef.current) {
        const rect = mountRef.current.getBoundingClientRect()
        renderer.setSize(rect.width, rect.height)
        renderer.setClearColor(0x000000, 0)
        mountRef.current.appendChild(renderer.domElement)
      }

      // Create floating particles
      const particlesGeometry = new THREE.BufferGeometry()
      const particlesCount = 100
      const posArray = new Float32Array(particlesCount * 3)

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10
      }

      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.8,
      })

      particles = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particles)

      // Create geometric shapes
      const geometries = [
        new THREE.BoxGeometry(0.5, 0.5, 0.5),
        new THREE.SphereGeometry(0.3, 32, 32),
        new THREE.ConeGeometry(0.3, 0.6, 8),
      ]

      const materials = [
        new THREE.MeshBasicMaterial({ color: 0x3b82f6, wireframe: true }),
        new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true }),
        new THREE.MeshBasicMaterial({ color: 0x06b6d4, wireframe: true }),
      ]

      for (let i = 0; i < 5; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)]
        const material = materials[Math.floor(Math.random() * materials.length)]
        const mesh = new THREE.Mesh(geometry, material)

        mesh.position.x = (Math.random() - 0.5) * 8
        mesh.position.y = (Math.random() - 0.5) * 6
        mesh.position.z = (Math.random() - 0.5) * 4

        scene.add(mesh)
      }

      camera.position.z = 5

      // Animation loop
      const animate = () => {
        animationId = requestAnimationFrame(animate)

        // Rotate particles
        if (particles) {
          particles.rotation.x += 0.001
          particles.rotation.y += 0.002
        }

        // Rotate geometric shapes
        scene.children.forEach((child: any) => {
          if (child.type === "Mesh") {
            child.rotation.x += 0.01
            child.rotation.y += 0.01
          }
        })

        renderer.render(scene, camera)
      }

      animate()
    }

    init()

    // Handle resize
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
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (mountRef.current && renderer) {
        mountRef.current.removeChild(renderer.domElement)
      }
      if (renderer) {
        renderer.dispose()
      }
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none opacity-30" />
}
