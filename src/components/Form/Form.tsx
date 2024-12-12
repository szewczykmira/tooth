import React from "react";

export const Form = () => {
  return (
    <div className="m-2 text-center">
      <h3 className="text-stone-600">
        Choose FreeStyleLibre data you want to upload
      </h3>
      <input
        type="file"
        name="fsl-data"
        className="p-1.5 text-sm file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-stone-700 file:text-stone-300 hover:file:bg-amber-900"
      />
    </div>
  );
};
