document.addEventListener('mousemove', (e) => {
    const glow = document.getElementById('bg-glow');
    const x = e.clientX;
    const y = e.clientY;
    
    // Cor alterada para um dourado suave (rgba 212, 175, 55)
    glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(212, 175, 55, 0.15) 0%, transparent 40%)`;
});