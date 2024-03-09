// window.onload = function () {


//     // Open modal when trigger button is clicked
//     document.getElementById('modal-trigger').addEventListener('click', function () {
//         console.log('test');
//         document.getElementById('modal').classList.add('show');
//     });

//     // Close modal when clicking outside the modal
//     document.addEventListener('click', function (event) {
//         var modal = document.getElementById('modal');
//         if (event.target.closest('#modal') === null && event.target.closest('#modal-trigger') === null) {
//             modal.classList.remove('show');
//         }
//     });

//     // Submit form and close modal
//     document.getElementById('booking-form').addEventListener('submit', function (event) {
//         event.preventDefault();
//         // Handle form submission logic here

//         // Close modal
//         document.getElementById('modal').classList.remove('show');
//     });

// };