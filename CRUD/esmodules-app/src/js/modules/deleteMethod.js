// export default async function (removeBtn, url) {
// 	removeBtn.forEach(btn => {
// 		btn.addEventListener("click", async () => {
// 			const fakeID = btn.parentElement.previousElementSibling.firstElementChild.textContent;
// 			btn.parentElement.parentElement.remove();

// 			await fetch(`${url}/${parseInt(fakeID)}`, {
// 				method: "DELETE"
// 			});
// 		})
// 	});
// }

export default function (removeBtn, url) {
	removeBtn.forEach(btn => {
		btn.addEventListener("click", async () => {
			if (confirm("Are you sure to Delete ?")) {
				const fakeID = btn.parentElement.previousElementSibling.firstElementChild.textContent;
				const deletedValue = btn.parentElement.previousElementSibling.lastElementChild.value;
				const deletedChecked = btn.previousElementSibling.checked;

				btn.parentElement.parentElement.remove();

				await fetch ("http://localhost:8888/history", {
					method: "POST",
					headers: {
						"content-type" : "application/json"
					},
					body: JSON.stringify({title: deletedValue, isComplete: deletedChecked ? true : false})
				});

				await fetch(`${url}/${parseInt(fakeID)}`, {
					method: "DELETE"
				});
			}
		})
	});
}