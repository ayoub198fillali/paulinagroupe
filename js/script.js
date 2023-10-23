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
    3000
  );
});


$("#darkmode").on("click", function (e) {
  e.preventDefault();

  if(!$("#darkmodestyle").html().length){
    $.cookie('mode', 'dark');
    theme("dark")
  }
  else{
    $.cookie('mode', 'light');
    theme("light")
  }

});

function theme(mode){
  if (mode == "dark"){
    $("#darkmodestyle").html(`
    @media (max-width:450px){header .navbar{background:#121212!important}header .navbar a{color:var(--light-color);background-color:#282828}header .navbar a.active{color:var(--mainColor)!important;background-color:#121212}}html{background-color:#0c0c0c!important}.swal2-popup.swal2-toast,header{background-color:#121212!important}.swal2-popup.swal2-toast{color:#f5f5f5!important}.about .icons,.footer,.home,header .icons a,header .icons i{background:#282828!important}.cakes:nth-child(2n),.order form{background:#121212!important}.order form{color:#fff}.cakes:nth-child(odd){background:#000!important}.about .icons span,.about .row .content h3,.elementor-icon-list-text,.footer .box-container .box h3,.footer .credit,.heading,.home .home-slider .slide .content h3,.next,.prev,.tarifsMin,.widget-container2 h2,header .icons a,header .icons i,header .logo{color:var(--secondColor)!important}.about .row .content p,.footer .box-container .box a,.home .home-slider .slide .content p,.order form .input span,.tarifsLeftRight .tarifsLeft,header .navbar a{color:#c1c1c1!important}.cakesDescription,.tarifsLeftRight .tarifsRight{color:#fff!important}.order form .inputBox .input input,.order form .inputBox .input select,.order form .inputBox .input textarea,input[type=checkbox],input[type=radio]{color:var(--secondColor)!important;background:#282828!important;accent-color:var(--secondColor)!important;color-scheme:dark!important}    `)
    $("#darkmode").addClass("fa-moon");
    $("#darkmode").removeClass("fa-sun");
    myNotif("info",`<p style="text-align:justify; font-size:15px" >Mode sombre activé !</p>`,1000);
  }else{
    $("#darkmodestyle").html("")
    $("#darkmode").removeClass("fa-moon");
    $("#darkmode").addClass("fa-sun");
    myNotif("info",`<p style="text-align:justify; font-size:15px" >Mode sombre désactivé !</p>`,1000);
  }
}


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

  myNotif("error", "Pas Encore...", 1000);
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
