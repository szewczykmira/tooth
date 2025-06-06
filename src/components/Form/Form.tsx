import React from "react";
import { fileProcessor } from "../../utils/fileProcessor";

// @ts-ignore
export const Form = ({ storeData }) => {
  const processFile = async (event: React.FormEvent) => {
    event.preventDefault();
    // @ts-expect-error blah?
    const formData = new FormData(event.target);
    const results = await fileProcessor(
      formData.get("fsl-data") as File | null,
    );
    storeData(results);
  };

  return (
    <div className="m-2 text-center">
      <h3 className="text-stone-600">
        Choose FreeStyle Libre data you want to upload
      </h3>
      <form onSubmit={processFile}>
        <input
          type="file"
          name="fsl-data"
          id="data"
          className="p-1.5 text-sm file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-stone-700 file:text-stone-300 hover:file:bg-amber-900"
        />
        <br />
        <button
          type="submit"
          className="bg-stone-400 rounded-xl p-1 hover:bg-stone-700 text-amber-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
