import type { Directive } from "vue";

const observer =
  typeof IntersectionObserver !== "undefined"
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            }
          });
        },
        { threshold: 0.1 }
      )
    : null;

export const vReveal: Directive<HTMLElement> = {
  mounted(el) {
    el.classList.add("fade-in-section");
    observer?.observe(el);
  },
  unmounted(el) {
    observer?.unobserve(el);
  },
};
