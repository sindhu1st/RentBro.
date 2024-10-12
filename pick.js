




const mapElement = document.getElementById('map');
const map = L.map(mapElement).setView([12.9716, 77.5946], 13);
L.tileLayer('https://{s}.<iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d227.01045291518548!2d85.54057973350793!3d24.444982106771054!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDI2JzQxLjkiTiA4NcKwMzInMjUuOSJF!5e0!3m2!1sen!2sin!4v1727665179572!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>', {
    attribution: '&copy; <a href="https://www.google.co.in/maps/@24.4228561,85.5303224,13z?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c']
}).addTo(map);


const ordersTable = document.querySelector('.orders table');


const orders = [
    { id: 'ORDER123', customerName: 'John Doe', pickupLocation: 'Bangalore', dropLocation: 'Mysore', status: 'Pending' },
    { id: 'ORDER456', customerName: 'Jane Doe', pickupLocation: 'Mysore', dropLocation: 'Bangalore', status: 'Completed' },
];

//orders.forEach((order) => {
    //const row = document.createElement('tr');
    //row.innerHTML = `
        //<td>${(link unavailable)}</td>,
        //<td>${order.customerName}</td>,
        //<td>${order.pickupLocation}</td>,
        //<td>${order.dropLocation}</td>,
        //<td>${order.status}</td>
    //`;
    //ordersTable.appendChild(row);
