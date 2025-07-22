const newAnimeRegisterBtn = document.getElementById("newAnimeRegisterBtn");

newAnimeRegisterBtn.addEventListener("click", () => {
    const newAnimeNameInput = document.getElementById("newAnimeName");
    const howToReadInputs = [
        document.getElementById("howToRead1"),
        document.getElementById("howToRead2"),
        document.getElementById("howToRead3"),
        document.getElementById("howToRead4")
    ];
    const newAnimeName = newAnimeNameInput.value.trim();
    const formData = new FormData();

    formData.append("new_anime_name", newAnimeName);
    formData.append("_token", csrfToken);

    howToReadInputs.forEach((input, index) => {
        formData.append(`how_to_read${index + 1}`, input.value.trim());
    });

    fetch(registerAnimeUrl, {
        method: "POST",
        headers: {
            "X-CSRF-TOKEN": csrfToken
        },
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.error || "登録失敗");
                });
            }
            return response.json();
        })
        .then(data => {
            const animeNameContainer = document.getElementById("animeNameContainer");
            const label = document.createElement("label");
            label.style.display = "flex";
            label.style.alignItems = "center";
            label.style.width = "120px";
            label.style.gap = "8px";

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "anime_id";
            radio.value = data.anime_id;
            radio.checked = true;

            label.appendChild(radio);
            label.appendChild(document.createTextNode(data.anime_name));

            animeNameContainer.insertBefore(label, animeNameContainer.firstChild);

            document.getElementById("newAnimeName").value = "";
            document.getElementById("howToRead1").value = "";
            document.getElementById("howToRead2").value = "";
            document.getElementById("howToRead3").value = "";
            document.getElementById("howToRead4").value = "";

        })
        .catch(error => {
            console.error("登録エラー:", error.message);
            alert("登録エラー: " + error.message);
        });

});
