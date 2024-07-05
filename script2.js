// document.addEventListener("DOMContentLoaded", () => {
//     const orderForm = document.getElementById('order-form');

//     orderForm.addEventListener('submit', (event) => {
//         event.preventDefault(); // Prevent the form from submitting the traditional way

//         const formData = {
//             name: document.getElementById('name').value,
//             email: document.getElementById('email').value,
//             address: document.getElementById('address').value,
//             phone: document.getElementById('phone').value
//         };

//         console.log('Form Data Submitted:', formData);

//         // You can add code here to send formData to a server or Google Sheets
//         // For example, using fetch to send data to an API endpoint
//         // fetch('YOUR_API_ENDPOINT', {
//         //     method: 'POST',
//         //     headers: {
//         //         'Content-Type': 'application/json'
//         //     },
//         //     body: JSON.stringify(formData)
//         // })
//         // .then(response => response.json())
//         // .then(data => console.log('Success:', data))
//         // .catch((error) => console.error('Error:', error));
//     });
// });
function submitOrder() {
    const orderNumber = document.getElementById('orderNumber').value;
    const orderName = document.getElementById('orderName').value;
    const orderEmail = document.getElementById('orderEmail').value;

    if(orderNumber && orderName && orderEmail) {
        alert(`Order Confirmed!\nOrder Number: ${orderNumber}\nName: ${orderName}\nEmail: ${orderEmail}`);
        // Here, you can add code to send order details to the server or perform any other actions
    } else {
        alert('Please fill out all fields.');
    }
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username && password) {
        alert(`Login Successful!\nUsername: ${username}`);
        // Here, you can add code to handle login logic, such as verifying credentials
    } else {
        alert('Please enter both username and password.');
    }
}

