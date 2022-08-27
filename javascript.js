function getDataa(){
    if (document.getElementById("email").value) {
        console.log("emaillll", document.getElementById("email").value);
        data.push(document.getElementById("email").value);
    }
    if (document.getElementById("pass").value) {
        console.log("passsssss", document.getElementById("pass").value);
        data.push(document.getElementById("pass").value);
    }

    console.log("datooos", data);
}

data = [];