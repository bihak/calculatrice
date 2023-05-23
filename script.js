
let rotat = document.getElementById("id_rotat")

rotat.addEventListener("click", Event => {

   let scientific = document.getElementById("id_Calculator_Scientific")
   let container = document.getElementById("id_container")
   let simple = document.getElementById("id_Calculator_simple")
   scientific.style.display = "none"
   simple.style.width = "100%"
   simple.style.marginRight = "15px"
   container.style.width = "25%"
   container.style.height = "400px"

})
