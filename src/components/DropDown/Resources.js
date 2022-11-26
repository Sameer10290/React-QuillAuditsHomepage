import { useState } from "react";
import "./Dropdown.css";

function Resources() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleHover = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div
      className="resourcesContainer"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <button className="btn">
        {!showDropdown ? "Resources ᐯ" : "Resources ᐱ"}
      </button>

      {showDropdown && (
        <div className="itemsContainer">
          <div className="item">Resources 1</div>
          <div className="item">Resources 2</div>
          <div className="item">Resources 3</div>
          <div className="item">Resources 4</div>
        </div>
      )}
    </div>
  );
}

export default Resources;