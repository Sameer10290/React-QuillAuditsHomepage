import { useState } from "react";
import "./Dropdown.css";

function AuditServices() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleHover = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div
      className="auditContainer"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <button className="btn">
        {!showDropdown ? "Audit Services ᐯ" : "Audit Services ᐱ"}
      </button>

      {showDropdown && (
        <div className="itemsContainer">
          <div className="item">Service 1</div>
          <div className="item">Service 2</div>
          <div className="item">Service 3</div>
          <div className="item">Service 4</div>
        </div>
      )}
    </div>
  );
}

export default AuditServices;