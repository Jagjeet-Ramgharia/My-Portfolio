import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function Loader2() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "whitesmoke",
      }}
    >
      <ClimbingBoxLoader size={10} color={"#869F9A"} loading={true} />
    </div>
  );
}

export default Loader2;
