import { useEffect } from 'react';

export const useResizeObserver = (ref, callback) => {
  useEffect(() => {
    const element = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      callback(entries[0]);
    });

    if (element) {
      resizeObserver.observe(element);
    }

    return () => {
      if (element) {
        resizeObserver.unobserve(element);
      }
    };
  }, [ref, callback]);
};
