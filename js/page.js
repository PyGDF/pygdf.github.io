window.onscroll = function() {
    const button = document.getElementById("scroll-to-top");

    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
        if (!((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 384))) {
            setTimeout(() => {
                button.classList.add("show");
            }, 10);
        } else {
            button.classList.remove("show");
        }
    } else {
        button.classList.remove("show");
    }
};
