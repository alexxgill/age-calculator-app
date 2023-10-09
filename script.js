const daySelect = document.getElementById("day");
const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");

let month = 0;
let day = 0;

let years = 0;
let months = 0;
let days = 0;

for (a = 1; a <= 31; a++) {
  var dayOption = document.createElement("option");
  day++;
  dayOption.value = day;
  dayOption.append(day);
  daySelect.appendChild(dayOption);
}

console.log(daySelect.childNodes);
console.log(daySelect.childElementCount);

for (a = 1; a <= 12; a++) {
  var monthOption = document.createElement("option");
  month++;
  monthOption.value = month;
  monthOption.append(month);
  monthSelect.appendChild(monthOption);
}

let year = 1900;

for (a = 1900; a < 2022; a++) {
  var yearOption = document.createElement("option");
  year++;
  yearOption.value = year;
  yearOption.append(year);
  yearSelect.appendChild(yearOption);
  
}

function bissesto(nowDay) {
  
  if(daySelect.value>29) daySelect.value = 1;
  switch (daySelect.childElementCount) {
    case 31:
        daySelect.childNodes[30].remove();
        daySelect.childNodes[29].remove();
      break;
    case 30:
      daySelect.childNodes[29].remove();
      break;
    case 28:
      var dayOption = document.createElement("option");
      dayOption.value = 29;
      dayOption.append(29);
      daySelect.appendChild(dayOption);
      break;
  }
  if (daySelect.value > nowDay) {
    months--;
    if(monthSelect.value == nowMonth){
      years--;
      months = months + 12;
    }
    nowDay = nowDay + 29;
    days = nowDay - daySelect.value;
  }
  else {
    days = nowDay - daySelect.value;
  }
}

calculateAge();

function calculateAge() {
  let day = 0;
  let nowDay = new Date().getDate();
  let nowMonth = new Date().getMonth();
  nowMonth++;
  let nowYear = new Date().getFullYear();


  years = nowYear - yearSelect.value;


  if (monthSelect.value > nowMonth) {
    years--;
    nowMonth = nowMonth + 12;
    months = nowMonth - monthSelect.value;
  }
  else {
    months = nowMonth - monthSelect.value;
  }

  if (monthSelect.value == 4 || monthSelect.value == 6 || monthSelect.value == 9 || monthSelect.value == 11) {

    if(daySelect.value>30) daySelect.value = 1;
    switch (daySelect.childElementCount) {
      case 31:
        console.log(daySelect.childNodes[30]);
        daySelect.childNodes[30].remove();
        break;
      case 29:
        var dayOption = document.createElement("option");
        dayOption.value = 30;
        dayOption.append(30);
        daySelect.appendChild(dayOption);
        break;
      case 28:
        for (a = 29; a <= 30; a++) {

          console.log(a);
          var dayOption = document.createElement("option");
          dayOption.value = a;
          dayOption.append(a);
          daySelect.appendChild(dayOption);
        }
        break;
    }

    if (daySelect.value > nowDay) {
      months--;
      if(monthSelect.value == nowMonth){
        years--;
        months = months + 12;
      }
      nowDay = nowDay + 30;
      days = nowDay - daySelect.value;
    }
    else {
      days = nowDay - daySelect.value;
    }
  }





  else if (monthSelect.value == 1 || monthSelect.value == 3 || monthSelect.value == 5 || monthSelect.value == 7
    || monthSelect.value == 8 || monthSelect.value == 10 || monthSelect.value == 12) {
    switch (daySelect.childElementCount) {
      case 30:
        var dayOption = document.createElement("option");
        dayOption.value = 31;
        dayOption.append(31);
        daySelect.appendChild(dayOption);
        break;
      case 29:
        for (a = 30; a <= 31; a++) {
          var dayOption = document.createElement("option");
          dayOption.value = a;
          dayOption.append(a);
          daySelect.appendChild(dayOption);
        }
        break;
      case 28:
        for (a = 29; a <= 31; a++) {
          var dayOption = document.createElement("option");
          dayOption.value = a;
          dayOption.append(a);
          daySelect.appendChild(dayOption);
        }
        break;
    }
    if (daySelect.value > nowDay) {
      months--;
      if(monthSelect.value == nowMonth){
        years--;
        months = months + 12;
      }
      nowDay = nowDay + 31;
      days = nowDay - daySelect.value;
    }
    else {
      days = nowDay - daySelect.value;
    }
  }

  else {
    if (yearSelect.value % 4 == 0) {
      if (yearSelect.value % 100 == 0) {
        if (yearSelect.value & 400 == 0) {
          bissesto(nowDay);
          console.log("bissesto");
        }
      }
      else {
        bissesto(nowDay);
        console.log("bissesto");
      }
    }


    else {
      if(daySelect.value>28) daySelect.value = 1;
      switch (daySelect.childElementCount) {
        case 31:
          for (a = 30; a >= 28; a--) {
            daySelect.childNodes[a].remove();
          }
          break;
        case 30:
          for (a = 29; a >= 28; a--) {
            daySelect.childNodes[a].remove();
          }
          break;
        case 29:
          daySelect.childNodes[28].remove();
          break;
      }

      if (daySelect.value > nowDay) {
        months--;
        if(monthSelect.value == nowMonth){
          years--;
          months = months + 12;
        }
        nowDay = nowDay + 28;
        days = nowDay - daySelect.value;
      }
      else {
        days = nowDay - daySelect.value;
      }

    }

  }

  if (daySelect.value > nowDay) {
    months--;
    if(monthSelect.value == nowMonth){
      years--;
      months = months + 12;
    }
    nowDay = nowDay + 30;
    days = nowDay - daySelect.value;
  }
  else {
    days = nowDay - daySelect.value;
  }

  document.getElementById("years").textContent = "Years: " + years;
  document.getElementById("months").textContent = "Months: " + months;
  document.getElementById("days").textContent = "Days: " + days;

}