const tableHistorique = document.getElementById("table-historique").getElementsByTagName('tbody')[0];

fetch("http://localhost:8080/date-etat")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.forEach(item => {
      const row = tableHistorique.insertRow();
      const etatIdCell = row.insertCell(0);
      const libelleCell = row.insertCell(1);
      const dateEtatCell = row.insertCell(2);
      const heureEtatCell = row.insertCell(3);
      etatIdCell.innerHTML = item.etat.id;
      libelleCell.innerHTML = item.etat.libelle;
      dateEtatCell.innerHTML = new Date(item.dateEtat).toLocaleDateString();
      heureEtatCell.innerHTML = item.heureEtat;
    });
  })
  .catch(error => {
    console.error("Erreur lors de la récupération de l'historique", error);
  });
