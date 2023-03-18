// Get the container element
const container = document.querySelector('.container');

// Create 800 box elements and append them to the container
for (let i = 0; i < 800; i++) {
  const box = document.createElement('div');
  box.classList.add('square');
  box.addEventListener('mouseover', () => {
    const randomColor = getRandomColor();
    box.style.backgroundColor = randomColor;
  });
  box.addEventListener('mouseout', () => {
    setTimeout(() => {
      box.style.transition = 'background-color 1s ease';
      box.style.backgroundColor = '';
    }, 1000);
  });
  container.appendChild(box);
}

// Generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
