document.addEventListener("DOMContentLoaded", function () {
	const missingPersons = [
		{
			name: "John Doe",
			lastSeen: "Nairobi CBD",
			contact: "0712345678",
			photo: "images/man.png",
		},
		{
			name: "Jane Smith",
			lastSeen: "Kisumu Central",
			contact: "0723456789",
			photo: "images/woman.png",
		},
		// Add more missing persons here
	];

	const missingPersonsSection = document.getElementById("missing-persons");

	missingPersons.forEach((person) => {
		const personDiv = document.createElement("div");
		personDiv.classList.add("missing-person");

		const personImg = document.createElement("img");
		personImg.src = person.photo;
		personImg.alt = `${person.name}'s photo`;

		const personDetails = document.createElement("div");
		personDetails.classList.add("missing-person-details");

		const personName = document.createElement("h2");
		personName.textContent = person.name;

		const personLastSeen = document.createElement("p");
		personLastSeen.textContent = `Last Seen: ${person.lastSeen}`;

		const personContact = document.createElement("p");
		personContact.textContent = `Contact: ${person.contact}`;

		personDetails.appendChild(personName);
		personDetails.appendChild(personLastSeen);
		personDetails.appendChild(personContact);
		personDiv.appendChild(personImg);
		personDiv.appendChild(personDetails);

		missingPersonsSection.appendChild(personDiv);
	});
});
