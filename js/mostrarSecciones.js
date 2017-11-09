window.onload = function() {
  document.getElementById("inicioLink").style.textDecoration = "none";
}

function mostrarSeccion(evt, seccion, idlink) {
    var i,x, secc, links;
    secc = document.getElementsByClassName("secc");
    links = document.getElementsByClassName("link");
    for (i = 0; i < secc.length; i++) {
        secc[i].style.display = "none";
    }

    for (x = 0; x < links.length; x++) {
        links[x].style.textDecoration = "underline";
        links[x].className = "link";
    }

    document.getElementById(seccion).style.display = "block";
    document.getElementById(idlink).style.textDecoration = "none";

    evt.currentTarget.className = "active link";
}
