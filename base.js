//filters
function filterf(buttons,items){
const filters=document.querySelectorAll(buttons)
const servbox=document.querySelectorAll(items)
filters.forEach(function(button) {
    button.addEventListener("click", function() {
        for(ff of servbox){
            ff.classList.remove('active')
            ff.classList.add('not-active')
        };
        for (let c of filters){
            
            //var idk=c.getAttribute("filter")
                if (c!=button){
                    c.classList.remove('active')
                    c.classList.add('not-active')
                    
                    
                }
                
                else{
                    c.classList.remove('not-active')
                    c.classList.add('active')
                    console.log(c.getAttribute("filter"))
                    //console.log('filter['+c.getAttribute("filter")+']')
                    const ddd=document.querySelectorAll(items+"[filter="+c.getAttribute("filter")+"]")
                    console.log(ddd)
                    for (let el of ddd){
                        console.log(el)
                        el.classList.remove('not-active')
                        el.classList.add('active')
                    };
                };
            };
        if (button.getAttribute('filter')=="all"){
            button.classList.remove('not-active')
            button.classList.add('active')
            const ddd=document.querySelectorAll(".service-box")
                for (let el of ddd){
                    console.log(el)
                    el.classList.remove('not-active')
                    el.classList.add('active')
                };
        }
    });
  });
}



function cursor(){
  var cursor = document.getElementById("cursor");
  document.body.addEventListener("mousemove", function(e) {
    cursor.style.left = e.clientX + "px",
      cursor.style.top = e.clientY + "px";
  });
}



function to_cred(sel,idd){
  const to_cred=document.querySelectorAll(sel)
  to_cred.forEach(function(button) {
      button.addEventListener("click", function() {
        document.getElementById(idd).scrollIntoView();
      });
    });
}

function langsw(){
    console.log("it's empty here")
}



filterf('.filter-bar > button',".service-box");
cursor();
to_cred(".iwant","creds");