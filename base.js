//filters
const filters=document.querySelectorAll('.filter-bar > button')
const servbox=document.querySelectorAll(".service-box")
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
                    const ddd=document.querySelectorAll(".service-box[filter="+c.getAttribute("filter")+"]")
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


  var cursor = document.getElementById("cursor");
  document.body.addEventListener("mousemove", function(e) {
    cursor.style.left = e.clientX + "px",
      cursor.style.top = e.clientY + "px";
  });

  const to_cred=document.querySelectorAll(".iwant")
  to_cred.forEach(function(button) {
      button.addEventListener("click", function() {
        document.getElementById("creds").scrollIntoView();
      });
    });