const ordersSection = document.querySelector('.orders');


const orderDetails = ordersSection.querySelectorAll('.order-detail');


orderDetails.forEach((order) => {
    const acceptButton = order.querySelectorAll('button')[0];
    const declineButton = order.querySelectorAll('button')[1];

    acceptButton.addEventListener('click', () => {
        
        console.log(`Order #${order.querySelector('h3').textContent.split('#')[1]} accepted`);
        
        order.querySelector('h3').style.color = 'green';
        acceptButton.disabled = true;
        declineButton.disabled = true;
    });

    declineButton.addEventListener('click', () => {
       
        console.log(`Order #${order.querySelector('h3').textContent.split('#')[1]} declined`);
        
        order.querySelector('h3').style.color = 'red';
        acceptButton.disabled = true;
        declineButton.disabled = true;
    });
});


const map = L.map("map").setView([37.7749, -122.4194], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    subdomains: ["a", "b", "c"],
}).addTo(map);


const marker = L.marker([37.7749, -122.4194]);
marker.addTo(map);
marker.bindPopup("Your location");


map.on("click", (e) => {
    console.log(`Clicked at: ${e.latlng.lat}, ${e.latlng.lng}`);
});

map.on("moveend", () => {
    console.log(`Map center: ${map.getCenter().lat}, ${map.getCenter().lng}`);
});

map.on("zoomend", () => {
    console.log(`Zoom level: ${map.getZoom()}`);
});

const mapElement = document.getElementById('map');


mapElement.addEventListener('load', () => {
    console.log('Map loaded');
});


mapElement.addEventListener('click', () => {
    console.log('Map clicked');
});


const iframeDoc = mapElement.contentDocument || mapElement.contentWindow.document;


iframeDoc.addEventListener('click', () => {
    console.log('Iframe document clicked');
});


mapElement.style.width = '800px';
mapElement.style.height = '600px';


mapElement.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14528.46177791671!2d85.54954521413786!3d24.446779701220777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f3750985f2dd73%3A0x43f7c65d76bd727d!2sRadha%20Krishna%20Temple%2C%20Jhumri!5e0!3m2!1sen!2sin!4v1727620585120!5m2!1sen!2sin";

