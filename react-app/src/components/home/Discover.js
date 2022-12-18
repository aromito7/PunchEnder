import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";


const Discover = () => {
    const [modalOpen, setModalOpen] = useState(false);

    // close modal function
    const closeModal = () => {
      setModalOpen(false);
    };

    // open modal function
    const openModal = () => {
      setModalOpen(true);
    };

    // create refs for the modal, overlay, and closeModalBtn elements
    const modalRef = useRef();
    const overlayRef = useRef();
    const closeModalBtnRef = useRef();

    useEffect(() => {
        // use the refs to access the elements
        const modal = modalRef.current;
        const overlay = overlayRef.current;
        const closeModalBtn = closeModalBtnRef.current;

        // store the event listener in a variable
        const handleKeyDown = (e) => {
          if (e.key === "Escape") {
            closeModal();
          }
        };

        // close the modal when the close button and overlay is clicked
        closeModalBtn.addEventListener("click", closeModal);
        overlay.addEventListener("click", closeModal);

        // close modal when the Esc key is pressed
        document.addEventListener("keydown", handleKeyDown);

        // clean up event listeners when the component unmounts
        return () => {
          closeModalBtn.removeEventListener("click", closeModal);
          overlay.removeEventListener("click", closeModal);
          document.removeEventListener("keydown", handleKeyDown);
        };
      }, []); // empty array ensures that the effect only runs on mount

    return (
      <div>
        <section ref={modalRef} className={`modal ${modalOpen ? "visible" : "hidden"}`}>
            <div className="discover-container">
                <div className="button-container">
                    <button ref={closeModalBtnRef} onClick={closeModal} className="modal-button">
                        ⨉
                    </button>
                </div>



                <div>
                    <div className="discover-title">
                        Collections
                    </div>
                    <div className="test123">
                        <div>
                            <NavLink className={"test123"} onClick={closeModal} to="/recommended-for-you">
                                Recommended For You
                            </NavLink>
                        </div>
                        <div>
                            <NavLink className={"test123"} onClick={closeModal} to="/projects-we-love">
                                Projects We Love
                            </NavLink>
                        </div>
                        <div>
                            <NavLink className={"test123"} onClick={closeModal} to="/saved-projects">
                                Saved Projects
                            </NavLink>
                        </div>
                        <div>
                            <NavLink className={"test123"} onClick={closeModal} to="/trending">
                                Trending
                            </NavLink>
                        </div>
                        <div>
                            <NavLink className={"test123"} onClick={closeModal} to="/nearly-funded">
                                Nearly Funded
                            </NavLink>
                        </div>
                        <div>
                            <NavLink className={"test123"} onClick={closeModal} to="/just-launched">
                                Just Launched
                            </NavLink>
                        </div>
                        <div>
                            <NavLink className={"test123"} onClick={closeModal} to="/upcoming-projects">
                                Upcoming Projects
                            </NavLink>
                        </div>
                        <div>
                            <NavLink className={"test123"} onClick={closeModal} to="/projects-near-you">
                                Projects Near You
                            </NavLink>
                        </div>
                        <div>
                            <NavLink className={"test123"} onClick={closeModal} to="/backed-by-others">
                                Backed By People You Follow
                            </NavLink>
                        </div>
                        <div>
                            <NavLink className={"test123"} onClick={closeModal} to="/everything">
                                Everything
                            </NavLink>
                        </div>
                    </div>


                    <div className="discover-title">
                        Categories
                    </div>
                    <div className="test123">
                        <div>
                            <NavLink className={"test123"} onClick={closeModal} to="/projects/categories/arts" >
                                Arts
                            </NavLink>
                        </div>
                        <div>
                            <NavLink className={"test123"} onClick={closeModal} to="/projects/categories/comicsillustration" >
                                Comics & Illustration
                            </NavLink>
                        </div>
                        <div>
                            <NavLink className={"test123"} onClick={closeModal} to="/projects/categories/designtech" >
                                Design & Tech
                            </NavLink>
                        </div>
                        <div>
                            <NavLink className={"test123"} onClick={closeModal} to="/projects/categories/film" >
                                Film
                            </NavLink>
                        </div>
                        <div>
                            <NavLink className={"test123"} onClick={closeModal} to="/projects/categories/foodcraft" >
                                Food & Craft
                            </NavLink>
                        </div>
                        <div>
                            <NavLink className={"test123"} onClick={closeModal} to="/projects/categories/games" >
                                Games
                            </NavLink>
                        </div>
                        <div>
                            <NavLink className={"test123"} onClick={closeModal} to="/projects/categories/music" >
                                Music
                            </NavLink>
                        </div>
                        <div>
                            <NavLink className={"test123"} onClick={closeModal} to="/projects/categories/publishing" >
                                Publishing
                            </NavLink>
                        </div>
                        </div>
                </div>



            </div>
        </section>

        <div ref={overlayRef} className={`${modalOpen ? "visible" : "hidden"}`}></div>
        <button className="discover-button cursor-pointer" onClick={openModal}>
          Discover
        </button>
      </div>
    );
  };

export default Discover;
