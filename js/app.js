var btnContainer = document.getElementById("navbar");
var btns = document.getElementsByClassName("btn");

for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    })
}

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', () =>{
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove('show-text');
            }
        })

        question.classList.toggle('show-text');
    })
})

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

