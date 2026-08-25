import React from "react";

type Message = {
  message: string;
};

function Error({ message }: Message) {
  return <div className="border">{message}</div>;
}

export default Error;
