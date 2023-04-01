const darkMode = () => {
	const isLigthMode = localStorage.getItem("isLightMode");
	isLigthMode && document.body.classList.toggle("light-mode");

	const themeToggleBtns = document.querySelectorAll("#theme-toggle");

	const handleThemeToggle = () => {
		document.body.classList.toggle("light-mode");

		if (!document.body.classList.contains("light-mode")) {
			localStorage.removeItem("isLightMode");
			document.body.removeAttribute("class");
		} else {
			localStorage.setItem("isLightMode", true);
		}
	};

	themeToggleBtns.forEach((x) => {
		x.addEventListener("click", handleThemeToggle);
	});
};

export default darkMode;
