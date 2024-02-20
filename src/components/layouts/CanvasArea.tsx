// src/components/layouts/CanvasComponent.tsx
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface CanvasComponentProps {
  content: React.ReactNode;
}

const CanvasComponent: React.FC<CanvasComponentProps> = ({ content }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");

      // Non-null assertion (!) is used here
      ctx!.fillStyle = "blue";
      ctx!.fillRect(10, 10, 100, 100);
    }
  }, []);

  return ReactDOM.createPortal(
    <canvas ref={canvasRef} width={400} height={200}>
      {/* Render your general React component inside the canvas tag */}
      {content}
    </canvas>,
    document.body // Render outside the regular React hierarchy
  );
};

export default CanvasComponent;
