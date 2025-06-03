//your JS code here. If required.
// Function to simulate a delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Step 1: Start with a Promise that resolves with [1, 2, 3, 4] after 3 seconds
function transformArray() {
  const outputDiv = document.getElementById('output');

  new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); // 3 second delay for initial array
  })
    .then((array) => {
      // Step 2: Filter even numbers after a 1 second delay
      return delay(1000).then(() => {
        const evens = array.filter((num) => num % 2 === 0);
        outputDiv.textContent = evens.join(',');
        return evens;
      });
    })
    .then((evens) => {
      // Step 3: Multiply evens by 2 after a 2 second delay
      return delay(2000).then(() => {
        const multiplied = evens.map((num) => num * 2);
        outputDiv.textContent = multiplied.join(',');
      });
    })
    .catch((error) => {
      outputDiv.textContent = `Error: ${error.message}`;
    });
}

// Call the function on page load
transformArray();
