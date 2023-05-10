const tableFrais = document.querySelector('#table-frais tbody');

fetch('http://localhost:8080/frais-deplacement')
  .then(response => response.json())
  .then(data => {
    data.forEach(frais => {
      const row = document.createElement('tr');
      const idCell = document.createElement('td');
      const motifCell = document.createElement('td');
      const moyenTransportCell = document.createElement('td');
      const dateDepartCell = document.createElement('td');
      const personneIdCell = document.createElement('td');
      const statusCell = document.createElement('td');

      idCell.textContent = frais.id;
      motifCell.textContent = frais.motif;
      moyenTransportCell.textContent = frais.moyenTransport;
      dateDepartCell.textContent = frais.dateDepart;
      personneIdCell.textContent = frais.personne.id;
      statusCell.textContent = frais.etats[0].libelle;

      row.appendChild(idCell);
      row.appendChild(motifCell);
      row.appendChild(moyenTransportCell);
      row.appendChild(dateDepartCell);
      row.appendChild(personneIdCell);
      row.appendChild(statusCell);

      tableFrais.appendChild(row);
    });
  });

  function GoTo(path) {
    window.location.href = path;
  }