function processData() {
    var divCartib = document.getElementById("cartib");
    var divCapitoleb = document.getElementById("capitoleb");
    var listaVerseteb = document.getElementById("verseteb");

    for (var indexCarte = 0; indexCarte < cartib.length; indexCarte++) {
        var carte = cartib[indexCarte];
        var elementCarte = document.createElement("button");
        elementCarte.textContent = carte.numeb;
        elementCarte.id = indexCarte;
        elementCarte.onclick = function (event) {
            divCapitoleb.innerHTML = '';
            var idCarte = event.target.id;
            var capitoleb = cartib[idCarte].capitoleb;
            
            for (var indexCapitol = 0; indexCapitol < capitoleb.length; indexCapitol++) {
                var capitol = capitoleb[indexCapitol];
                var butonCapitol = document.createElement("button");
                butonCapitol.textContent = capitol.numeb;
                butonCapitol.id = `${idCarte}-${indexCapitol}`;
                divCapitoleb.appendChild(butonCapitol);

                butonCapitol.onclick = function(ev) {
                    listaVerseteb.innerHTML = '';
                    const ids = ev.target.id.split("-");
                    const idCarte = ids[0];
                    const idCapitol = ids[1];
                    const capitol = cartib[idCarte].capitoleb[idCapitol];
                    
                    for (const versetb of capitol.verseteb) {
                        var elementVerset = document.createElement("li");
                        elementVerset.textContent = versetb;
                        listaVerseteb.appendChild(elementVerset);
                    }
                };
            }
            
        };

        //asa se insereaza in html un titlu de carte
        divCartib.appendChild(elementCarte);
    }
}