import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="jumbotron bg-dark">
      <div className="container text-white">
        <div className="animate__animated animate__flipInX">
          <h1 className="display-4">Flashcard-o-matic</h1>
          <p className="lead">Discover The Flashcard Difference.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
