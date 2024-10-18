const body = document.body;
const themeToggle = document.getElementById('themeToggle');

const savedTheme = localStorage.getItem('theme');
body.classList.add(savedTheme || 'light'); 

themeToggle.addEventListener('click', () => {
    const newTheme = body.classList.contains('light') ? 'dark' : 'light';
    body.className = newTheme;  
    localStorage.setItem('theme', newTheme); 
});

button.addEventListener('click', () => {
    button.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length; 
});

function myImg(работа) {
  let elem = document.getElementById('732.png'); // тут ID
  let style = getComputedStyle(elem); // тут стили
  if (style.display === 'none') {
    document.getElementById('732.png').style.display='block';
    } else if (style.display !== 'none') {
    document.getElementById('732.png').style.display='none';
  }
}