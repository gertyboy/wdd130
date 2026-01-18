function generateHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <div>
            <a href="index.html" id="logo">
                <img src="https://images.squarespace-cdn.com/content/v1/661d5aa268f9961459c0df1a/7a7dc4fb-f306-4b03-a0cd-4d4272898574/NB.png?format=1500w" id="header_img">
            </a>
        </div>
        <nav>
            <ul id="nav_links">
                <li class="nav_items"><a class="item_links" href="#">Projects</a></li>
                <li class="nav_items"><a class="item_links" href="#">Contact</a></li>
                <li class="nav_items"><a class="item_links" href="#">About</a></li>
            </ul>
        </nav>
    `;
    document.body.prepend(header);
}

function generateFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>&copy; 2025 My Website. All rights reserved.</p>
    `;
    document.body.appendChild(footer);
}

// Call the functions to generate header and footer
generateHeader();
generateFooter();