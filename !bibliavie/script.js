function processData() {
    var divCarti = document.getElementById("carti");
    var divCapitole = document.getElementById("capitole");
    var listaVersete = document.getElementById("versete");

    for (var indexCarte = 0; indexCarte < carti.length; indexCarte++) {
        var carte = carti[indexCarte];
        var elementCarte = document.createElement("button");
        elementCarte.textContent = carte.nume;
        elementCarte.id = indexCarte;
        elementCarte.onclick = function (event) {
            divCapitole.innerHTML = '';
            var idCarte = event.target.id;
            var capitole = carti[idCarte].capitole;
            
            for (var indexCapitol = 0; indexCapitol < capitole.length; indexCapitol++) {
                var capitol = capitole[indexCapitol];
                var butonCapitol = document.createElement("button");
                butonCapitol.textContent = capitol.nume;
                butonCapitol.id = `${idCarte}-${indexCapitol}`;
                divCapitole.appendChild(butonCapitol);

                butonCapitol.onclick = function(ev) {
                    listaVersete.innerHTML = '';
                    const ids = ev.target.id.split("-");
                    const idCarte = ids[0];
                    const idCapitol = ids[1];
                    const capitol = carti[idCarte].capitole[idCapitol];
                    
                    for (const verset of capitol.versete) {
                        var elementVerset = document.createElement("li");
                        elementVerset.textContent = verset;
                        listaVersete.appendChild(elementVerset);
                    }
                };
            }
            
        };

        //asa se insereaza in html un titlu de carte
        divCarti.appendChild(elementCarte);
    }
}