





// Sample user data
const userData = {
    name: 'Gautam Yadav',
    email: 'gautamyadav@example.com',
    phone: '1234567890',
    balance: 10000,
    orderHistory: [
        { id: 'ORDER123', date: '2022-01-01', total: 100, status: 'Completed' },
        { id: 'ORDER456', date: '2022-01-15', total: 200, status: 'Pending' },
    ],
};

// Display user data
document.getElementById('name').textContent = userData.name;
document.getElementById('email').textContent = userData.email;
document.getElementById('phone').textContent = userData.phone;
document.getElementById('balance').textContent = `₹${userData.balance}`;



// Profile image upload functionality
document.querySelector('label').addEventListener('click', () => {
    const inputFile = document.getElementById('image-upload');
    inputFile.click();
});

document.getElementById('image-upload').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        document.getElementById('profile-image').src = reader.result;
    };
    reader.readAsDataURL(file);
});

// Transaction history button functionality
document.getElementById('add-funds').addEventListener('click', () => {
    alert('Transaction history will be displayed here.');
});

// Responsive navigation menu
const navLinks = document.querySelectorAll('.navbelt a');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav');
        navMenu.classList.toggle('active');
    });
});

// Toggle navigation menu on smaller screens
const navToggle = document.querySelector('.navbelt .logo');

navToggle.addEventListener('click', () => {
    const navMenu = document.querySelector('.nav');
    navMenu.classList.toggle('active');
});


const logoutBtn = document.querySelector(".logout-btn");

logoutBtn.addEventListener("click",()=>{
    window.location.replace("restro-log.html");
});
