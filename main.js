const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

const generatorBtn = document.getElementById('draw-btn');
const numbersDiv = document.getElementById('ball-container');

generatorBtn.addEventListener('click', () => {
  numbersDiv.innerHTML = '';
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }

  const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

  for (const number of sortedNumbers) {
    const circle = document.createElement('div');
    circle.classList.add('ball');
    const color = getColor(number);
    circle.style.backgroundColor = color;
    circle.textContent = number;
    numbersDiv.appendChild(circle);
  }
});

function getColor(number) {
  if (number <= 10) {
    return '#fbc400'; // Yellow
  } else if (number <= 20) {
    return '#69c8f2'; // Blue
  } else if (number <= 30) {
    return '#ff7272'; // Red
  } else if (number <= 40) {
    return '#aaa'; // Gray
  } else {
    return '#b0d840'; // Green
  }
}
