let count = 0;
document.querySelector('#incrementBtn').addEventListener('click', function() {
    count++;
    document.querySelector('#counter').textContent = count;
});
