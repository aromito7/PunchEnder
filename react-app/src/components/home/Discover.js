const Discover = () => {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const openModalBtn = document.querySelector(".btn-open");
    const closeModalBtn = document.querySelector(".btn-close");

    // close modal function
    const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    };

    // close the modal when the close button and overlay is clicked
    closeModalBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    // close modal when the Esc key is pressed
    document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
    });

    // open modal function
    const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    };
    // open modal event
    openModalBtn.addEventListener("click", openModal);

    return (
        <>
            <section class="modal hidden">
            <div class="flex">
            <img src="https://avatars.githubusercontent.com/u/62628408?s=96&v=4" width="50px" height="50px" alt="user" />
            <button class="btn-close">⨉</button>
            </div>
            <div>
            <h3>Stay in touch</h3>
            <p>
                This is a dummy newsletter form so don't bother trying to test it. Not
                that I expect you to, anyways. :)
            </p>
            </div>

            <input type="email" id="email" placeholder="brendaneich@js.com" />
            <button class="btn">Do Something</button>
            </section>

            <div class="overlay hidden"></div>
            <button class="btn btn-open">Open Modal</button>
        </>
  )
    }
