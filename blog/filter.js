// Function to filter content based on the selected interest
document.querySelectorAll('.filter-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        const filter = this.getAttribute('data-filter');
        const contentItems = document.querySelectorAll('#links .gap');

        contentItems.forEach(item => {
            const keywords = item.dataset.keywords.split(', ').map(keyword => keyword.trim());
            if (filter === "All") {
                item.style.display = ''; // Show all items
            } else if (keywords.includes(filter)) {
                item.style.display = ''; // Show the item
            } else {
                item.style.display = 'none'; // Hide the item
            }
        });
    });
});
