import React from "react";
import { useRouteError } from "react-router-dom";


function ErrorElement() {
  const error = useRouteError();
  console.log(error);
  return <div className="font-bold text-4xl">There was an Error...</div>;
}

export default ErrorElement;
