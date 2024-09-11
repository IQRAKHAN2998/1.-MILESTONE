const toggleButton = document.getElementById("mode-toggle");
let body = document.querySelector('body')

let currentmode = "light-mode"
toggleButton.addEventListener("click", () => {
if (currentmode === "light-mode"){
    currentmode = "dark"
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");

    } else { currentmode = "light-mode"
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
        
    }
});