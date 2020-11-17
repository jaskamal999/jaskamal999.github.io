const api = "https://jaskamal-dhruv.herokuapp.com/api/definitions"

function fetch_def(){
    let word = document.getElementById("word_search").value;
    console.log(word);
    if(word == ""){
        alert("Invalid entry");
        return false;
    }

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", `${api}/${word}`, true);
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4&& this.status == 200){
            let response = JSON.parse(this.responseText);
            $("#show_word").text(response.word);
            $("#show_definition").text(response.def);
        } else if(this.readyState == 4 && this.status != 200){
            let response = JSON.parse(this.responseText);
            alert(response.message);
        }
    };
    xhttp.send();

    // return true;
}