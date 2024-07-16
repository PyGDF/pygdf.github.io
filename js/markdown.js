async function load_markdown_file(url) {
    try {
        // if (url == "new-doc") {
        //     document.getElementById("main-content").innerHTML = marked.parse(doc1);
        // } else {
        //     const response = await fetch(url);
        //     if (!response.ok) throw new Error("Файл не найден");
        //     const data = await response.text();
        //     document.getElementById("main-content").innerHTML = marked.parse(data);
        // }

        const response = await fetch(url);
        if (!response.ok) throw new Error("Файл не найден");
        const data = await response.text();
        document.getElementById("main-content").innerHTML = marked.parse(data);

        hljs.highlightAll();
        
        // Add line numbers:
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
    } catch (error) {
        const styles = "text-align: center; margin-top: 40vh; font-size: 24px;";
        document.getElementById("main-content").innerHTML = `<div style="${styles}">Файл не найден.</div>`;
        console.error(error);
    }

    // Add code header and copy button:
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
