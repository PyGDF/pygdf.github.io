function addLineNumbers() {
    document.querySelectorAll("pre code").forEach((block) => {
        let lines = block.innerHTML.split("\n");
        if (lines[lines.length - 1] === "") lines.pop();
        const lineNumbers = lines.map((_, i) => `<span>${i + 1}</span>`).join("");
        const lineNumberWrapper = document.createElement("div");
        lineNumberWrapper.className = "line-numbers";
        lineNumberWrapper.innerHTML = lineNumbers;
        const pre = block.parentNode;
        pre.insertBefore(lineNumberWrapper, block);
    });
}

async function load_markdown_file(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Файл не найден");
        const data = await response.text();
        document.getElementById("main-content").innerHTML = marked.parse(data);
        hljs.highlightAll();
        addLineNumbers();
    } catch (error) {
        const errorDiv = document.createElement("div");
        errorDiv.id = "file-not-found";
        errorDiv.innerText = "Файл не найден.";
        document.querySelector('content').appendChild(errorDiv);
        console.error(error);
    }

    document.querySelectorAll("pre").forEach((pre) => {
        const codeBlock = pre.querySelector("code");
        if (!codeBlock) return;

        const languageClass = Array.from(codeBlock.classList).find(className => className.startsWith("language-"));
        const languageName = languageClass ? languageClass.replace("language-", "") : "Text";

        const header = document.createElement("div");
        header.className = "code-block-header";

        const name = document.createElement("span");
        name.innerText = languageName.charAt(0).toUpperCase() + languageName.slice(1);
        header.appendChild(name);

        const button = document.createElement("button");
        button.className = "md-copy-button";
        button.innerText = "Копировать";
        header.appendChild(button);

        pre.insertBefore(header, pre.firstChild);

        button.addEventListener("click", () => {
            const code = codeBlock.innerText;
            navigator.clipboard.writeText(code).then(() => {
                button.innerText = "Скопировано!";
                setTimeout(() => {
                    button.innerText = "Копировать";
                }, 2000);
            }).catch(err => {
                console.error("Ошибка копирования: ", err);
            });
        });
    });
}
