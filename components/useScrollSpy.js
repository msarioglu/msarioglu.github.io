import { useEffect, useState } from 'react';
import navStyles from "@/template/navigation/index.module.scss";

export default function UseScrollSpy(sectionIds, offset = 0) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: `-${offset}px 0px -80% 0px`,
      threshold: 0,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, observerOptions);
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  useEffect(() => {
    // Update nav items based on data-to-scrollspy-id
    document.querySelectorAll('[data-to-scrollspy-id]').forEach((el) => {
      if (el.getAttribute('data-to-scrollspy-id') === activeId) {
        el.classList.add(navStyles["active-item"]);
      } else {
        el.classList.remove(navStyles["active-item"]);
      }
    });
  }, [activeId]);

  return activeId;
}