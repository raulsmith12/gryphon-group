'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Carousel.module.css';

interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  wrapAround?: boolean;
}

export default function Carousel({ 
  children, 
  autoPlay = true, 
  autoPlayInterval = 3000,
  wrapAround = true 
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(wrapAround ? children.length : 0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Duplicate items for infinite loop (start in middle set)
  const items = wrapAround 
    ? [...children, ...children, ...children] 
    : children;
  const itemCount = children.length;

  // Calculate items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth <= 768) {
          setItemsPerView(1);
        } else if (window.innerWidth <= 992) {
          setItemsPerView(2);
        } else {
          setItemsPerView(3);
        }
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && !isPaused && wrapAround) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const next = prev + 1;
          // If we've gone past the second set, jump back to start of second set seamlessly
          if (next >= itemCount * 2) {
            // Use requestAnimationFrame for smoother transition
            requestAnimationFrame(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition = 'none';
                setCurrentIndex(itemCount);
                requestAnimationFrame(() => {
                  if (carouselRef.current) {
                    carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
                  }
                });
              }
            });
            return next;
          }
          return next;
        });
      }, autoPlayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, isPaused, wrapAround, itemCount]);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const next = prev - 1;
      if (wrapAround) {
        // If we've gone before the first set, jump to end of second set
        if (next < itemCount) {
          requestAnimationFrame(() => {
            if (carouselRef.current) {
              carouselRef.current.style.transition = 'none';
              setCurrentIndex(itemCount * 2 - 1);
              requestAnimationFrame(() => {
                if (carouselRef.current) {
                  carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
                }
              });
            }
          });
          return next;
        }
      } else {
        return next < 0 ? 0 : next;
      }
      return next;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      if (wrapAround) {
        // If we've gone past the second set, jump back to start of second set
        if (next >= itemCount * 2) {
          requestAnimationFrame(() => {
            if (carouselRef.current) {
              carouselRef.current.style.transition = 'none';
              setCurrentIndex(itemCount);
              requestAnimationFrame(() => {
                if (carouselRef.current) {
                  carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
                }
              });
            }
          });
          return next;
        }
      } else {
        return next >= itemCount ? itemCount - 1 : next;
      }
      return next;
    });
  };

  const translateX = -(currentIndex * (100 / itemsPerView));

  return (
    <div 
      className={styles.carousel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.carouselContainer}>
        <div 
          ref={carouselRef}
          className={styles.carouselTrack}
          style={{
            transform: `translateX(${translateX}%)`,
            transition: 'transform 0.5s ease-in-out'
          }}
        >
          {items.map((item, index) => (
            <div key={index} className={styles.carouselCell}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <button 
        className={styles.carouselButton} 
        onClick={handlePrev}
        aria-label="Previous"
      >
        ‹
      </button>
      <button 
        className={`${styles.carouselButton} ${styles.carouselButtonNext}`} 
        onClick={handleNext}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}








