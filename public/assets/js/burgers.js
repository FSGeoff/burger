// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
	$(".change-devoured").on("click", function (event) {
		const id = $(this).data("id");
		const newDevoured = $(this).data("newdevour");
		console.log(id);
		console.log(newDevoured);
		console.log("Check the button just pressed here:\n ", this);

		const newDevourState = {
			devoured: newDevoured,
		};

		// Send the PUT request.
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: newDevourState,
		}).then(function () {
			// Reload the page to get the updated list
			location.reload();
		});
	});

	$(".create-form").on("submit", function (event) {
		// Make sure to preventDefault on a submit event.
		event.preventDefault();

		let newBurger = {
			burger_name: $("#burger").val().trim(),
			devoured: 0,
		};
		console.log("NEW BURGER", newBurger);

		// Send the POST request.
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger,
		}).then(function () {
			console.log("created new burger");
			// Reload the page to get the updated list
			location.reload();
		});
	});
});
