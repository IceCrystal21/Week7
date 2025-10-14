document.getElementById("push").addEventListener("click", function() {
    var age = document.getElementById("input")
    if (age > 18) {
        alert("You cannot vote")
    } else {
        alert("You can vote")
    }
})