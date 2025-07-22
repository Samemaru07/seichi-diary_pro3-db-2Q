const imageGetLinkBtn = document.getElementById("imageGetLinkBtn");

imageGetLinkBtn.addEventListener("click", () => {
    const imageInput = document.getElementById("imageInput");
    const uploadStatus = document.getElementById("uploadStatus");
    const getUrl = document.getElementById("getUrl");

    const file = imageInput.files[0];
    const formData = new FormData();
    formData.append("image", file);
    formData.append("_token", csrfToken);

    fetch(uploadUrl, {
        method: "POST",
        headers: {
            "X-CSRF-TOKEN": csrfToken
        },
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("アップロード失敗");
            } else {
                return response.json();
            }
        })
        .then(data => {
            uploadStatus.innerText = "アップロード成功！";
            getUrl.innerText = data.url;
        });
})
