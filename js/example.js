document.getElementById("push").addEventListener("click", function() {
    var age = document.getElementById("input")
    var num = document.getElementById("num")
    if (age > 18) {
        alert("You cannot vote")
    } else {
        alert("You can vote")
    }
    num.innerText = String(age)
})