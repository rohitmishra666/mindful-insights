import React from "react";

function Logo({ width = "50px" }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img width={width} height="100px" src="/LOGO.png" alt="Company Logo" />
    </div>
  );
}

export default Logo;
