
//Toggle functionality for contacts page
$(document).ready(function () {
  $("#formButton").click(function () {
    $("#card-form1").toggle();
  });
});

function showForm(id) {
  // console.log(id)
  $(`#contact-form${id}`).toggle();
  $(`#contact-card${id}`).toggle();
};

//Toggle functionality for add event on events page
$(document).ready(function () {
  $("#eventButton").click(function () {
    $("#event-form1").toggle();
  });
});

//Toggle functionality for event and update event cards
function showEvent(id) {
  $(`#event-form${id}`).toggle();
  $(`#event-card${id}`).toggle();
};

function showUser() {
  $(`#user-form`).toggle();
  $(`#user-card`).toggle();
};