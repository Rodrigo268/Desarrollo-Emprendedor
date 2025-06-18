const monthYear = document.getElementById('month-year');
const calendarDays = document.getElementById('calendar-days');
const prevBtn = document.getElementById('prev-month');
const nextBtn = document.getElementById('next-month');

const events = [
  { date: '2025-06-05', text: 'Revisión' },
  { date: '2025-07-21', text: 'Vacuna' },
  { date: '2025-08-23', text: 'Vacuna' }
];



let currentDate = new Date();

function renderCalendar(date) {
  calendarDays.innerHTML = '';

  const year = date.getFullYear();
  const month = date.getMonth();

  const options = { month: 'long', year: 'numeric' };
  monthYear.textContent = date.toLocaleDateString('es-ES', options);

  const firstDay = new Date(year, month, 1);
  let startDay = firstDay.getDay() - 1;
  if (startDay < 0) startDay = 6;

  const lastDay = new Date(year, month + 1, 0).getDate();

  // Espacios vacíos para empezar en el día correcto
  for (let day = 1; day <= lastDay; day++) {
  const dayDiv = document.createElement('div');
  dayDiv.textContent = day;

  // Fecha completa en formato yyyy-mm-dd para comparar con eventos
  const fullDate = new Date(year, month, day);
  const fullDateStr = fullDate.toISOString().split('T')[0];

  // Buscar evento para ese día
  const event = events.find(e => e.date === fullDateStr);

  if (event) {
    dayDiv.classList.add('event-day');  // Clase para días con evento

    const eventText = document.createElement('p');
    eventText.textContent = event.text;
    eventText.style.fontSize = '10px';
    eventText.style.marginTop = '4px';
    eventText.style.color = '#555';

    dayDiv.appendChild(eventText);
  }

  const today = new Date();
  if (
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear()
  ) {
    dayDiv.classList.add('today'); // Clase para el día actual
  }

  calendarDays.appendChild(dayDiv);
}
}

prevBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);
