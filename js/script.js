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

$("#darkmode").on("click", function (e) {
  e.preventDefault();

  if(!$("#darkmodestyle").html().length){
    $("#darkmodestyle").html(`
      html { background-color: rgb(12, 12, 12) !important; } header{ background-color: #121212 !important; } .swal2-popup.swal2-toast{ color: whitesmoke !important; background-color: #121212 !important; } .footer,.home{ background: #282828 !important; } .order form, .cakes:nth-child(even) { background: #121212 !important; } .order form{ color: white; } .cakes:nth-child(odd) { background: black !important; } header .logo{ color: var(--secondColor) !important; } header .icons i, header .icons a, .home .home-slider .slide .content h3{ color: var(--secondColor) !important; } header .icons i, header .icons a, .about .icons{ background: #282828 !important; } header .navbar a,.home .home-slider .slide .content p{ color: #c1c1c1 !important; } .heading, .about .row .content h3, .about .icons span{ color: var(--secondColor) !important; } .about .row .content p{ color: #c1c1c1 !important; } .cakesDescription{ color: white !important; } .widget-container2 h2, .elementor-icon-list-text,.prev, .next,.tarifsMin{ color: var(--secondColor) !important; } .tarifsLeftRight .tarifsLeft{ color: #c1c1c1 !important; } .tarifsLeftRight .tarifsRight{ color: white !important; } .order form .input span{ color: #c1c1c1  !important; } .order form .inputBox .input input, .order form .inputBox .input textarea, .order form .inputBox .input select,input[type="checkbox"],input[type="radio"]{ color: var(--secondColor) !important; background: #282828 !important; accent-color: var(--secondColor) !important; color-scheme: dark !important; } .footer .box-container .box h3{ color: var(--secondColor) !important; } .footer .box-container .box a{ color: #c1c1c1  !important; } .footer .credit{ color: var(--secondColor) !important; }
    `)
    $("#darkmode").toggleClass("fa-moon");
    $("#darkmode").toggleClass("fa-sun");
    myNotif("info",`<p style="text-align:justify; font-size:15px" >Mode sombre activé !</p>`,1000);
  }
  else{
    $("#darkmodestyle").html("")
    $("#darkmode").toggleClass("fa-moon");
    $("#darkmode").toggleClass("fa-sun");
    myNotif("info",`<p style="text-align:justify; font-size:15px" >Mode sombre désactivé !</p>`,1000);
  }

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


// emailSenderv2.pythonanywhere.com
// frayfi@g.com


// Submit --------------------------------------------------------------
$("#ContactForm").on("submit", function (e) {
  e.preventDefault();
  // CMT console.log("Sended");
  // let myCommand = [];
  // $(".item-label").each(function () {
  //   myCommand.push($(this).html());
  // });


  // console.log(myCommand.join(", "));
  // https://mailtrap.io/blog/javascript-send-email/
  // $.getJSON("https://api.ipify.org?formawwt=json", function (data) {
  //   emailjs.init("KAe5kfyvpRuOXbuIwwww"); //please encrypted user id for malicious attacks
  //   // https://dashboard.emailjs.com/admin/templates/tvk9clb
  //   let templateParams = {
  //     from_name: $("#formeNom").val(),
  //     commande: myCommand.join(", "),
  //     from_num: $("#formeNumber").val(),
  //     nbcommande: $("#formeCombien").val(),
  //     msg: $("#formeMessage").val(),
  //   };

  //   // console.log(templateParams);

  //   emailjs.send("service_zhki1yu", "template_wxi2e5g", templateParams).then(
  //     function () {
  //       myNotif("success", "Message envoyé", 1000);
  //       $("#ContactForm")[0].reset();
  //     },
  //     function () {
  //       myNotif("error", "Message non envoyé...", 1000);
  //     }
  //   );
  // });
});
