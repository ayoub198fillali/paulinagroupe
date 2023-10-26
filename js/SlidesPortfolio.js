let slideIndex={};function showSlides(e,l){let s;var t=$(`#${e} .mySlides`),i=$(`#${e} .demo`);for(l>t.length&&(slideIndex[""+e]=1),l<1&&(slideIndex[""+e]=t.length),s=0;s<t.length;s++)t[s].style.display="none";for(s=0;s<i.length;s++)i[s].className=i[s].className.replace(" active","");t[slideIndex[""+e]-1].style.display="flex",t[slideIndex[""+e]-1].style["justify-content"]="center",t[slideIndex[""+e]-1].style["align-items"]="center",i[slideIndex[""+e]-1].className+=" active"}function plusSlides(e,l){showSlides(e,slideIndex[""+e]+=l)}function currentSlide(e,l){showSlides(e,slideIndex[""+e]=l)}function fetchImages(){$(".containerPort").each(function(){let n=$(this).attr("id");slideIndex[""+n]=1;var e=$(this).attr("attr-img");let a="";a=Local?`http://${window.location.hostname}:3001/images/Cakes/`+e:"https://api.github.com/repos/ayoub198fillali/paulinagroupe/contents/images/Cakes/"+e,fetch(a).then(e=>e.json()).then(t=>{let i="";t.forEach(function(e,l){let s="";s=Local?a+"/"+e.name:e.download_url,i+=`   <div class="mySlides">
                        <div class="numbertext">${l+1} / ${t.length}</div>
                        <img src="${s}">
                      </div>`}),i+=`  
              <!-- Next and previous buttons -->
                <a class="prev" onclick="plusSlides('${n}',-1)">&#10094;</a>
                <a class="next" onclick="plusSlides('${n}',1)">&#10095;</a>
        
                <!-- Image text -->
                <div class="caption-container">
                  <p class="caption">Paulina Groupe</p>
                </div>
                <div class="row">
                `,t.forEach(function(e,l){let s="";s=Local?a+"/"+e.name:e.download_url,i+=`  
                  <div class="column">
                    <img class="demo cursor" src="${s}" style="width:100%; height:100%" onclick="currentSlide('${n}',${l+1})" alt="0">
                  </div>
                `}),i+=" </div>",$("#"+n).html(""+i)}).then(()=>{showSlides(n,slideIndex[""+n])}).catch(e=>console.error(e))})}