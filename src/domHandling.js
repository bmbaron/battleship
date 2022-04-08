const domHandling = (() => {

    const displayBoard = (number) => {

        let mainContainer = document.getElementById("main-container");
        mainContainer.style.display = "flex";
        let container = document.createElement("div");
        container.classList.add("container");
        container.id = "container" + number;
        container.style.display = "grid";
        container.style.gridTemplateColumns = "30px 30px 30px 30px 30px 30px 30px 30px 30px 30px";
        container.style.gridAutoRows = "35px";
        let width = "200";
        let height = "200";
        let pos = [];

        for (let i = 1; i <= 100; i = i+10) {
            for (let j = i; j <= i+9; j++) {
                pos[j] = document.createElement("button");
                pos[j].style.height = height/5 + "px";
                pos[j].style.width = width/5 + "px";
                pos[j].className = "position";
                pos[j].style.backgroundColor = "green";
                pos[j].innerText = j;
                container.appendChild(pos[j]);
            }
        }
        container.style.margin = "20px";
        mainContainer.appendChild(container);
    };
    
    return { displayBoard }
})();

export { domHandling }