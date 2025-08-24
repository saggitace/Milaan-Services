"use client"

import { useEffect, useRef } from "react"

interface ThreeJSBackgroundProps {
  variant?: "particles" | "waves" | "network"
  color?: string
}

export default function ThreeJSBackground({ variant = "particles", color = "#3b82f6" }: ThreeJSBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    let scene: any, camera: any, renderer: any, mesh: any
    let animationId: number

    const init = async () => {
      const THREE = await import("three")

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

      if (mountRef.current) {
        const rect = mountRef.current.getBoundingClientRect()
        renderer.setSize(rect.width, rect.height)
        renderer.setClearColor(0x000000, 0)
        mountRef.current.appendChild(renderer.domElement)
      }

      if (variant === "particles") {
        // Floating particles
        const particlesGeometry = new THREE.BufferGeometry()
        const particlesCount = 50
        const posArray = new Float32Array(particlesCount * 3)

        for (let i = 0; i < particlesCount * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 8
        }

        particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

        const particlesMaterial = new THREE.PointsMaterial({
          size: 0.03,
          color: color,
          transparent: true,
          opacity: 0.6,
        })

        mesh = new THREE.Points(particlesGeometry, particlesMaterial)
        scene.add(mesh)
      } else if (variant === "waves") {
        // Animated waves
        const geometry = new THREE.PlaneGeometry(10, 10, 50, 50)
        const material = new THREE.MeshBasicMaterial({
          color: color,
          wireframe: true,
          transparent: true,
          opacity: 0.3,
        })

        mesh = new THREE.Mesh(geometry, material)
        mesh.rotation.x = -Math.PI / 4
        scene.add(mesh)
      } else if (variant === "network") {
        // Network connections
        const points = []
        for (let i = 0; i < 20; i++) {
          points.push(
            new THREE.Vector3((Math.random() - 0.5) * 6, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 2),
          )
        }

        // Create lines between points
        for (let i = 0; i < points.length; i++) {
          for (let j = i + 1; j < points.length; j++) {
            if (points[i].distanceTo(points[j]) < 2) {
              const geometry = new THREE.BufferGeometry().setFromPoints([points[i], points[j]])
              const material = new THREE.LineBasicMaterial({
                color: color,
                transparent: true,
                opacity: 0.2,
              })
              const line = new THREE.Line(geometry, material)
              scene.add(line)
            }
          }
        }

        // Add points
        points.forEach((point) => {
          const geometry = new THREE.SphereGeometry(0.02, 8, 8)
          const material = new THREE.MeshBasicMaterial({ color: color })
          const sphere = new THREE.Mesh(geometry, material)
          sphere.position.copy(point)
          scene.add(sphere)
        })
      }

      camera.position.z = 5

      const animate = () => {
        animationId = requestAnimationFrame(animate)

        if (mesh) {
          if (variant === "particles") {
            mesh.rotation.x += 0.001
            mesh.rotation.y += 0.002
          } else if (variant === "waves") {
            const positions = mesh.geometry.attributes.position.array
            for (let i = 0; i < positions.length; i += 3) {
              positions[i + 2] = Math.sin((positions[i] + Date.now() * 0.001) * 2) * 0.1
            }
            mesh.geometry.attributes.position.needsUpdate = true
          }
        }

        if (variant === "network") {
          scene.children.forEach((child: any) => {
            if (child.type === "Mesh") {
              child.rotation.y += 0.005
            }
          })
        }

        renderer.render(scene, camera)
      }

      animate()
    }

    init()

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
      if (mountRef.current && renderer && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      if (renderer) {
        renderer.dispose()
      }
    }
  }, [variant, color])

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none opacity-20" />
}
