// Ini JavaScript

function replaceName() {
    let name = prompt("Halo, Siapa nama Anda?","");
    document.getElementById("name").innerHTML = name
}

document.getElementById('tombol').addEventListener("click", function() {
    replaceName();
})

