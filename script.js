let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let display_month_year = document.getElementById('display_month_year');
let date_today = document.getElementById('date_today');

display_month_year.textContent =  `${monthNames[month]} ${year}`;
date_today.textContent = `Today is ${days[day]}, ${monthNames[month].substring(0, 3)} ${date.getDate()}`;

// Render the calander

const render_calander = (year, month) => {
  let start = (new Date(year, month)).getDay();
  let numDays = 32 - new Date(year, month, 32).getDate();
  let num = 1;

  let tablebody = document.getElementById('table_body');

  for (i=0; i<6; i++) {
    let row = document.createElement('tr');
    for (j=0; j<7; j++) {
      if (num < start + 1) {
        let td = document.createElement('td');
        td.style.backgroundColor = 'white';
        row.append(td);
        num++;
      } else if (num <= numDays + start){
        let td = document.createElement('td');
        td.classList.add('modal');
        td.textContent = num - start;
        row.append(td);
        num++;
      }
    }
    tablebody.append(row);
  }
}

render_calander(year, month);

// Add event function

document.querySelectorAll('.modal').forEach(item => {
  item.addEventListener('click', event => {
    prompt("Add Event");
  });
})
