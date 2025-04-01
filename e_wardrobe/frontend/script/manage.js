document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.getElementById('openModal');
    const closeModalBtn = document.getElementById('closeModal');
    const itemModal = document.getElementById('itemModal');
    const itemForm = document.getElementById('itemForm');
    const itemGrid = document.getElementById('itemGrid');
    const sidebarItems = document.querySelectorAll('.sidebar li');
    const searchInput = document.getElementById('searchInput');

    let items = []; // Array to store wardrobe items

    // Open modal
    openModalBtn.addEventListener('click', () => {
      itemModal.style.display = 'flex';
    });

    // Close modal
    closeModalBtn.addEventListener('click', () => {
      itemModal.style.display = 'none';
    });

    // Close modal when clicking outside modal content
    window.addEventListener('click', function(e) {
      if (e.target == itemModal) {
        itemModal.style.display = 'none';
      }
    });

    // Handle form submission to add a new item
    itemForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('itemName').value;
      const category = document.getElementById('itemCategory').value;
      const image = document.getElementById('itemImage').value;
      const description = document.getElementById('itemDescription').value;

      const newItem = { name, category, image, description };
      items.push(newItem);
      renderItems(items);
      itemForm.reset();
      itemModal.style.display = 'none';
    });

    // Function to render items in the grid
    function renderItems(itemList) {
      itemGrid.innerHTML = '';
      itemList.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-category', item.category);
        card.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        `;
        itemGrid.appendChild(card);
      });
    }

    // Filter items by category when a sidebar item is clicked
    sidebarItems.forEach(li => {
      li.addEventListener('click', () => {
        const category = li.getAttribute('data-category');
        if (category === 'All') {
          renderItems(items);
        } else {
          const filtered = items.filter(item => item.category === category);
          renderItems(filtered);
        }
      });
    });

    // Search functionality
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      const filtered = items.filter(item => item.name.toLowerCase().includes(query));
      renderItems(filtered);
    });
  });