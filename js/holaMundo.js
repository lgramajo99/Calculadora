document.getElementById('n1').addEventListener("click", n1);
document.getElementById('n2').addEventListener("click", n2);
document.getElementById('n3').addEventListener("click", n3);
document.getElementById('n4').addEventListener("click", n4);
document.getElementById('n5').addEventListener("click", n5);
document.getElementById('n6').addEventListener("click", n6);
document.getElementById('n7').addEventListener("click", n7);
document.getElementById('n8').addEventListener("click", n8);
document.getElementById('n9').addEventListener("click", n9);
document.getElementById('n0').addEventListener("click", n0);

document.getElementById('s').addEventListener("click", opS);
document.getElementById('r').addEventListener("click", opR);
document.getElementById('m').addEventListener("click", opM);
document.getElementById('d').addEventListener("click", opD);

function n1() {
    let actual = document.getElementById("indicador").innerHTML;
    let sumado = document.getElementById("n1").innerHTML;
    document.getElementById("indicador").innerHTML = actual + sumado;
}

function n2() {
    let actual = document.getElementById("indicador").innerHTML;
    let sumado = document.getElementById("n2").innerHTML;
    document.getElementById("indicador").innerHTML = actual + sumado;
}

function n3() {
    let actual = document.getElementById("indicador").innerHTML;
    let sumado = document.getElementById("n3").innerHTML;
    document.getElementById("indicador").innerHTML = actual + sumado;
}

function n4() {
    let actual = document.getElementById("indicador").innerHTML;
    let sumado = document.getElementById("n4").innerHTML;
    document.getElementById("indicador").innerHTML = actual + sumado;
}

function n5() {
    let actual = document.getElementById("indicador").innerHTML;
    let sumado = document.getElementById("n5").innerHTML;
    document.getElementById("indicador").innerHTML = actual + sumado;
}

function n6() {
    let actual = document.getElementById("indicador").innerHTML;
    let sumado = document.getElementById("n6").innerHTML;
    document.getElementById("indicador").innerHTML = actual + sumado;
}

function n7() {
    let actual = document.getElementById("indicador").innerHTML;
    let sumado = document.getElementById("n7").innerHTML;
    document.getElementById("indicador").innerHTML = actual + sumado;
}

function n8() {
    let actual = document.getElementById("indicador").innerHTML;
    let sumado = document.getElementById("n8").innerHTML;
    document.getElementById("indicador").innerHTML = actual + sumado;
}

function n9() {
    let actual = document.getElementById("indicador").innerHTML;
    let sumado = document.getElementById("n9").innerHTML;
    document.getElementById("indicador").innerHTML = actual + sumado;
}

function n0() {
    let actual = document.getElementById("indicador").innerHTML;
    let sumado = document.getElementById("n0").innerHTML;
    document.getElementById("indicador").innerHTML = actual + sumado;
}
// -----------

function opS() {
    let actual = document.getElementById("indicador").innerHTML;
    let sumado = document.getElementById("s").innerHTML;
    document.getElementById("indicador").innerHTML = actual + sumado;
}

function opR() {
    let actual = document.getElementById("indicador").innerHTML;
    let sumado = document.getElementById("r").innerHTML;
    document.getElementById("indicador").innerHTML = actual + sumado;
}

function opM() {
    let actual = document.getElementById("indicador").innerHTML;
    let sumado = document.getElementById("m").innerHTML;
    document.getElementById("indicador").innerHTML = actual + sumado;
}

function opD() {
    let actual = document.getElementById("indicador").innerHTML;
    let sumado = document.getElementById("d").innerHTML;
    document.getElementById("indicador").innerHTML = actual + sumado;
}


function show() {
    let actual = document.getElementById("indicador").innerHTML;
    let suma = actual.indexOf("+");
    let resta = actual.indexOf("-");
    let multiplicacion = actual.indexOf("*");
    let division = actual.indexOf("/");

    if (suma !== -1) {
        arr = actual.split("+", 2);
        res = arr[0] + arr[1];
        document.getElementById("indicador").innerHTML = res;
    } else if (resta !== -1) {
        arr = actual.split("-", 2);
        res = arr[0] - arr[1];
        document.getElementById("indicador").innerHTML = res;
    } else if (multiplicacion !== -1) {
        arr = actual.split("*", 2);
        res = arr[0] * arr[1];
        document.getElementById("indicador").innerHTML = res;
    } else if (division !== -1) {
        arr = actual.split("/", 2);
        res = arr[0] / arr[1];
        document.getElementById("indicador").innerHTML = res;
    }


}