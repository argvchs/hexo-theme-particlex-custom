console.info("Welcome to Argvchs' blog!");
if (!window.hasOwnProperty("ontouchstart")) {
    let background = document.createElement("canvas");
    background.id = "background";
    let fireworks = document.createElement("canvas");
    fireworks.id = "fireworks";
    let bscript = document.createElement("script");
    bscript.src = "/js/background.js";
    let fscript = document.createElement("script");
    fscript.src = "/js/fireworks.js";
    document.body.insertAdjacentElement("afterbegin", background);
    document.body.insertAdjacentElement("afterbegin", bscript);
    document.body.insertAdjacentElement("afterbegin", fireworks);
    document.body.insertAdjacentElement("afterbegin", fscript);
}
