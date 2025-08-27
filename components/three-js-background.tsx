"use client"

import { useEffect, useRef } from "react"

interface ThreeJSBackgroundProps {
  variant?: "particles" | "waves" | "network"
  color?: string
}

export default function ThreeJSBackground({
  variant = "particles",
  color = "#3b82f6",
}: ThreeJSBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    let scene: any, camera: any, renderer: any, mesh: any
    const networkMeshes: any[] = []
    let animationId: number

    const init = async () => {
      // Named import for tree-shaking
      const {
        Scene,
        PerspectiveCamera,
        WebGLRenderer,
        BufferGeometry,
        BufferAttribute,
        PointsMaterial,
        Points,
        MeshBasicMaterial,
        Mesh,
        PlaneGeometry,
        SphereGeometry,
        LineBasicMaterial,
        Line,
        Vector3,
      } = await import("three")

      // Scene setup
      scene = new Scene()
      camera = new PerspectiveCamera(
        75,
        mountRef.current!.clientWidth / mountRef.current!.clientHeight,
        0.1,
        1000
      )
      renderer = new WebGLRenderer({ alpha: true, antialias: true })

      if (mountRef.current) {
        const rect = mountRef.current.getBoundingClientRect()
        renderer.setSize(rect.width, rect.height)
        renderer.setClearColor(0x000000, 0)
        mountRef.current.appendChild(renderer.domElement)
      }

      // Particle variant
      if (variant === "particles") {
        const count = 50
        const geometry = new BufferGeometry()
        const positions = new Float32Array(count * 3)
        for (let i = 0; i < count * 3; i++) {
          positions[i] = (Math.random() - 0.5) * 8
        }
        geometry.setAttribute("position", new BufferAttribute(positions, 3))

        const material = new PointsMaterial({
          size: 0.03,
          color,
          transparent: true,
          opacity: 0.6,
        })

        mesh = new Points(geometry, material)
        scene.add(mesh)
      }

      // Waves variant
      else if (variant === "waves") {
        const geometry = new PlaneGeometry(10, 10, 50, 50)
        const material = new MeshBasicMaterial({
          color,
          wireframe: true,
          transparent: true,
          opacity: 0.3,
        })
        mesh = new Mesh(geometry, material)
        mesh.rotation.x = -Math.PI / 4
        scene.add(mesh)
      }

      // Network variant
      else if (variant === "network") {
        const points: InstanceType<typeof Vector3>[] = []

        const sphereGeo = new SphereGeometry(0.02, 8, 8)
        const sphereMat = new MeshBasicMaterial({ color })

        for (let i = 0; i < 20; i++) {
          const p = new Vector3(
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 2
          )
          points.push(p)

          const sphere = new Mesh(sphereGeo, sphereMat)
          sphere.position.copy(p)
          scene.add(sphere)
          networkMeshes.push(sphere)
        }

        const lineMat = new LineBasicMaterial({ color, transparent: true, opacity: 0.2 })
        for (let i = 0; i < points.length; i++) {
          for (let j = i + 1; j < points.length; j++) {
            if (points[i].distanceTo(points[j]) < 2) {
              const lineGeo = new BufferGeometry().setFromPoints([points[i], points[j]])
              const line = new Line(lineGeo, lineMat)
              scene.add(line)
              networkMeshes.push(line)
            }
          }
        }
      }

      camera.position.z = 5

      // Animation loop
      const animate = () => {
        animationId = requestAnimationFrame(animate)

        if (mesh) {
          if (variant === "particles") {
            mesh.rotation.x += 0.001
            mesh.rotation.y += 0.002
          } else if (variant === "waves") {
            const pos = mesh.geometry.attributes.position.array
            for (let i = 0; i < pos.length; i += 3) {
              pos[i + 2] = Math.sin((pos[i] + Date.now() * 0.001) * 2) * 0.1
            }
            mesh.geometry.attributes.position.needsUpdate = true
          }
        }

        if (variant === "network") {
          networkMeshes.forEach((m) => {
            if (m.type === "Mesh") m.rotation.y += 0.005
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
      cancelAnimationFrame(animationId)

      // Clean up renderer
      if (renderer) renderer.dispose()

      // Clean up meshes
      if (mesh) {
        mesh.geometry.dispose()
        if ((mesh.material as any).dispose) mesh.material.dispose()
      }
      networkMeshes.forEach((m) => {
        if (m.geometry) m.geometry.dispose()
        if ((m.material as any).dispose) m.material.dispose()
      })

      if (mountRef.current && renderer?.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [variant, color])

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none opacity-20" />
}
