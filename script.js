document.addEventListener("DOMContentLoaded", function () {
	const missingPersons = [
		{
			name: "Emmanuel Kamau Mukuria",
			lastSeen: "June 25th during Nation Demos",
			contact: "0797765250 / 0711644067",
			photo: "images/GS7vNgZXoAANkQn.jfif",
		},
	
		{
			name: "Daniel Kabusho",
			lastSeen: "Kenyatta Road (Thika Road) on June 18th. Outside Icon Hotel.",
			contact: "0790938638 / 079258064",
			photo: "images/Daniel.jfif",
		},
		{
			name: "Clinton Ouma ",
			lastSeen: "Industrial Area Police Station",
			contact: "DM ME ON twitter",
			photo: "images/Clinton_Ouma.jfif ",
		},
		// Add more missing persons here
	];

	const missingPersonsSection = document.getElementById("missing-persons");

	if (missingPersons.length === 0) {
		const noPersonsMessage = document.createElement("p");
		noPersonsMessage.textContent = "No missing persons reported at this time.";
		missingPersonsSection.appendChild(noPersonsMessage);
	} else {
		const fragment = document.createDocumentFragment();

		missingPersons.forEach((person) => {
			const personDiv = document.createElement("div");
			personDiv.classList.add("missing-person");

			const personImg = document.createElement("img");
			personImg.src = person.photo;
			personImg.alt = `${person.name}'s photo`;
			personImg.onerror = function () {
				this.src = "images/default-person.jpg"; // Replace with path to your default image
			};

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

			fragment.appendChild(personDiv);
		});

		missingPersonsSection.appendChild(fragment);
	}

	// Footer visibility toggle
	const footer = document.getElementById("footer");
	window.addEventListener("scroll", function () {
		const scrollHeight = document.documentElement.scrollHeight;
		const scrollTop = document.documentElement.scrollTop;
		const clientHeight = document.documentElement.clientHeight;

		if (scrollTop + clientHeight >= scrollHeight - 5) {
			footer.classList.add("visible");
		} else {
			footer.classList.remove("visible");
		}
	});
});
