const cursor = document.querySelector('#cursor');

document.addEventListener('mousemove', e => {
  const offset = 15; // Adjust the offset as needed
  const delay = 100; // Adjust the delay as needed
  const x = e.pageX - offset;
  const y = e.pageY - offset;
  
  cursor.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener('mouseleave', () => {
  cursor.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
  cursor.style.opacity = '1';
});
