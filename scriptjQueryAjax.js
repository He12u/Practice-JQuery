// const baseUrl = 'http://localhost:3000';

// function fetchData() { //function tidak akan jalan jika tidak dipanggil
//   $.ajax({
//     url: baseUrl+'/endpoint',
//     method: 'get',
//     headers: {
//       access_token: localStorage.access_token
//     }
//   })
//   .done((response) => {
// $('#content').empty()
//     console.log(response);
// response.forEach(el => {
//   const temp = `
//   <tr>
//   <td>${el.a}</td>
//   <td>${el.b}</td>
//   <td>${el.c}</td>
// </tr>
//   `
// });

// $('#content').append(temp)
//   })
//   .fail((err) => {
//     console.log(err);
//   })
// }

//! SAFETY MANIPULATION
$(document).ready(() => {
  /*
        DOM Manipulation
        .hide() => menghilangkan sesuatu display = node << masih terlihat di element browser
        .show() => menampilkan kebalikan hide
        .val() => untuk mengambil value dari tag input
        .append() => push sesuatu dalam tag html
        featuring 
        .empty() => remove namun lebih dari hide
        VS
        .html() => untuk replace
  
        EVENT HANDLER
        - click
        - submit
        */

  // kita bisa menuliskan javascript seperti biasa

  // CONTOH PENGGUNAAN JQuery
  // $("h1").hide(); // hide semua h1
  $("#contoh1").hide(); // spesifik hide id contoh1
  $(".contoh2").hide(); // spesifik hide class contoh2

  $("#button-example").click(() => {
    // console.log("aku terklik kawan");
    $("#contoh1").show();
  });

  $("#button-2").click(() => {
    const text = $("#contoh-input").val();
    console.log(text);
  });

  $("#button-3").click(() => {
    // $(".content").empty(); // pasangan append agar push tidak menumpuk
    $(".content").append("<p><b>push sesuatu dengan append</b></p>");
  });

  $("#button-4").click(() => {
    $(".content").html("<p><b>replace dengan sesuatu</b></p>");
  });
});
