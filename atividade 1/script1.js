function criarBotoes() {

    var tableDiv = document.getElementById('table-container');

    var table = document.createElement('table');

    for (var linha = 0; linha < 1; linha++){

        var row = document.createElement('tr');

        for (var coluna = 0; coluna < 10; coluna++){

            var celula = document.createElement('td');

            var button = document.createElement('button');

            button.innerText = '' + (coluna + 1);

            celula.appendChild(button);

            row.appendChild(celula);

        }
        table.appendChild(row);
    }
    tableDiv.appendChild(table);
}