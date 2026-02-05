'use client'
import { Canvas } from "@react-three/fiber";
// Import OrbitControls từ thư viện hỗ trợ
import { OrbitControls, Stats } from "@react-three/drei";

export default function Home() {
  return (
    <div id="canvas-container" className="w-full h-screen"> 
      {/* Thêm height/width cụ thể cho container để Canvas biết kích thước */}
      <Canvas camera={{ position: [3, 3, 5] }}> {/* Đặt camera lệch đi một chút để nhìn thấy góc */}
        <Stats />
        
        {/* 1. Thêm OrbitControls để cho phép dùng chuột xoay, zoom */}
        <OrbitControls />

        {/* 2. Xoay khối hộp một chút để thấy nó là 3D ngay khi load */}
        <mesh rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[3, 3, 3]} /> {/* Mình chỉnh lại thành hình lập phương cho dễ nhìn */}
          <meshStandardMaterial color="orange" />
        </mesh>

        {/* Ánh sáng môi trường nhẹ */}
        <ambientLight intensity={0.5} />
        
        {/* 3. Di chuyển đèn sang bên cạnh để tạo bóng đổ, giúp thấy rõ khối 3D hơn */}
        <directionalLight position={[2, 5, 2]} intensity={1} />
      </Canvas>
    </div>
  );
}