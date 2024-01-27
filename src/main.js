window.addEventListener("keydown", (e) => {
    if(e.key === "d") {
        document.getElementsByClassName("draw-button-label")[0].click();
        setTimeout(() => {
            document.getElementsByClassName("ui_v5-button-small")[1].click();
        }, 2);
    }
});