// Parašyti programą kurioje būtų navigacija su linkais į <section> dalis.
// Naudoti masyva colors = [...]. Turinys turi būti sukurtas dinamiškai - naudojant JavaScript.
// 1. Programoje turi būti navigacija. Navigacijoje turi būti mygtukas su atitinkama spalva ir užrašu. Nuspaudus and spalvos pavadinimo turi nuscrolinti iki tam tikros spalvos sekcijos.
// 2. Spalvos sekcijos aukštis turi būti per visą ekraną.
// 3. Sekcijos viduryje turi būti parašyta text property. pvz: "This is red"
// 4. Sekcijos fonas turi būti background property
// 5. Sekcijos teksto spalva turi būti color property

const colors = [
	{
		id: "red",
		background: "#ffcccc",
		color: "#ff1919",
		text: "This is red",
	},
	{
		id: "green",
		background: "#e5ffe5",
		color: "#19ff19",
		text: "This is green",
	},
	{
		id: "blue",
		background: "#ccccff",
		color: "#1919ff",
		text: "This is blue",
	},
];
const containerAndButtonsInit = () => {
	const buttonContainer = document.createElement("div");
	buttonContainer.className = "container";
	buttonContainer.style = "text-align: center";
	const body = document.body;
	body.append(buttonContainer);
	colors.forEach((button) => {
		const createdButton = document.createElement("button");
		createdButton.innerText = button.id;
		createdButton.setAttribute("id", `${button.id}`);
		createdButton.style = `color: ${button.id}; padding: 1em 3em; margin: 1em 1em 100vh; border-radius: 20px; cursor: pointer`;
		buttonContainer.append(createdButton);
	});
};
containerAndButtonsInit();

document.querySelectorAll("button").forEach((btn) => {
	btn.addEventListener("click", () => {
		document
			.querySelector(`section.${btn.id}`)
			.scrollIntoView({ behavior: "smooth" });
		console.log(`You clicked ${btn.id} button`);
	});
});

const sectionsInit = () => {
	colors.forEach((section) => {
		const createSection = document.createElement("section");
		createSection.className = section.id;
		createSection.innerText = `${section.text}`;
		createSection.style = `display: flex; justify-content: center; align-items: center; height: 100vh; background-color: ${section.background}; color: ${section.id}`;
		const backToTopButton = document.createElement("span");
		backToTopButton.innerText = "Go UP!";
		backToTopButton.style =
			"background-color: #eee; border-radius: 50%; padding: 0.5em; margin-left: 1em; color: black; cursor: pointer";
		createSection.append(backToTopButton);
		document.body.append(createSection);
	});
};
sectionsInit();

document.querySelectorAll("span").forEach((spa) => {
	spa.addEventListener("click", () => {
		document.querySelector(".container").scrollIntoView({ behavior: "smooth" });
		console.log(`You cliked "go Top!" button`);
	});
});
