document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const username = form.querySelector("input[name='username']");
    const password = form.querySelector("input[name='password']");

    form.addEventListener("submit", function (e) {
        let errorMessages = [];

        if (username.value.trim() === "") {
            errorMessages.push("ユーザー名が未入力です");
        }

        if (password.value.trim() === "") {
            errorMessages.push("パスワードが未入力です");
        }

        if (errorMessages.length > 0) {
            e.preventDefault();
            alert(errorMessages.join("\n"));
        }
    });
});

const createPage = document.getElementById("createPage");

if (createPage) {
    const prefectureBtn = document.getElementById("prefecture-btn");
    const prefectureContainer = document.getElementById("prefecture-container");
    const animeNameBtn = document.getElementById("animeNameBtn");
    const animeNameContainer = document.getElementById("animeNameContainer");
    const storeBtn = document.getElementById("storeBtn");
    const postStatus = document.getElementById("postStatus");
    const draftBtn = document.getElementById("draftBtn");
    const form = document.querySelector("form");
    const urlCopyBtn = document.getElementById("urlCopyBtn");


    prefectureBtn.addEventListener("click", () => {
        if (prefectureContainer.style.display === "none") {
            prefectureContainer.style.display = "block";
        } else {
            prefectureContainer.style.display = "none";
        }
    });

    animeNameBtn.addEventListener("click", () => {
        if (animeNameContainer.style.display === "none") {
            animeNameContainer.style.display = "block";
        } else {
            animeNameContainer.style.display = "none";
        }
    });

    storeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        postStatus.value = "published";
        form.submit();
    });

    draftBtn.addEventListener("click", (e) => {
        e.preventDefault();
        postStatus.value = "draft";
        form.submit();
    });

    urlCopyBtn.addEventListener("click", () => {
        const url = document.getElementById("getUrl").textContent;
        navigator.clipboard.writeText(url).then(() => {
            alert("コピーしました！")
        }).catch(err => {
            alert("コピーに失敗しました" + err);
        });
    });
}
