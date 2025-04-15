const outfits = {}; // Initialize outfits object
const reminders = []; // Initialize reminders array

function showSection(sectionId) {
  document.querySelectorAll("section").forEach((section) => {
    section.classList.remove("active");
  });

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add("active");
  } else {
    console.error(`Section with ID '${sectionId}' not found.`);
  }
}

function addClothing() {
  const name = document.getElementById("clothingName").value.trim();
  const category = document.getElementById("clothingCategory").value;
  const imageInput = document.getElementById("clothingImage");
  const season = document.getElementById("clothingSeason").value.trim(); // Get the season value

  // Validate inputs
  if (!name || !imageInput.files.length || !season) {
    alert("Please provide name, image, and season.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const imgSrc = e.target.result;
    const itemCard = document.createElement("div");
    itemCard.className = "clothing-item";
    itemCard.innerHTML = `
      <img src="${imgSrc}" alt="${name}" />
      <p>${name}</p>
      <p>Season: ${season}</p> <!-- Include season in the card -->
      <button class="delete-btn" onclick="deleteClothing(this)">Delete</button><br>
       <a href="donate.html"><button class="add-btn" >Donate</button></a>

    `;

    // Ensure the category matches the updated grid IDs
    const gridId = category.replace(/\s+/g, '') + "Grid"; // Remove spaces and append "Grid"
    const gridElement = document.getElementById(gridId);

    if (gridElement) {
      gridElement.appendChild(itemCard);
    } else {
      console.error(`Grid with ID '${gridId}' not found.`);
    }

    closeUploadModal();
    clearForm();
  };
  reader.onerror = function () {
    alert("Failed to read the image file.");
  };
  reader.readAsDataURL(imageInput.files[0]);
}

function deleteClothing(button) {
  button.parentElement.remove();
}

function clearForm() {
  document.getElementById("clothingImage").value = "";
  document.getElementById("clothingName").value = "";
  const defaultCategory = "tops"; // Configurable default category
  document.getElementById("clothingCategory").value = defaultCategory;
}

function formatDate(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(
    2,
    "0"
  )}`;
}

function renderCalendar() {
  const calendarEl = document.getElementById("calendar");
  calendarEl.innerHTML = "";

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const numDays = lastDay.getDate();
  const startDay = firstDay.getDay();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  daysOfWeek.forEach((dayName) => {
    const header = document.createElement("div");
    header.textContent = dayName;
    header.className = "day-header";
    calendarEl.appendChild(header);
  });

  for (let i = 0; i < startDay; i++) {
    const empty = document.createElement("div");
    empty.className = "empty-day"; // Add class for empty days
    calendarEl.appendChild(empty);
  }

  for (let day = 1; day <= numDays; day++) {
    const dateStr = formatDate(year, month, day);
    const cell = document.createElement("div");
    cell.className = "day";
    cell.dataset.date = dateStr;

    const number = document.createElement("div");
    number.className = "day-number";
    number.textContent = day;
    cell.appendChild(number);

    if (outfits[dateStr]) {
      const outfitDiv = document.createElement("div");
      outfitDiv.className = "outfit";
      outfitDiv.textContent = outfits[dateStr];
      cell.appendChild(outfitDiv);
    }

    cell.addEventListener("click", () => {
      openOutfitModal(dateStr); // Replace prompt with modal
    });

    calendarEl.appendChild(cell);
  }
}

function openUploadModal() {
  document.getElementById("uploadModal").style.display = "block";
}

function closeUploadModal() {
  const modal = document.getElementById("uploadModal");
  if (modal) {
    modal.style.display = "none";
  }
}

function openOutfitModal(dateStr) {
  const outfit = outfits[dateStr] || "";
  const newOutfit = prompt(`Outfit for ${dateStr}:`, outfit); // Replace this with a custom modal
  if (newOutfit !== null) {
    outfits[dateStr] = newOutfit.trim();
    renderCalendar();
    renderOutfitList();
  }
}

function renderOutfitList() {
  renderList("outfitItems", outfits, deletePlannedOutfit);
}

function deletePlannedOutfit(date) {
  delete outfits[date];
  renderCalendar();
  renderOutfitList();
}

function addReminder() {
  const reminderText = document.getElementById("reminderText").value.trim();
  if (reminderText.length < 3) {
    // Validate input length
    alert("Reminder must be at least 3 characters long.");
    return;
  }
  reminders.push(reminderText);
  renderReminders();
  document.getElementById("reminderText").value = "";
}

function renderReminders() {
  renderList("reminderList", reminders, deleteReminder);
}

function deleteReminder(index) {
  reminders.splice(index, 1);
  renderReminders();
}

function renderList(elementId, data, deleteCallback) {
  const list = document.getElementById(elementId);
  list.innerHTML = "";

  if (Array.isArray(data)) {
    data.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `${item} <button class="delete-btn" onclick="(${deleteCallback.name})(${index})">Delete</button>`;
      list.appendChild(li);
    });
  } else {
    for (const [key, value] of Object.entries(data)) {
      const li = document.createElement("li");
      li.innerHTML = `${key}: ${value} <button class="delete-btn" onclick="(${deleteCallback.name})('${key}')">Delete</button>`;
      list.appendChild(li);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderCalendar();
  renderOutfitList();
  renderReminders();
});
