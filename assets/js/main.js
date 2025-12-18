(()=>{
  const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.2});
  document.querySelectorAll('.reveal-up').forEach(el=>observer.observe(el));
  if(window.bootstrap&&document.body){new bootstrap.ScrollSpy(document.body,{target:'#nav',offset:80});document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el=>new bootstrap.Tooltip(el))}
  const glowEl=document.querySelector('.hero-section picture.reveal-up');
  const backTop=document.getElementById('backToTop');
  const onScroll=()=>{
    if(backTop){backTop.classList.toggle('show',window.scrollY>320)}
    if(!glowEl)return;const r=glowEl.getBoundingClientRect();
    const raw=(r.top-window.innerHeight*0.45)/10;
    const shift=Math.max(-42,Math.min(42,raw));
    glowEl.style.setProperty('--glow-shift',shift.toFixed(2)+'px');
    const nav=document.querySelector('.navbar');
    if(nav){nav.classList.toggle('scrolled',window.scrollY>2)}
  };
  window.addEventListener('scroll',onScroll,{passive:true});
  onScroll();
})();
