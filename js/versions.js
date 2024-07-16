function load_versions(url) {
    fetch(url)
        .then(response => response.json())
        .then(versions => {
            const sidebar = document.getElementById("version-sidebar");
            versions.forEach(version => {
                const link = document.createElement("a");
                link.textContent = version.version;
                link.onclick = (event) => {
                    event.preventDefault();
                    load_markdown_file(`https://pygdf.github.io/content/docs/${version.file}`);
                };
                sidebar.appendChild(link);
            });
            if (versions.length > 0) {
                load_markdown_file(`https://pygdf.github.io/content/docs/${versions[0].file}`);
            }
        })
        .catch(error => {
            console.error("Ошибка загрузки версии:", error);
        });
}
