const api = "https://jaskamal-dhruv.herokuapp.com/api/definitions"

function check(string){
    return string && string.match(/^[a-zA-Z\s]+$/);
}

function postDef(){
    let word = $("#word-search").val();
    console.log(word);
    if(!check(word)){
        alert("Word not valid.");
        return;
    }
    let definition = $("#definition").val();
    console.log(definition);
    if(!check(definition)){
        alert("Definition not valid.");
        return;
    }
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", `${api}/${word}`, true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4&& this.status == 200){
            let response = JSON.parse(this.responseText);
            alert(`${response.word} : ${response.definition}`);
        } else if(this.readyState == 4 && this.status != 200){
            let response = JSON.parse(this.responseText);
            alert(response.message);
        }
    };
    xhttp.send(`definition=${definition}`);
}

$("#submit-but").click(postDef);
$("#search-but").click(()=> { window.location.href = "./search.html"})