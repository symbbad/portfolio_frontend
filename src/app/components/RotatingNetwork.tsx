"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// 추상화: 그렇게 필요해 보이지는 않음
interface RotatingNetwork {}

const RotatingNetwork: React.FC<RotatingNetwork> = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Three.js 초기화
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true // 안티앨리어싱 추가
    });

    // 성능 최적화
    const initRenderer = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); 
      mount.appendChild(renderer.domElement);
    };

    initRenderer();

    // 지구 메쉬 생성
    const createEarth = () => {
      const geometry = new THREE.SphereGeometry(100, 64, 64);
      const material = new THREE.MeshBasicMaterial({
        color: 0x222222,
        transparent: true,
        opacity: 0
      });
      const earth = new THREE.Mesh(geometry, material);
      scene.add(earth);
      return earth;
    };

    const earth = createEarth();

    // 노드 생성 및 위치 계산
    const createNodes = () => {
      const nodeCount = 400;
      const nodePositions: number[] = [];
      const nodeSizes: number[] = [];
      
      for (let i = 0; i < nodeCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const radius = 100;
        
        nodePositions.push(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        );
        nodeSizes.push(0.5);
      }

      return { nodePositions, nodeSizes, nodeCount };
    };

    const { nodePositions, nodeSizes, nodeCount } = createNodes();

    // 노드 연결 계산 최적화
    const calculateConnections = () => {
      const connectionCounts = new Array(nodeCount).fill(0);
      
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const distance = Math.hypot(
            nodePositions[i * 3] - nodePositions[j * 3],
            nodePositions[i * 3 + 1] - nodePositions[j * 3 + 1], 
            nodePositions[i * 3 + 2] - nodePositions[j * 3 + 2]
          );

          if (distance < 32) {
            connectionCounts[i]++;
            connectionCounts[j]++;
          }
        }
      }

      const maxConnections = Math.max(...connectionCounts);
      nodeSizes.forEach((_, i) => {
        nodeSizes[i] = 0.5 + (connectionCounts[i] / maxConnections) * 1.5;
      });

      return connectionCounts;
    };

    calculateConnections();

    // 노드 텍스처 생성
    const createNodeTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = 128;
      const context = canvas.getContext('2d')!;

      // 배경 투명
      context.clearRect(0, 0, canvas.width, canvas.height);

      // 테두리
      context.beginPath();
      context.arc(64, 64, 24, 0, Math.PI * 2); // 약간 작은 반지름으로 테두리
      context.strokeStyle = 'rgba(147, 112, 219, 0.8)'; // 몽환적인 보라색 테두리
      context.lineWidth = 4; // 테두리 두께
      context.stroke();

      const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.5, 'rgba(147, 112, 219, 0.8)');
      gradient.addColorStop(1, 'rgba(147, 112, 219, 0)');
      
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(64, 64, 60, 0, Math.PI * 2);
      context.fill();

      return new THREE.CanvasTexture(canvas);
    };

    // 노드 메쉬 생성
    const createNodeMesh = () => {
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(nodePositions, 3));
      geometry.setAttribute('size', new THREE.Float32BufferAttribute(nodeSizes, 1));

      // 노드 디자인 설정
      const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 3,
        sizeAttenuation: true,
        map: createNodeTexture(),
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const nodes = new THREE.Points(geometry, material);
      scene.add(nodes);
      return nodes;
    };

    const nodes = createNodeMesh();

    // 연결선 생성
    const createConnections = () => {
      const connections: THREE.Line[] = [];
      const material = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3,
        linewidth: 1,
        depthWrite: true,
        depthTest: false
      });

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const distance = Math.hypot(
            nodePositions[i * 3] - nodePositions[j * 3],
            nodePositions[i * 3 + 1] - nodePositions[j * 3 + 1],
            nodePositions[i * 3 + 2] - nodePositions[j * 3 + 2]
          );

          if (distance < 32) {
            const geometry = new THREE.BufferGeometry();
            const vertices = new Float32Array([
              nodePositions[i * 3], nodePositions[i * 3 + 1], nodePositions[i * 3 + 2],
              nodePositions[j * 3], nodePositions[j * 3 + 1], nodePositions[j * 3 + 2]
            ]);
            geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
            
            const line = new THREE.Line(geometry, material);
            connections.push(line);
            scene.add(line);
          }
        }
      }

      return connections;
    };

    const connections = createConnections();

    // 카메라 초기 위치 설정
    camera.position.z = 300;

    // 애니메이션 
    let time = 0;
    const ROTATION_SPEED = 0.0015;
    const TIME_INCREMENT = 0.0008;

    const animate = () => {
      requestAnimationFrame(animate);
      time += TIME_INCREMENT;

      // 회전 애니메이션
      [earth, nodes, ...connections].forEach(object => {
        object.rotation.y += ROTATION_SPEED;
      });

      // 카메라 움직임
      camera.position.x = Math.sin(time * 0.5) * 60;
      camera.position.y = Math.cos(time * 0.5) * 60;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    // 윈도우 리사이즈 핸들러
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollY / maxScroll;

      const minZ = 50; // 하한선 (가장 가까운 거리)
      const maxZ = 300; // 상한선 (가장 먼 거리)

      // 카메라 위치 조정
      camera.position.z = maxZ - scrollFraction * (maxZ - minZ);
      camera.position.z = Math.max(minZ, Math.min(camera.position.z, maxZ)); // 스크롤에 따라 카메라가 구체 내부로 이동

      // 구체 확대 애니메이션
      earth.scale.set(1 + scrollFraction, 1 + scrollFraction, 1 + scrollFraction);
    };

    window.addEventListener('scroll', handleScroll);

    animate();

    // 클린업
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (mount) {
        mount.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, []);

  return (
      <div
        ref={mountRef}
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          backgroundColor: '#000000',
          zIndex: -1,
        }}
      />
  );
};

export default RotatingNetwork;