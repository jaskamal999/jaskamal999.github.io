const api = "https://jaskamal-dhruv.herokuapp.com/api/definitions"

function validate(string){
    return string && string.match(/^[a-zA-Z\s]+$/);
}

function getDef(){
    let word = $("#word-search").val();
    console.log(word);
    if(!validate(word)){
        alert("Word not valid.");
        return;
    }
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", `${api}/${word}`, true);
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4&& this.status == 200){
            let response = JSON.parse(this.responseText);
            $("#word").text(response.word);
            $("#definition").text(response.definition);
        } else if(this.readyState == 4 && this.status != 200){
            let response = JSON.parse(this.responseText);
            alert(response.message);
        }
    };
    xhttp.send();
}

$("#submit-but").click(getDef);