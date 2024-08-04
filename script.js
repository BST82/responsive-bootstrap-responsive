function toggleDiv(element) {
    // Define images for active and inactive states
    const oneImages = {
        active: "https://via.placeholder.com/300/0000FF/FFFFFF?text=Active+One",
        inactive: "https://via.placeholder.com/300/808080/FFFFFF?text=Inactive+One"
    };

    const twoImages = {
        active: "https://via.placeholder.com/300/FF0000/FFFFFF?text=Active+Two",
        inactive: "https://via.placeholder.com/300/808080/FFFFFF?text=Inactive+Two"
    };

    // Get all the divs with class 'one' and 'two'
    const allDivs = document.querySelectorAll('.one, .two');
    
    // Remove 'active' class from all divs and set inactive images
    allDivs.forEach(div => {
        div.classList.remove('active');
        const img = div.querySelector('img');
        if (div.classList.contains('one')) {
            img.src = oneImages.inactive;
        } else if (div.classList.contains('two')) {
            img.src = twoImages.inactive;
        }
    });

    // Add 'active' class to the clicked div and set active image
    element.classList.add('active');
    const img = element.querySelector('img');
    if (element.classList.contains('one')) {
        img.src = oneImages.active;
    } else if (element.classList.contains('two')) {
        img.src = twoImages.active;
    }
}

// CSS for active div
const style = document.createElement('style');
style.innerHTML = `
    .one.active, .two.active {
        background-color: black !important;
        color: white !important;
    }
`;
document.head.appendChild(style);
