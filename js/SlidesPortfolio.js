// ------------------------------------------------- //
let slideIndex = {};

function showSlides(id,n) {
  // console.log("____________________****")
  // console.log(id)
  // console.log(n)
  
  let i;
  let slides = $(`#${id} .mySlides`);
  let dots = $(`#${id} .demo`); 
  if (n > slides.length) {
    slideIndex[`${id}`] = 1;
  }
  if (n < 1) {
    slideIndex[`${id}`] = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex[`${id}`] - 1].style.display = "flex";
  slides[slideIndex[`${id}`] - 1].style["justify-content"] = "center";
  slides[slideIndex[`${id}`] - 1].style["align-items"] = "center";
  dots[slideIndex[`${id}`] - 1].className += " active";
}

function plusSlides(id,n) {
  showSlides(id,(slideIndex[`${id}`] += n));
}
// Thumbnail image controls
function currentSlide(id,n) {
  showSlides(id,(slideIndex[`${id}`] = n));
}



function fetchImages() {
  let Local = true;

  $(".containerPort").each(function () {
    let id = $(this).attr("id");
    slideIndex[`${id}`] = 1;
    // console.log("ID " + id);

    let idattr = $(this).attr("attr-img");
    // console.log("idattr" + idattr);

    let url = "";

    if (Local) url = `http://${window.location.hostname}:3001/images/Cakes/${idattr}`;
    else
      url =
      `https://api.github.com/repos/ayoub198fillali/paulinagroupe/contents/images/Cakes/${idattr}`;

    let dataNumber;
    fetch(url)
      .then((response) => response.json())
      .then((images) => {
        // console.log("images")
        // console.log(images)
        // ------------------------------------------------- //
        let Code = "";
        images.forEach(function (element, idx) {
          let targetUrl = "";
          if (Local) targetUrl = `${url}/${element.name}`;
          else targetUrl = element.download_url;

          // console.log("targetUrl")
          // console.log(targetUrl)

          Code += `   <div class="mySlides">
                        <div class="numbertext">${idx + 1} / ${
            images.length
          }</div>
                        <img src="${targetUrl}">
                      </div>`;
        });

        Code += `  
              <!-- Next and previous buttons -->
                <a class="prev" onclick="plusSlides('${id}',-1)">&#10094;</a>
                <a class="next" onclick="plusSlides('${id}',1)">&#10095;</a>
        
                <!-- Image text -->
                <div class="caption-container">
                  <p class="caption">Paulina Groupe</p>
                </div>
                <div class="row">
                `;

        images.forEach(function (element, idx) {
          let targetUrl = "";
          if (Local) targetUrl = `${url}/${element.name}`;
          else targetUrl = element.download_url;

          Code += `  
                  <div class="column">
                    <img class="demo cursor" src="${targetUrl}" style="width:100%; height:100%" onclick="currentSlide('${id}',${
            idx + 1
          })" alt="${0}">
                  </div>
                `;
        });
        Code += ` </div>`;
        $(`#${id}`).html(`${Code}`);
      })
      .then(() => {
        // JS
        showSlides(id,slideIndex[`${id}`]);
      })
      .catch((error) => console.error(error));
  });

  //
}