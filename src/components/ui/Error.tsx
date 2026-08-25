import React from "react";

type Message = {
  message: string;
};

export function Error({ message }: Message) {
  return (
    <div className="mx-auto max-w-xl">
      <div className="w-full rounded border-red-500 border-2 flex h-30 mt-40 items-center justify-center text-center">
        <p className="text-red-500 font-semibold text-xl">{message}</p>
      </div>
    </div>
  );
}

export default Error;
