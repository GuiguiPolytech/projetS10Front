const form = document.getElementById("create-profil-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const email = document.getElementById("email").value;
  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;
  const typeProfil = document.getElementById("typeProfil").value;

  let url;
  if (typeProfil === "demandeur") {
    url = "http://localhost:8080/personnes/demandeurs";
  } else if (typeProfil === "manager") {
    url = "http://localhost:8080/personnes/managers";
  }

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      nom: nom,
      prenom: prenom
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log("Profil créé avec succès", data);
    // Ajouter le code pour rediriger l'utilisateur vers la page de profil
  })
  .catch(error => {
    console.error("Erreur lors de la création du profil", error);
  });
});
