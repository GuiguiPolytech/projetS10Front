function fillFormFromLocalStorage() {
    const motif = document.getElementById("motif");
    const moyenTransport = document.getElementById("moyenTransport");
    const dateDepart = document.getElementById("dateDepart");
    const status = document.getElementById("status");

    motif.value = localStorage.getItem("fraisMotif");
    moyenTransport.value = localStorage.getItem("fraisMoyenTransport");
    dateDepart.value = localStorage.getItem("fraisDateDepart");
    status.value = localStorage.getItem("fraisStatus");
  }
  
  async function getEtatId(){
    const response = await fetch("http://localhost:8080/frais-deplacement/" + localStorage.getItem("fraisId"));
    const data = await response.json();
    return data.etats[0].id;
  }
  
  getEtatId().then(data_id => {
    console.log(data_id);
  });
  
  fillFormFromLocalStorage();
  
  async function modifierFraisDeplacement() {
    const motif = document.getElementById("motif").value;
    const moyenTransport = document.getElementById("moyenTransport").value;
    const dateDepart = document.getElementById("dateDepart").value;
    const status = document.getElementById("status").value;
    const etatId = await getEtatId();
  
    const body = {
      motif: motif,
      moyenTransport: moyenTransport,
      dateDepart: dateDepart,
      etats: [
        {
          id: etatId,
          libelle: status
        }
      ]
    };
  
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    };
    
    fetch("http://localhost:8080/frais-deplacement/" + localStorage.getItem("fraisId"), requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Une erreur est survenue');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        alert("Le frais a été modifié avec succès");
        window.location.href = "./ListeFrais.html";
      })
      .catch(error => {
        console.log(error);
        alert("Une erreur est survenue lors de la modification du frais");
      });
  }
  
  
  const form = document.getElementById("create-frais-form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    await modifierFraisDeplacement();
    window.location.href = "./FraisDeplacement.html";
  });
  
  
  