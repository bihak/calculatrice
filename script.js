
// clic du bouton
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

// DISPLAY
function display(val){
    document.getElementById('id_input_write').value += val;
    return val;
    }
    // DELETE
function clean(){
    document.getElementById('id_input_write').value = '';
    document.getElementById('id_input_result').value = '';
}
    // EQUAL
function equal(){
    let x = document.getElementById('id_input_write').value;
    let y = eval(x); // envoie une valeur d'achevement
    document.getElementById('id_input_result').value = y;
    return y;
}

    // RACINE CARRE
function square_root() {
   let x = document.getElementById('id_input_write').value;
   let y = Math.sqrt(x)
   document.getElementById('id_input_result').value = y;
}

    // COS
function cos() {
    let x = document.getElementById('id_input_write').value;
    let y = Math.cos(x)
    document.getElementById('id_input_result').value = y;
}
    // SIN
    function sin() {
        let x = document.getElementById('id_input_write').value;
        let y = Math.sin(x)
        document.getElementById('id_input_result').value = y;
    }
    // TAN
function tan() {
    let x = document.getElementById('id_input_write').value;
    let y = Math.tan(x)
    document.getElementById('id_input_result').value = y;
}
    // EXP
function exp() {
    let x = document.getElementById('id_input_write').value;
    let y = Math.exp(x)
    document.getElementById('id_input_result').value = y;
    }
    // ABSOLUTE
function absolute() {
    let x = document.getElementById('id_input_write').value;
    let y = Math.abs(x)
    document.getElementById('id_input_result').value = y;
}

    // CARRE
function carre() {
    let x = document.getElementById('id_input_write').value;
    let y = (x*x)
    document.getElementById('id_input_result').value = y;
    }
    // POWER
function power() {
    let x = document.getElementById('id_input_write').value (x);
    let y = document.getElementById('id_input_write').value (y);
    let z = Math.pow(x,y);
    document.getElementById('id_input_result').value = z;
    }

// PARENTHESIS
var i = 0;
function parenthesis(){
    let z = document.getElementById('id_input_write');
    if(i == 0){
        z.value += '(';

        i = 1;
    }else{
        z.value += ')';
        i = 0;
    }
}

// EQUAL
function equal(){
    let x = document.getElementById('id_input_write').value;
    let y = eval(x); // envoie une valeur d'achevement
    document.getElementById('id_input_result').value = y;
    return y;
}

// DELETE
function clean(){
    document.getElementById('id_input_write').value = '';
    document.getElementById('id_input_result').value = '';
}

// SPACE
function Back(){
    let space = document.getElementById('id_input_write');
    let resultat = space.value;
    if(resultat.length > 0){
        resultat = resultat.substring(0, resultat.length-1); // BACK TO THE LAST CHARACTER
        space.value = resultat;
    }
}


