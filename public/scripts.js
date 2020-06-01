$(function () {
    $('.toggle').popover({
      container: 'body' 
    })
  })

//   $(function () {
//     $('[data-toggle="popover"]').popover()
//   })

// var dateControl = document.querySelector('input[type="date"]');
// dateControl = toDateString(dateControl.value);
// dateControl.value = 'yyyy-MM-dd';
// console.log(dateControl.value)

// function getFormattedDate(date) {
// const today = new Date();
// const year = today.getFullYear90;
// let month = today.getMonth() + 1;
// let day = today.getDay();

// if (month <10) {
//   month = '0' + month;
// }

// if (day <10) {
//   day = '0' + day;
// }

// return `${year}-${month}-${day}`;
// }

function getFormattedDate(date) {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDay();
  if (month < 10) {
    month = '0' + month;
  };
  if (day < 10) {
    day = '0' + day;
  }
  return `${year}-${month}-${day}`;
}