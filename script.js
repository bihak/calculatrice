
let rotat = document.getElementById("id_rotat")
let scientific = document.getElementById("id_Calculator_Scientific")
let container = document.getElementById("id_container")
let simple = document.getElementById("id_Calculator_simple")

rotat.addEventListener("click", Event => {

    if (scientific.style.display != "none") {
        scientific.style.display = "none"
        simple.style.width = "100%"
        simple.style.marginRight = "15px"
        container.style.width = "25%"
        container.style.height = "400px"
    }else{
        scientific.style.display = "block"
        simple.style.width = "55%"
        container.style.width = "50%"
        container.style.height = "370px"
    }
    

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
// recuperer chaine 
function recup() {
    let tabnomber = []
    let taboperateur = []
    let input_write = document.getElementById('id_input_write');
    let resultat = input_write.value
    let res = resultat.split(/[+\-\/\*]/)
    for (let j = 0 ; j < resultat.length ; j++){
        let caractere = resultat.charAt(j)
        if (caractere === "+" || caractere === "/" ||caractere === "-" || caractere === "*") {
            taboperateur.push(caractere)
        }
    }
    for (let i = 0 ; i < res.length ; i++){
        tabnomber.push(res[i])
    }
    sin(tabnomber,taboperateur)
}
    // EQUAL
function equal(){
    let x = document.getElementById('id_input_write').value;
    let y = eval(x); // envoie une valeur d'achevement
    document.getElementById('id_input_result').value = y;
    return y;
}
    // COS
function cos() {
    let x = document.getElementById('id_input_write').value;
    let y = Math.cos(x)
    document.getElementById('id_input_result').value = y;
}
    // SIN
    function sin(tabnomber,taboperateur) {
        console.log("tab1 les nombre ::" + tabnomber)
        console.log("tab 2 les ope ::" + taboperateur)
        let y = Math.sin()
        console.log("sin ::" + y)
    }
        // TAN
function tan() {
    let x = document.getElementById('id_input_write').value;
    let y = Math.tan(x)
    document.getElementById('id_input_result').value = y;
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
// SPACE
function Back(){
    let space = document.getElementById('id_input_write');
    let resultat = space.value;
    if(resultat.length > 0){
        resultat = resultat.substring(0, resultat.length-1); // BACK TO THE LAST CHARACTER
        space.value = resultat;
    }
}
// recuperer chaine 
function recup() {
    let tabnomber = []
    let taboperateur = []
    let input_write = document.getElementById('id_input_write');
    let resultat = input_write.value
    let res = resultat.split(/[+\-\/\*]/)
    for (let j = 0 ; j < resultat.length ; j++){
        let caractere = resultat.charAt(j)
        if (caractere === "+" || caractere === "/" ||caractere === "-" || caractere === "*") {
            taboperateur.push(caractere)
        }
    }
    for (let i = 0 ; i < res.length ; i++){
        tabnomber.push(res[i])
    }
    sin(tabnomber,taboperateur)
}
