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
  threshold = 0.3,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isAnimating = useRef(false); // アニメーション中かどうかを追跡

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 画面に入ったら表示＆アニメーション中フラグを立てる
          setIsVisible(true);
          isAnimating.current = true;
        } else if (!isAnimating.current) {
          // アニメーション中でなければ非表示に戻す
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  const handleAnimationEnd = () => {
    // アニメーション完了後にフラグを解除（次に画面外に出たら非表示に戻れる）
    isAnimating.current = false;
  };

  return (
    <div
      ref={ref}
      className={`
        ${isVisible ? `animate-scroll-${animation}` : "opacity-0"}
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
