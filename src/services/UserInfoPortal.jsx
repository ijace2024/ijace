import { Button, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import ReactDOM from "react-dom";

const UserInfoPortal = ({ user }) => {
  const [portalRoot, setPortalRoot] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    setPortalRoot(document.getElementById("portal-root"));
  }, []);

  if (!user || !portalRoot) return null;

  return ReactDOM.createPortal(
    <div style={
      { 
        position: "fixed", 
        top: "60px", 
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
    right: "20px",
     zIndex: 1050
      }}>
      <Button variant="secondary" size="sm" onClick={() => setShowInfo(!showInfo)}>
        👤 Profile
      </Button>

      {showInfo && (
        <Card className="p-3 mt-2 shadow" style={{ minWidth: "250px" }}>
          <p>
            {/* <strong>Name:</strong> {user.displayName || user.name || "N/A"} <br /> */}
            <strong>Email:</strong> {user.email}
          </p>
        </Card>
      )}
    </div>,
    portalRoot
  );
};

export default UserInfoPortal;
