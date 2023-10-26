let slideIndex={};function showSlides(e,s){let t;var l=$(`#${e} .mySlides`),i=$(`#${e} .demo`);for(s>l.length&&(slideIndex[""+e]=1),s<1&&(slideIndex[""+e]=l.length),t=0;t<l.length;t++)l[t].style.display="none";for(t=0;t<i.length;t++)i[t].className=i[t].className.replace(" active","");l[slideIndex[""+e]-1].style.display="flex",l[slideIndex[""+e]-1].style["justify-content"]="center",l[slideIndex[""+e]-1].style["align-items"]="center",i[slideIndex[""+e]-1].className+=" active"}function plusSlides(e,s){showSlides(e,slideIndex[""+e]+=s)}function currentSlide(e,s){showSlides(e,slideIndex[""+e]=s)}function fetchImages(){$(".containerPort").each(function(){let n=$(this).attr("id");slideIndex[""+n]=1;var e=$(this).attr("attr-img");let d="";d=`http://${window.location.hostname}:3001/images/Cakes/`+e,fetch(d).then(e=>e.json()).then(l=>{let i="";l.forEach(function(e,s){let t="";t=d+"/"+e.name,i+=`   <div class="mySlides">
                        <div class="numbertext">${s+1} / ${l.length}</div>
                        <img src="${t}">
                      </div>`}),i+=`  
              <!-- Next and previous buttons -->
                <a class="prev" onclick="plusSlides('${n}',-1)">&#10094;</a>
                <a class="next" onclick="plusSlides('${n}',1)">&#10095;</a>
        
                <!-- Image text -->
                <div class="caption-container">
                  <p class="caption">Paulina Groupe</p>
                </div>
                <div class="row">
                `,l.forEach(function(e,s){let t="";t=d+"/"+e.name,i+=`  
                  <div class="column">
                    <img class="demo cursor" src="${t}" style="width:100%; height:100%" onclick="currentSlide('${n}',${s+1})" alt="0">
                  </div>
                `}),i+=" </div>",$("#"+n).html(""+i)}).then(()=>{showSlides(n,slideIndex[""+n])}).catch(e=>console.error(e))})}