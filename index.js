const mouseDot= document.querySelector('.mouseDot');
const mouseOuterDot= document.querySelector('.mouseOuterDot')

const moveCursor = (e) =>{
    const mouseY =e.clientY;
    const mouseX =e.clientX;

    mouseDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px,0)`;
    mouseOuterDot.style.transform= `translate3d(${mouseX}px, ${mouseY}px,0)`;
}

window.addEventListener('mousemove',moveCursor);