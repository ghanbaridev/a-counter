// Select elements from the DOM
var counter = document.getElementById('counter');
var incrementBtn = document.getElementById('increment');
var decrementBtn = document.getElementById('decrement');
var resetBtn = document.getElementById('reset');
// Initialize counter value
var count = 0;



// Update counter display
function updateCounter() {
    counter.textContent = count.toString();
}
// Increment button event listener
incrementBtn.addEventListener('click', function() {
    count++;
    updateCounter();

});
// Decrement button event listener
decrementBtn.addEventListener('click', function() {
    if (count > 0) {
        count--; // Only decrement if count is greater than 0
        updateCounter();
    }
});
// Reset button event listener
resetBtn.addEventListener('click', function() {
    count = 0;
    updateCounter();
});