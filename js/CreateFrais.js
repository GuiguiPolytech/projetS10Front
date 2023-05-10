// On récupère la liste des personnes
fetch('http://localhost:8080/personnes')
.then(response => response.json())
.then(data => {
  // On récupère le select
  const select = document.getElementById('personneId');
  // On ajoute les options
  data.forEach(personne => {
    const option = document.createElement('option');
    option.value = personne.id;
    option.textContent = personne.nom + ' ' + personne.prenom + ' ' + personne.id;
    select.appendChild(option);
  });
});

const form = document.getElementById("create-frais-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const motif = document.getElementById("motif").value;
  const moyenTransport = document.getElementById("moyenTransport").value;
  const dateDepart = document.getElementById("dateDepart").value;
  //Transform date to ISO format
  const dateDepartISO = new Date(dateDepart).toISOString().split('T')[0];
  const personneId = document.getElementById("personneId").value;

  fetch("http://localhost:8080/frais-deplacement", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      motif: motif,
      moyenTransport: moyenTransport,
      dateDepart: dateDepart,
      personne: {
        id: personneId
      }
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log("Frais créé avec succès", data);
    // Ajouter le code pour rediriger l'utilisateur vers la page des frais
    window;location.href = "./FraisDeplacement.html";
  })
  .catch(error => {
    console.error("Erreur lors de la création du frais", error);
  });
});

