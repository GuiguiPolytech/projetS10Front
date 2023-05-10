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
      const modifyBtnCell = document.createElement('td');
      const modifyBtn = document.createElement('Button');
      modifyBtn.textContent = "Modifier";
      modifyBtn.classList.add('btn', 'btn-warning');
      modifyBtn.setAttribute('data-toggle', 'modal');
      modifyBtn.setAttribute('data-target', '#modifyModal');

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
      modifyBtnCell.appendChild(modifyBtn);
      row.appendChild(modifyBtnCell);

      tableFrais.appendChild(row);

      modifyBtn.addEventListener('click', () => {
        localStorage.setItem('fraisId', frais.id);
        localStorage.setItem('fraisMotif', frais.motif);
        localStorage.setItem('fraisMoyenTransport', frais.moyenTransport);
        localStorage.setItem('fraisDateDepart', frais.dateDepart);
        localStorage.setItem('fraisStatus', frais.etats[0].libelle);
        GoTo("./ModifyFrais.html");
      });
      
    });
  });

  function GoTo(path) {
    window.location.href = path;
  }
  