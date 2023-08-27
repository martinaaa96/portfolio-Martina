
document.getElementById("show-pdf-1").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("pdf-container-1").style.display = "block";
});

document.getElementById("show-pdf-2").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("pdf-container-2").style.display = "block";
});
document.getElementById("show-pdf-3").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("pdf-container-3").style.display = "block";
});
document.getElementById("show-pdf-4").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("pdf-container-4").style.display = "block";
});

document.addEventListener("click", function (event) {
    if (event.target !== document.getElementById("pdf-container-1") && event.target !== document.getElementById("show-pdf-1")) {
        document.getElementById("pdf-container-1").style.display = "none";
    }
    if (event.target !== document.getElementById("pdf-container-2") && event.target !== document.getElementById("show-pdf-2")) {
        document.getElementById("pdf-container-2").style.display = "none";
    }
    if (event.target !== document.getElementById("pdf-container-3") && event.target !== document.getElementById("show-pdf-3")) {
        document.getElementById("pdf-container-3").style.display = "none";
    }
    if (event.target !== document.getElementById("pdf-container-4") && event.target !== document.getElementById("show-pdf-4")) {
        document.getElementById("pdf-container-4").style.display = "none";
    }
});
