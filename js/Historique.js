const tableBody = document.querySelector("#table-historique tbody");

fetch("http://localhost:8080/date-etat")
  .then(response => response.json())
  .then(data => {
    // Parcourir les données et créer chaque ligne du tableau
    data.forEach(etat => {
      const row = document.createElement("tr");

      const etatIdCell = document.createElement("td");
      etatIdCell.textContent = etat.etat.id;
      row.appendChild(etatIdCell);

      const dateEtatCell = document.createElement("td");
      dateEtatCell.textContent = new Date(etat.dateEtat).toLocaleDateString();
      row.appendChild(dateEtatCell);

      const heureEtatCell = document.createElement("td");
      heureEtatCell.textContent = etat.heureEtat;
      row.appendChild(heureEtatCell);

      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Erreur lors de la récupération des données", error);
  });
