let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc == "images/flash-logo-white-4k-68.jpg") {
        myImage.setAttribute("src", "images/react-js-logo-no.jpg");
    }
    else {
        myImage.setAttribute("src", "images/flash-logo-white-4k-68.jpg");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字：");
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName()
}
else {
    let storename = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storename;
}

myButton.onclick = function () {
    setUserName();
}