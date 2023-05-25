

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
    // EQUAL
function equal(){
    let x = document.getElementById('id_input_write').value;
    let y = eval(x); // envoie une valeur d'achevement
    document.getElementById('id_input_result').value = y;
    return y;
}
    // FACTORIELLE
function fact(){
    let i = '';
    let r = document.getElementById('id_input_write').value;
    f = 1;
    for(i = 1; i <= r; i++){
        f = f * i;
    }
    document.getElementById('id_input_result').value = f;
}
    // RACINE CARRE
function square_root(chiffre) {
    let y = Math.sqrt(chiffre)
        return y
}
    // COS
function cos(chiffre) {
    let y = Math.cos(chiffre)
    return y
}
    // SIN
    function sin(chiffre) {
        let y = Math.sin(chiffre)
        return y
    }
    // TAN
function tan(chiffre) {
        let y = Math.tan(chiffre)
        return y
}
// LOGARITHME NEPERIEN
function ln(chiffre){
    let y = Math.log(chiffre);
    return y
}

    // LOG
function log(chiffre){
    let y = (Math.log(chiffre))/(Math.log(10));
    return y
}

    // INVERSE
function inverse(chiffre){
    let y = (1/chiffre);
    return y
}
    // EXP
function exp(chiffre) {
    let y = Math.exp(chiffre)
        return y
    }
    // ABSOLUTE
function absolute(chiffre) {
    let y = Math.abs(chiffre)
    return y
}
    // CARRE
function carre(chiffre) {
    let y = (chiffre * chiffre)
    return y
    }
    // POWER
function power(chiffre , exposant) {
    let y = Math.pow(chiffre, exposant);
    return y
    }
// FACTORIELLE
function fact(chiffre){
    let i = '';
    y = 1;
    for(i = 1; i <= chiffre; i++){
        y = y * i;
    }
    return y
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
function equal(tabnomber,taboperateur){
    let opresult = []
    let j = 0
    for(let i=0 ; i<tabnomber.length ; i++){
        opresult [j] = tabnomber [i]
        if ((i+1)!=tabnomber.length) {
            opresult[j+1] = taboperateur[i]
            j = j + 2
        }  
    }
    let x = opresult.join("")
    let y = eval(x);
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
    // recuperer chaine 
function recup() {
    let input_write = document.getElementById('id_input_write');
    let resultat = input_write.value
    // let tabnomber = resultat.match(/-?\d+(\.\d+)?/g);
    // let tableau = resultat.match(/-?\d+(\.\d+)?|[+÷×-]/g);
    let taboperateur = resultat.match(/[-+÷×]/g);
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
    for (let k = 0 ; k < tabnomber.length ; k++){
        if (tabnomber[k].includes("Fac")||tabnomber[k].includes("√")||tabnomber[k].includes("sin")||
            tabnomber[k].includes("cos")||tabnomber[k].includes("tan")||tabnomber[k].includes("Ln")||
            tabnomber[k].includes("Log")||tabnomber[k].includes("Inv")||tabnomber[k].includes("exp")||
            tabnomber[k].includes("²")||tabnomber[k].includes("Pow")||tabnomber[k].includes("Abs")){
            if (tabnomber[k].includes("Fac")) {
                    let nombre = tabnomber[k]
                    let chiffre = nombre.match(/\d+/);
                    tabnomber[k]=fact(chiffre)
                }
                else if(tabnomber[k].includes("√")) {
                    let nombre = tabnomber[k]
                    let chiffre = nombre.match(/\d+/);
                    tabnomber[k]=square_root(chiffre)
                }
                else if(tabnomber[k].includes("sin")) {
                    let nombre = tabnomber[k]
                    let chiffre = nombre.match(/\d+/);
                    tabnomber[k]=sin(chiffre)
                }
                else if(tabnomber[k].includes("cos")) {
                    let nombre = tabnomber[k]
                    console.log(nombre)
                    let chiffre = nombre.match(/\d+/);
                    tabnomber[k]=cos(chiffre)
                }
                else if(tabnomber[k].includes("tan")) {
                    let nombre = tabnomber[k]
                    let chiffre = nombre.match(/\d+/);
                    tabnomber[k]=tan(chiffre)
                }
                else if(tabnomber[k].includes("Ln")) {
                    let nombre = tabnomber[k]
                    let chiffre = nombre.match(/\d+/);
                    tabnomber[k]=ln(chiffre)
                }
                else if(tabnomber[k].includes("Log")) {
                    let nombre = tabnomber[k]
                    let chiffre = nombre.match(/\d+/);
                    tabnomber[k]=log(chiffre)
                }
                else if(tabnomber[k].includes("Inv")) {
                    let nombre = tabnomber[k]
                    let chiffre = nombre.match(/\d+/);
                    tabnomber[k]=inverse(chiffre)
                }
                else if(tabnomber[k].includes("exp")) {
                    let nombre = tabnomber[k]
                    let chiffre = nombre.match(/\d+/);
                    tabnomber[k]=exp(chiffre)
                }
                else if(tabnomber[k].includes("²")) {
                    let nombre = tabnomber[k]
                    let chiffre = nombre.match(/\d+/);
                    tabnomber[k]=carre(chiffre)
                }
                else if(tabnomber[k].includes("Pow")) {

                    let nombre = tabnomber[k]
                    let matches = nombre.match(/\((.*?)\)/);
                    let chiffre = matches[1][0]
                    let exposant = matches[1][2]
                    tabnomber[k] = power(chiffre,exposant)
                }
                else if(tabnomber[k].includes("Abs")) {
                    let nombre = tabnomber[k]
                    let chiffre = nombre.match(/\d+/);
                    tabnomber[k]=absolute(chiffre)
                }
    }
    }
    equal(tabnomber,taboperateur)
}
    // OPERATOR + / -
function addOperator(){
    let a = document.getElementById('id_input_write');
    let n = a.value;
    n = n * -1;
    a.value = n;
};

