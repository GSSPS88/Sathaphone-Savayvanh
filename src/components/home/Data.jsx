import React from 'react'

const Data = () => {
  const showAlert = () => 
    alert("Hi! Lovely visitor");
  return (
    <div className="home__data">
        <h1 className="home__title">
            Sathaphone Savayvanh
            <i class="bi bi-rocket-takeoff"></i>
        </h1>
        <h3 className="home__subtitle">Front-End Developer Intern</h3>
        <p className="home__description">
          Get to know me before we work together.
        </p>

        <button href="#" className="button button--flex" onClick={showAlert}>
            Say Hello
            <i class="bi bi-send"></i>
        </button>
    </div>
  );
}

export default Data;