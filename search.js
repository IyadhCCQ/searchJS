console.log("Hi");
document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchInput');
    var resultsContainer = document.getElementById('results');
    var items = resultsContainer.getElementsByClassName('checkbox-container');

    // Function to perform search
    function performSearch(query) {
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var text = item.textContent.toLowerCase();
            if (text.indexOf(query) !== -1) {
                item.parentElement.style.display = 'block';
              console.log("I am typing");
            } else {
                item.parentElement.style.display = 'none';
              console.log("I am typing");
            }
        }
    }

    // Add event listener to the search input
    searchInput.addEventListener('input', function () {
        var query = searchInput.value.toLowerCase();
       
        performSearch(query);
    });
});
