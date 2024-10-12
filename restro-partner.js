
// Add event listener to partner images
const partnerImages = document.querySelectorAll('#partners img');

partnerImages.forEach((image) => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s ease';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

// Add more partners dynamically
const addPartner = (imageSrc, partnerName) => {
    const partnerList = document.querySelector('#partners ul');
    const partnerHTML = `
        <li>
            <img src="${imageSrc}" alt="${partnerName}">
            <h2>${partnerName}</h2>
        </li>
    `;
    partnerList.insertAdjacentHTML('beforeend', partnerHTML);
};

// Example usage:
addPartner('partner3.jpg', 'Partner 3');
addPartner('partner4.jpg', 'Partner 4');
