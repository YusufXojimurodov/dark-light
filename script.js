function light() {
    let body = document.getElementById("body")
    body.style.backgroundColor = "#C4B5A5"

    let a = document.querySelectorAll("a")

    for (let index = 0; index < a.length; index++) {
        a[index].style.color = "black"
    }

    let logo = document.querySelector(".logo")
    logo.style.color = "black"

    let darkbtn = document.querySelector(".dark-btn")
    darkbtn.style.backgroundColor = "black"
    darkbtn.style.boxShadow = "0px 4px 4px 0px black"

    let h2 = document.querySelector(".sec-h2")
    h2.style.color = "black"

    let p = document.querySelector(".sec-p")
    p.style.color = "black"

    let button = document.querySelector(".get-btn")
    button.style.color = "get-btn"

    let lightbtn = document.querySelector(".light-btn")
    lightbtn.style.backgroundColor = "#FB982F"
    lightbtn.style.color = "black"
}

function dark() {
    let body = document.getElementById("body")
    body.style.backgroundColor = "black"

    let a = document.querySelectorAll("a")

    for (let index = 0; index < a.length; index++) {
        a[index].style.color = "white"
    }

    let logo = document.querySelector(".logo")
    logo.style.color = "white"

    let darkbtn = document.querySelector(".dark-btn")
    darkbtn.style.backgroundColor = "#FB982F"
    darkbtn.style.boxShadow = "2px 2px 2px  #FB982F"

    let h2 = document.querySelector(".sec-h2")
    h2.style.color = "white"


    let p = document.querySelector(".sec-p")
    p.style.color = "white"

    let button = document.querySelector(".get-btn")
    button.style.color = "white"

    let lightbtn = document.querySelector(".light-btn")
    lightbtn.style.backgroundColor = "white"
    lightbtn.style.color = "black"

}