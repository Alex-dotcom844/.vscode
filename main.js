const display = document.getElementById('display');
const historyList = document.getElementById('historyList');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    const result = eval(display.value);
    addToHistory(display.value, result);
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}

function addToHistory(expression, result) {
  const item = document.createElement('li');
  item.textContent = `${expression} = ${result}`;
  historyList.prepend(item);
}

// Handle keyboard input
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.', '%', '(', ')'].includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    e.preventDefault();
    calculateResult();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});


