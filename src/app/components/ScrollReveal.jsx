"use client";

import { useEffect, useRef, useState } from "react";

/**
 * スクロール時にアニメーションを再生するラッパーコンポーネント
 * @param {string} animation - "slide-up" | "slide-left" | "slide-right" | "fade-in"
 * @param {number} delay - アニメーション開始までの遅延（ミリ秒）
 * @param {number} threshold - 何%画面に入ったらアニメーション開始するか（0〜1）
 */
const ScrollReveal = ({
  children,
  className = "",
  animation = "slide-up",
  delay = 0,
  threshold = 0.15,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 画面に入ったら表示、画面から出たら非表示に戻す
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`
        ${isVisible ? `animate-scroll-${animation}` : "opacity-0"}
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
