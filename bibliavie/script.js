function processData() {
    var divSectiuni = document.getElementById("sectiuni");
    var divCapitole = document.getElementById("capitole");
    var listaVersete = document.getElementById("versete");

    for (var indexSectiune = 0; indexSectiune < sectiuni.length; indexSectiune++) {
        
        var sectiune = sectiuni[indexSectiune];
        var elementTitluSectiune = document.createElement("h2");
        elementTitluSectiune.textContent = sectiune.nume;
        var carti = sectiune.carti;

        var elementSectiune = document.createElement("div");

        for (var indexCarte = 0; indexCarte < carti.length; indexCarte++) {
            var carte = carti[indexCarte];
            var elementCarte = document.createElement("button");
            elementCarte.textContent = carte.nume;
            elementCarte.id = `${indexSectiune}-${indexCarte}`;
            elementCarte.onclick = function (event) {
                divCapitole.innerHTML = '';
                const ids = event.target.id.split("-");
                const idSectiune = ids[0];
                const idCarte = ids[1];
                var capitole = sectiuni[idSectiune].carti[idCarte].capitole;

                for (var indexCapitol = 0; indexCapitol < capitole.length; indexCapitol++) {
                    var capitol = capitole[indexCapitol];
                    var butonCapitol = document.createElement("button");
                    butonCapitol.textContent = capitol.nume;
                    butonCapitol.id = `${idSectiune}-${idCarte}-${indexCapitol}`;
                    divCapitole.appendChild(butonCapitol);

                    butonCapitol.onclick = function (event) {
                        listaVersete.innerHTML = '';
                        const ids = event.target.id.split("-");
                        const idSectiune = ids[0];
                        const idCarte = ids[1];
                        const idCapitol = ids[2];
                        const capitol = sectiuni[idSectiune].carti[idCarte].capitole[idCapitol];

                        for (const verset of capitol.versete) {
                            var elementVerset = document.createElement("p");
                            elementVerset.textContent = verset;
                            listaVersete.appendChild(elementVerset);
                        }
                    };
                }

            };

            //asa se insereaza in html un titlu de carte
            elementSectiune.appendChild(elementCarte);
        }

        divSectiuni.appendChild(elementTitluSectiune);
        divSectiuni.appendChild(elementSectiune);
    }
}