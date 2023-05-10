const tableManagers = document.querySelector('#table-managers tbody');
  const tableDemandeurs = document.querySelector('#table-demandeurs tbody');

  fetch('http://localhost:8080/personnes')
    .then(response => response.json())
    .then(data => {
      data.forEach(personne => {
        const row = document.createElement('tr');
        const idCell = document.createElement('td');
        const emailCell = document.createElement('td');
        const nomCell = document.createElement('td');
        const prenomCell = document.createElement('td');

        idCell.textContent = personne.id;
        emailCell.textContent = personne.email;
        nomCell.textContent = personne.nom;
        prenomCell.textContent = personne.prenom;

        row.appendChild(idCell);
        row.appendChild(emailCell);
        row.appendChild(nomCell);
        row.appendChild(prenomCell);

        if (personne.typeProfil === 'manager') {
          tableManagers.appendChild(row);
        } else if (personne.typeProfil === 'demandeur') {
          tableDemandeurs.appendChild(row);
        }
      });
    });

    function GoTo(path) {
        window.location.href = path;
      }
      