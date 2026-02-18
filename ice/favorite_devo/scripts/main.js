document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('devotional-form');
    const tableBody = document.querySelector('#devotional-table tbody');

    form.addEventListener('submit', function(event) {
        // Prevent the page from reloading
        event.preventDefault();

        // Get values from the input fields
        const title = document.getElementById('new-title').value;
        const author = document.getElementById('new-author').value;
        const dateValue = document.getElementById('new-date').value;

        // Format the date to look like "October 2021" for consistency
        const dateOptions = { year: 'numeric', month: 'long' };
        const formattedDate = new Date(dateValue).toLocaleDateString('en-US', dateOptions);

        // Create a new row and cells
        const newRow = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = title;

        const authorCell = document.createElement('td');
        authorCell.textContent = author;

        const dateCell = document.createElement('td');
        dateCell.textContent = formattedDate;

        // Append cells to the row
        newRow.appendChild(titleCell);
        newRow.appendChild(authorCell);
        newRow.appendChild(dateCell);

        // Add the new row to the table body
        tableBody.appendChild(newRow);

        // Clear the form for the next entry
        form.reset();
    });
});