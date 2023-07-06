import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const override= {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

const Loader = () => {
  return (
    <div>
        <ClipLoader
        color="#e79841"
        loading={true}
        cssOverride={override}
        size={130}
        aria-label="Loading Spinner"
      />
    </div>
  )
}

export default Loader
