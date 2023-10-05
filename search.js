console.log("srcipt executing");
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('results');
    const items = resultsContainer.getElementsByClassName('checkbox-container');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.parentElement.style.display = 'block';
            } else {
                item.parentElement.style.display = 'none';
            }
        }
    });
});
