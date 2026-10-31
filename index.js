class Accordion {
  #selectors = {
    container: "[data-js-container]",
    accordion: "[data-js-accordion]",
    button: "[data-js-down-btn]",
    list: "[data-js-list]",
    activeClass: "active",
  };

  #container = document.querySelector(this.#selectors.container);

  init() {

    if (!this.#container) return;

    this.#container.addEventListener("click", (event) => {
      const button = event.target.closest(this.#selectors.button);

      if (!button) return;

      const currentAccordion = button.closest(this.#selectors.accordion);
      const currentList = currentAccordion?.querySelector(this.#selectors.list);

      if (!currentList) return;

      const allLists = this.#container.querySelectorAll(this.#selectors.list);

      allLists.forEach((list) => {
        if (list !== currentList) {
          list.classList.remove(this.#selectors.activeClass);
        }
      });
      currentList.classList.toggle(this.#selectors.activeClass);
    });
  }
}

const accordion = new Accordion();
accordion.init();
