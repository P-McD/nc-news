import React from "react";
import '../css/Loading.css'

export default function Loading() {
  return (
    <div>
        <p className="loading">Loading...</p>
      <div className="spinner-div">
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
}
