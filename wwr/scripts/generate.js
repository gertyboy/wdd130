function generateHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <h1>Welcome to My Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    `;
    document.body.prepend(header);
}

function generateFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>&copy; 2023 My Website. All rights reserved.</p>
    `;
    document.body.appendChild(footer);
}

// Call the functions to generate header and footer
generateHeader();
generateFooter();