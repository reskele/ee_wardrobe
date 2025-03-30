
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('registerForm');

//     // Add a typing effect on input focus
//     const inputs = document.querySelectorAll('form input');
//     inputs.forEach(input => {
//         input.addEventListener('focus', () => {
//             input.placeholder = Type your ${input.name};
//         });
//         input.addEventListener('blur', () => {
//             input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
//         });
//     });

//     // Animate button on submit
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const button = form.querySelector('button');
//         button.innerHTML = 'Registering...';
//         button.style.transition = 'all 0.3s ease';
//         button.style.transform = 'scale(1.1)';
//         button.style.background = 'rgba(255,255,255,0.2)';
//         setTimeout(() => {
//             button.innerHTML = 'Success!';
//             button.style.background = '#28a745';
//         }, 2000);
//     });

//     // Show/Hide Password Feature
//     const passwordField = form.querySelector('input[name="password"]');
//     const togglePassword = document.createElement('span');
//     togglePassword.innerHTML = '👁';
//     togglePassword.style.position = 'absolute';
//     togglePassword.style.right = '10px';
//     togglePassword.style.top = '30px';
//     togglePassword.style.cursor = 'pointer';
//     togglePassword.style.fontSize = '1.2rem';
//     togglePassword.style.color = '#fff';
//     passwordField.parentNode.style.position = 'relative';
//     passwordField.parentNode.appendChild(togglePassword);

//     togglePassword.addEventListener('click', () => {
//         const type = passwordField.type === 'password' ? 'text' : 'password';
//         passwordField.type = type;
//         togglePassword.innerHTML = type === 'password' ? '👁' : '🙈';
//     });
// });