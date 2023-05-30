

// clic du bouton
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
// FACTORIELLE
function fac(chiffre){
    y = 1;
    for(let i = 1; i <= chiffre; i++){
        y = y * i;
    }
    return y
}
// PARENTHESIS
let i = 0;
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

function equal(chaine){
    let y = eval(chaine);
    if (chaine.includes("/0")) {
        y = "Erreur : Division par zéro";
    }
    document.getElementById('id_input_result').value = y;
    return y;
}
// POURCENTAGE
function pourcentage(chiffre) {
    let y
    y = chiffre / 100
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

    // recuperer chaine 
function recup() {
    let input_write = document.getElementById('id_input_write');
    let resultat = input_write.value
    let chaine = resultat
    const fonctions = ["sqrt", "sin","asin","acos","atan", "cos", "tan", "log", "exp", "cbrt", "pow", "abs"];

    fonctions.forEach(fonction => {
        const regex = new RegExp('\\b' + fonction + '\\b', 'g');
        chaine = chaine.replace(regex, 'Math.' + fonction);
    });
    equal(chaine)
}
    // OPERATOR + / -
function addOperator(){
    let a = document.getElementById('id_input_write');
    let n = a.value;
    n = n * -1;
    a.value = n;
};