function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function openUploadModal() {
    document.getElementById('uploadModal').style.display = 'flex';
}

function closeUploadModal() {
    document.getElementById('uploadModal').style.display = 'none';
}

function addClothing() {
    const imageInput = document.getElementById('clothingImage');
    const nameInput = document.getElementById('clothingName');
    
    if (imageInput.files.length === 0 || nameInput.value.trim() === '') {
        alert('Please upload an image and enter a name.');
        return;
    }
    
    const file = imageInput.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        const clothesGrid = document.getElementById('clothesGrid');
        const item = document.createElement('div');
        item.classList.add('clothing-item');
        item.innerHTML = `<img src="${e.target.result}" alt="${nameInput.value}"><p>${nameInput.value}</p>`;
        clothesGrid.appendChild(item);
    };
    reader.readAsDataURL(file);
    
    closeUploadModal();
}

function addReminder(type) {
    const reminderList = document.getElementById('reminderList');
    const reminderText = type === 'wear' ? 'Wear outfit reminder' : 'Donate clothes reminder';
    const listItem = document.createElement('li');
    listItem.textContent = reminderText;
    reminderList.appendChild(listItem);
}

// Initialize default section
document.addEventListener("DOMContentLoaded", () => {
    showSection('wardrobe');
});



CSS


/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
    background-color: #f4f4f4;
}

header {
    background: #4CAF50;
    color: white;
    padding: 15px;
    font-size: 24px;
}

nav {
    display: flex;
    justify-content: space-around;
    background: #333;
    padding: 10px;
}

nav button {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
}

nav button:hover {
    text-decoration: underline;
}

section {
    display: none;
    padding: 20px;
}

section.active {
    display: block;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 10px;
    padding: 20px;
}

.add-btn {
    background: #4CAF50;
    color: white;
    border: none;
    font-size: 24px;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    position: fixed;
    bottom: 20px;
    right: 20px;
}

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
}

.modal-content input {
    display: block;
    margin: 10px auto;
    padding: 10px;
}

