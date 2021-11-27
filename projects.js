window.onload = () => {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");
    let active = document.querySelector(".active");
    let target = active.dataset.target;
    
    affiche();

    document.querySelector(target).classList.add("show");


    /**
     * Cette fonction gère l'affichage
     */
    function affiche() {
        for (let tab of tabs) {
            if (tab !== active) {
                tab.addEventListener("click", tabClick);
                tab.classList.remove("active");
            }
        }

        for (let content of contents) {
            content.classList.remove("show")
        }
    }

    function tabClick() {
        target = this.dataset.target;
        active = this;
        this.classList.add("active");
        this.removeEventListener("click", tabClick);
        affiche();
        document.querySelector(target).classList.add("show");
    }

}

