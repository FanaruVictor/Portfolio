const lazyLoading = () => {
	const laziImgs = document.querySelectorAll(".lazy");

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entiry) => {
			if (entiry.isIntersecting) {
				const img = entiry.target;
				console.log(img);
				img.src = img.dataset.src;
				img.classList.remove("loading");
				img.classList.add("loaded");
				observer.unobserve(entiry.target);
			}
		});
	});

	laziImgs.forEach((x) => {
		observer.observe(x);
	});
};

export default lazyLoading;
