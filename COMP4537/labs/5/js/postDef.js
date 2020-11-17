const api = " https://jaskamal-dhruv.herokuapp.com/api/definitions"

function submit_def(){
    let word = document.getElementById("word_post").value;
    let def = document.getElementById("definition").value;
    console.log(word + def);
    if(word == "" || def == ""){
        alert("Invalid entry(s)");
        return false;
    }

    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", `${api}/${word}`, true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4&& this.status == 200){
            let response = JSON.parse(this.responseText);
            alert(`${response.word} : ${response.def}`);
        } else if(this.readyState == 4 && this.status != 200){
            let response = JSON.parse(this.responseText);
            alert(response.message);
        }
    };
    xhttp.send(`definition=${def}`);

    // return true;
}