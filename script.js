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