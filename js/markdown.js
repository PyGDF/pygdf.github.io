async function load_markdown_file(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Документ не найден");
        const data = await response.text();
        document.getElementById("main-content").innerHTML = marked.parse(data);
        hljs.highlightAll();
    } catch (error) {
        const errorDiv = document.createElement("div");
        errorDiv.id = "file-not-found";
        errorDiv.innerText = "Файл не найден.";
        document.querySelector('content').appendChild(errorDiv);
        console.error(error);
    }

    document.querySelectorAll("pre").forEach((pre) => {
        const button = document.createElement("button");
        button.className = "md-copy-button";
        button.innerText = "Скопировать";
        pre.appendChild(button);

        button.addEventListener("click", () => {
            const code = pre.querySelector("code").innerText;
            navigator.clipboard.writeText(code).then(() => {
                button.innerText = "Скопировано!";
                setTimeout(() => {
                    button.innerText = "Скопировать";
                }, 2000);
            }).catch(err => {
                console.error('Ошибка копирования: ', err);
            });
        });
    });
}
