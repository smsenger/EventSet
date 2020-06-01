// $(function () {
//     $('.toggle').popover({
//       container: 'body' 
//     })
//   })

// //   $(function () {
// //     $('[data-toggle="popover"]').popover()
// //   })

$(document).ready(function () {
  $("#formButton").click(function () {
    $("#card-form1").toggle();
  });
});

$(document).ready(function () {
  $("#formButton2").click(function () {
    $("#card-form1").toggle();
  });
});

$(document).ready(function () {
  $("#formButton3").click(function () {
    $("#card-form2").toggle();
  });
});

function showForm(id) {
  // console.log(id)
  $(`#contact-form${id}`).toggle();
  $(`#contact-card${id}`).toggle();
};