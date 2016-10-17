function myAlert() {
    var args = arguments;
    var title = args[0];
    var message = args[1];
    var customDialog = document.createElement("div");
    customDialog.id = "customDialog";
    customDialog.className = "customDialog";

    var customDialogContent = document.createElement("div");
    customDialogContent.id = "customDialogContent";
    customDialogContent.className = "customDialogContent";

    var customDialogHeader = document.createElement("div");
    customDialogHeader.id = "customDialogHeader";
    customDialogHeader.className = "customDialogHeader";
    customDialogHeader.innerText = title;

    var customDialogBody = document.createElement("div");
    customDialogBody.id = "customDialogBody";
    customDialogBody.className = "customDialogBody";
    customDialogBody.innerText = message;

    var customDialogFooter = document.createElement("div");
    customDialogFooter.id = "customDialogFooter";
    customDialogFooter.className = "customDialogFooter";

    var btnAccept = document.createElement("button");
    btnAccept.innerText = "Accept";
    btnAccept.className = "customDialogButton"
    btnAccept.setAttribute("style", "border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;");
    btnAccept.addEventListener("click", function () {
        document.getElementById("customDialog").remove();
    }, false);

    customDialogFooter.appendChild(btnAccept);
    customDialogContent.appendChild(customDialogHeader);
    customDialogContent.appendChild(customDialogBody);
    customDialogContent.appendChild(customDialogFooter);
    customDialog.appendChild(customDialogContent);

    document.getElementsByTagName("body")[0].appendChild(customDialog);

    customDialog.style.display = "block";

}

function myConfirm() {
    var args = arguments;
    var title = args[0];
    var message = args[1];
    var buttons = args[2].split(",");

    var customDialog = document.createElement("div");
    customDialog.id = "customDialog";
    customDialog.className = "customDialog";

    var customDialogContent = document.createElement("div");
    customDialogContent.id = "customDialogContent";
    customDialogContent.className = "customDialogContent";

    var customDialogHeader = document.createElement("div");
    customDialogHeader.id = "customDialogHeader";
    customDialogHeader.className = "customDialogHeader";
    customDialogHeader.innerText = title;

    var customDialogBody = document.createElement("div");
    customDialogBody.id = "customDialogBody";
    customDialogBody.className = "customDialogBody";
    customDialogBody.innerText = message;

    var customDialogFooter = document.createElement("div");
    customDialogFooter.id = "customDialogFooter";
    customDialogFooter.className = "customDialogFooter";

    var btnWidth = parseInt(250 / buttons.length);
    for (var i = 0; i < buttons.length; i++) {
        var btn = document.createElement("button");
        btn.innerText = buttons[i];
        btn.setAttribute("area-button-number", i + 1);
        btn.className = "customDialogButton";
        if (i + 1 === 1 && i + 1 === buttons.length) {
            btn.setAttribute("style", "width: " + btnWidth + "px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;");
        } else if (i + 1 === 1 && i + 1 < buttons.length) {
            btn.setAttribute("style", "width: " + btnWidth + "px; border-bottom-left-radius: 10px; border-right: #D3D3D3; border-right-style: solid; border-right-width: 1px;");
        } else if (i + 1 > 1 && i + 1 < buttons.length) {
            btn.setAttribute("style", "width: " + btnWidth + "px; border-right: #D3D3D3; border-right-style: solid; border-right-width: 1px;");
        } else if (i + 1 > 1 && i + 1 === buttons.length) {
            btn.setAttribute("style", "width: " + btnWidth + "px; border-bottom-right-radius: 10px;");
        }

        btn.addEventListener("click", function (e) {
            resultConfirm(e.target.getAttribute("area-button-number"));
            document.getElementById("customDialog").remove();
        }, false);
        customDialogFooter.appendChild(btn);
    }

    customDialogContent.appendChild(customDialogHeader);
    customDialogContent.appendChild(customDialogBody);
    customDialogContent.appendChild(customDialogFooter);
    customDialog.appendChild(customDialogContent);

    document.getElementsByTagName("body")[0].appendChild(customDialog);

    customDialog.style.display = "block";
}

function resultConfirm(value) {
    console.log("Button number "+value);
}
