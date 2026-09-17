import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const sceneStyles = {
  classic: { primary: 0x8c2f39, secondary: 0xc9a96e, background: 0x30251f, geometry: 'sphere' },
  tech: { primary: 0x22d3ee, secondary: 0x818cf8, background: 0x0b1120, geometry: 'knot' }
};

function createGeometry(type) {
  switch (type) {
    case 'box':
      return new THREE.BoxGeometry(1.45, 1.45, 1.45, 3, 3, 3);
    case 'knot':
      return new THREE.TorusKnotGeometry(0.68, 0.2, 96, 16);
    default:
      return new THREE.IcosahedronGeometry(1.02, 2);
  }
}

function ProductScene3D({ templateName }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const style = sceneStyles[templateName] || sceneStyles.modern;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    const timer = new THREE.Timer();
    const pointer = new THREE.Vector2();
    let frameId;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    camera.position.set(0, 0.2, 4.2);

    const group = new THREE.Group();
    const geometry = createGeometry(style.geometry);
    const material = new THREE.MeshPhysicalMaterial({
      color: style.primary,
      metalness: templateName === 'minimal' ? 0.15 : 0.65,
      roughness: templateName === 'boutique' ? 0.25 : 0.18,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2
    });
    const object = new THREE.Mesh(geometry, material);
    group.add(object);

    const smallOrb = new THREE.Mesh(
      new THREE.SphereGeometry(0.13, 20, 20),
      new THREE.MeshBasicMaterial({ color: style.secondary })
    );
    smallOrb.position.set(1.35, 0.55, 0.1);
    group.add(smallOrb);
    scene.add(group);

    scene.add(new THREE.AmbientLight(style.background, 1.4));
    const keyLight = new THREE.DirectionalLight(style.secondary, 3.5);
    keyLight.position.set(2, 3, 4);
    scene.add(keyLight);
    const rimLight = new THREE.PointLight(style.primary, 3, 8);
    rimLight.position.set(-2, -1, 2);
    scene.add(rimLight);

    const resize = () => {
      const { width, height } = canvas.parentElement.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const onPointerMove = (event) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
    };

    const animate = () => {
      timer.update();
      const elapsed = timer.getElapsed();
      object.rotation.x = elapsed * 0.25 + pointer.y * 0.18;
      object.rotation.y = elapsed * 0.42 + pointer.x * 0.28;
      smallOrb.position.y = 0.55 + Math.sin(elapsed * 1.8) * 0.14;
      group.position.x += (pointer.x * 0.16 - group.position.x) * 0.04;
      group.position.y += (pointer.y * 0.12 - group.position.y) * 0.04;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('pointermove', onPointerMove);
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', onPointerMove);
      geometry.dispose();
      material.dispose();
      smallOrb.geometry.dispose();
      smallOrb.material.dispose();
      renderer.dispose();
    };
  }, [templateName]);

  return <canvas ref={canvasRef} className="product-scene-3d" aria-label="Animated 3D product illustration" />;
}

export default ProductScene3D;
