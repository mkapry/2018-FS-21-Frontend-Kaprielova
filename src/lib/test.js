const say = function (name) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("style","background-color:pink; color:white; padding:20px;");
    newDiv.innerHTML=Hi,${name};
    document.body.appendChild(newDiv);
}

export default say;
