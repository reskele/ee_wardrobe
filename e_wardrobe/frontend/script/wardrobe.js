const outfits = {}; const reminders = [];


function showSection(sectionId) {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.remove("active");
    });
  
    const target = document.getElementById(sectionId);
    if (target) {
      target.classList.add("active");
    }
  }
  

// function showSection(sectionId) { document.querySelectorAll('section').forEach(sec => sec.classList.remove('active')); document.getElementById(sectionId).classList.add('active'); }

function openUploadModal() { document.getElementById('uploadModal').style.display = 'flex'; }

function closeUploadModal() { document.getElementById('uploadModal').style.display = 'none'; }

function addClothing() {
    const name = document.getElementById('clothingName').value.trim(); const category = document.getElementById('clothingCategory').value; const imageInput = document.getElementById('clothingImage');

    if (!name || !imageInput.files.length) { alert('Please provide both name and image.'); return; }

    const reader = new FileReader(); reader.onload = function (e) {
        const imgSrc = e.target.result; const itemCard = document.createElement('div'); itemCard.className = 'clothing-item'; itemCard.innerHTML = <img src="${imgSrc}" alt="${name}" /><p>${name}</p>;

        document.getElementById(${ category }Grid).appendChild(itemCard);
        closeUploadModal();
        clearForm();

    }; reader.readAsDataURL(imageInput.files[0]);
}

function clearForm() { document.getElementById('clothingImage').value = ''; document.getElementById('clothingName').value = ''; document.getElementById('clothingCategory').value = 'tops'; }

function formatDate(year, month, day) { return ${ year } -${ String(month + 1).padStart(2, '0') } -${ String(day).padStart(2, '0') }; }

function renderCalendar() {
    const calendarEl = document.getElementById('calendar'); calendarEl.innerHTML = '';

    const today = new Date(); const year = today.getFullYear(); const month = today.getMonth(); const firstDay = new Date(year, month, 1); const lastDay = new Date(year, month + 1, 0); const numDays = lastDay.getDate(); const startDay = firstDay.getDay();

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; daysOfWeek.forEach(dayName => { const header = document.createElement('div'); header.textContent = dayName; header.className = 'day-header'; calendarEl.appendChild(header); });

    for (let i = 0; i < startDay; i++) { const empty = document.createElement('div'); calendarEl.appendChild(empty); }

    for (let day = 1; day <= numDays; day++) {
        const dateStr = formatDate(year, month, day); const cell = document.createElement('div'); cell.className = 'day'; cell.dataset.date = dateStr;

        const number = document.createElement('div');
        number.className = 'day-number';
        number.textContent = day;
        cell.appendChild(number);

        if (outfits[dateStr]) {
            const outfitDiv = document.createElement('div');
            outfitDiv.className = 'outfit';
            outfitDiv.textContent = outfits[dateStr];
            cell.appendChild(outfitDiv);
        }

        cell.addEventListener('click', () => {
            const outfit = prompt(Outfit for ${ dateStr }:, outfits[dateStr] || '');
        if (outfit !== null) {
            outfits[dateStr] = outfit.trim();
            renderCalendar();
            renderOutfitList();
        }
    });

    calendarEl.appendChild(cell);

} }

function renderOutfitList() { const list = document.getElementById('outfitItems'); list.innerHTML = ''; for (const [date, outfit] of Object.entries(outfits)) { const li = document.createElement('li'); li.textContent = ${ date }: ${ outfit }; list.appendChild(li); } }

document.addEventListener('DOMContentLoaded', () => { renderCalendar(); renderOutfitList(); });