// Config //
let debug = false;


function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 100);
}

window.onload = fadeOut;

//Noifier Sweet
function myNotif(type, msg, time = 1000) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: time,
    timerProgressBar: true,
    customClass: "swal-wide",
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: type,
    title: msg,
  });
}


$("#favorite-pack").on("click", function (e) {
  e.preventDefault();
  myNotif(
    "info",
    `<p style="text-align:justify; font-size:15px" >Cliquez sur le bouton de signet du navigateur ou appuyez sur <kbd>Ctrl + D</kbd> (Windows) ou <kbd>Cmd + D</kbd> (Mac) pour ajouter ce site à vos favoris.</p>`,
    5000
  );
});





// Maybe Nkhdmha f Commander au lieu de tarifs
// addCommandListner
// function addCommandListner() {
//   $(".btnCommander")
//     .off("click")
//     .on("click", function () {
//       $(`li[data-value='${$(this).attr("titre").trim()}']`).click();
//       $(".btn-container").click();
//     });
// }



// Submit --------------------------------------------------------------
$("#ContactForm").on("submit", function (e) {
  e.preventDefault();
  // CMT console.log("Sended");
  let myCommand = [];
  $(".item-label").each(function () {
    myCommand.push($(this).html());
  });
  // console.log(myCommand.join(", "));
  // https://mailtrap.io/blog/javascript-send-email/
  $.getJSON("https://api.ipify.org?formawwt=json", function (data) {
    emailjs.init("KAe5kfyvpRuOXbuIwwww"); //please encrypted user id for malicious attacks
    // https://dashboard.emailjs.com/admin/templates/tvk9clb
    let templateParams = {
      from_name: $("#formeNom").val(),
      commande: myCommand.join(", "),
      from_num: $("#formeNumber").val(),
      nbcommande: $("#formeCombien").val(),
      msg: $("#formeMessage").val(),
    };

    // console.log(templateParams);

    emailjs.send("service_zhki1yu", "template_wxi2e5g", templateParams).then(
      function () {
        myNotif("success", "Message envoyé", 1000);
        $("#ContactForm")[0].reset();
      },
      function () {
        myNotif("error", "Message non envoyé...", 1000);
      }
    );
  });
});
