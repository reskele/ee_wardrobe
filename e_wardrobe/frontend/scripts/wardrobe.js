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



