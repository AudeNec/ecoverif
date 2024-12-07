document.addEventListener("DOMContentLoaded", () => {
	const popup = document.getElementById("popup");
	const closeButton = document.getElementById("close-popup");

	// Affiche la popup à l'ouverture de la page
	popup.classList.remove("hidden");

	// Ajoute un événement pour fermer la popup
	closeButton.addEventListener("click", () => {
		popup.classList.add("hidden");
	});
});
