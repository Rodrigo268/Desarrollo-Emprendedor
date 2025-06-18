document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'es', // idioma español
    events: [
      {
        title: 'Consulta Veterinaria',
        start: '2025-06-05'
      },
      {
        title: 'Vacuna',
        start: '2025-07-25'
      }
    ]
  });

  calendar.render();
});
