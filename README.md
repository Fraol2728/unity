## Scroll reveal animation usage

Use the reusable reveal classes on any section or element:

```html
<section class="reveal-up">
  <div class="reveal-left">Left column content</div>
  <div class="reveal-right">Right column content</div>
</section>
```

Minimal IntersectionObserver logic (same pattern used in app):

```html
<script>
  const targets = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach((el) => el.classList.add('active'));
  } else {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

    targets.forEach((el) => observer.observe(el));
  }
</script>
```

In React pages, apply the same classes directly to section wrappers and columns:

```tsx
<section className="section-padding reveal-up">
  <div className="grid lg:grid-cols-2 gap-12">
    <div className="reveal-left">...</div>
    <div className="reveal-right">...</div>
  </div>
</section>
```
