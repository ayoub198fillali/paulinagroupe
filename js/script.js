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




let commande = {}
let msgSend = ""
// Submit --------------------------------------------------------------
$("#ContactForm").on("submit", function (e) {
  e.preventDefault();

  msgSend = `<html> <head> <style> :root { --mainColor: #d5a70a; } .my-divider { display: flex; align-items: center; --my-divider-gap: 1rem; margin-bottom: 25px; margin-top: 20px; } .my-divider::before, .my-divider::after { content: ''; height: 1px; background-color: silver; flex-grow: 1; } .my-divider::before { margin-right: 20px; } .my-divider::after { margin-left: 20px; } .my-divider svg{ color: var(--mainColor); width: 20px; } p span{ font-style: italic; color:black; } </style> </head>`;

  // CMT console.log("Sended");
  
  $("#ContactForm").find(':input').each(function() {
    var field = $(this);
    if (field.is(":visible") && field.attr("name")) {
        if (field.is(":radio")) {
            if (field.is(":checked")) {
                commande[field.attr("name")] = field.val();
                // console.log("=> " + field.attr("name"));
                // console.log(field.val());
            }
        } else if (field.is(":checkbox")) {
            if (field.is(":checked")) {
                if (!commande[field.attr("name")])
                  commande[field.attr("name")] = []; // Initialize it as an empty array
                
                commande[field.attr("name")].push(field.val());
                // console.log("=> " + field.attr("name"));
                // console.log(field.val());
            }
        } else {
            commande[field.attr("name")] = field.val();
            // console.log("=> " + field.attr("name"));
            // console.log(field.val());
        }
    }
  });

  msgSend += `<body><h3 style="text-align: center; color: #d5a70a;  font-size: 18px;">Commande de ${commande["Nom :"]} ${commande["Prénom :"]}</span></h3>
  <p style=" font-size: 16px; color: black;">C'est : <span style="color: #d5a70a;">${commande["C'est :"]}</span></p>
  <p style=" font-size: 16px; color: black;">Le numéro de téléphone est : <span style="color: #d5a70a;">${commande["Téléphone :"]}</span></p>
  <p style=" font-size: 16px; color: black;">L'Email : <span style="color: #d5a70a;">${commande["Email :"]}</span></p>
  <p style=" font-size: 16px; color: black;">Fait le : <span style="color: #d5a70a;">${new Date().toLocaleString()}</span></p>
  <p style=" font-size: 16px; color: black;">C'est pour le : <span style="color: #d5a70a;">${commande["Date :"]}</span></p>
  <p style=" font-size: 16px; color: black;">Livraison : <span style="color: #d5a70a;">${$("#livraisonSelect").val()}</span></p>

  <p style=" font-size: 16px; color: black;">Allergies alimentaires : <span style="color: #d5a70a;">${commande["Allergies alimentaires :"]}</span></p>
  <p style=" font-size: 16px; color: black;">Il y a <span style="color: #d5a70a;">${commande["Commandes :"].length} Commandes :</span></p>
`

  commande["Commandes :"].forEach(cake => {
    // msgSend += `${myDivider}`
    msgSend += `<h3 style="text-align: center; color: #d5a70a;  font-size: 18px;" >Pour La commande: ${cake}</h3>`
    // msgSend += `${myDivider}`
    // console.log(`<h1>Pour La commande: ${cake}</h1>`)
    Object.keys(commande).forEach(title => {
      // console.log(cake + "  vs  " + title )
      if(title.includes(cake)){
        msgSend += `<p style=" font-size: 16px; color: black;">${title} <span style="color: #d5a70a;">${commande[title]}</span></p>`
        // console.log(`<p>${title}${commande[title]}</p>`)
      }
    });
  });
  msgSend += `</body></html>`
  msgSend = msgSend.replaceAll("\n","")

  // emailSenderv2.pythonanywhere.com
  // frayfi@g.com
  // https://www.pythonanywhere.com/user/emailSenderv2/files/home/emailSenderv2/API/emailsender.py?edit
  // Define the API endpoint URL
  var api_url = "https://emailsenderv2.pythonanywhere.com/send-email";  // Replace with the actual URL of your Flask API endpoint

  // Define the email data
  var email_data = {
      "recipient_email": "PaulinaGroupe2023",
      "body": msgSend
  };

  // Send a POST request to the API using jQuery
  $.ajax({
      url: api_url,
      method: "POST",
      data: email_data,
      success: function (data, textStatus, jqXHR) {
          console.log(data);
          console.log(jqXHR.status);
          if (jqXHR.status === 200) {
            myNotif("success", "E-mail envoyé avec succès", 2000);
          } else {
            myNotif("error", "Échec de l'envoi de l'e-mail. Code d'état : " + jqXHR.status + errorThrown, 2000);
          }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("error"+errorThrown);
        myNotif("error", "Erreur de requête : " + errorThrown, 2000);

      }
  });

  $("#ContactForm")[0].reset();
  // Create a new Date object
  var currentDate = new Date();
  // Get the components of the date (year, month, day)
  var year = currentDate.getFullYear();
  var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
  var day = ('0' + currentDate.getDate()).slice(-2);
  // Set the value of the #dateInput element
  $("#dateInput").val(year + '-' + month + '-' + day);
});
