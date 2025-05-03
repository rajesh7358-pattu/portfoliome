import { useState, useEffect, RefObject } from 'react';

interface InViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function useInView(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    rootMargin = '0px',
    triggerOnce = false
  }: InViewOptions = {}
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const newIsInView = entry.isIntersecting;
        setIsInView(newIsInView);
        
        if (newIsInView && triggerOnce) {
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [elementRef, threshold, rootMargin, triggerOnce]);

  return isInView;
}