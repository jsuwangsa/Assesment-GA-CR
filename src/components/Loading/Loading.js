import "./Loading.scss";
import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="loading">
      <Spinner animation="border" role="status" />
    </div>
  );
};

export default Loading;
