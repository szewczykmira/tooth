import Papa from "papaparse";
const readContent = (fslData: File) => {
  const fileReader = new FileReader();
  fileReader.onload = () => {
    const fileContent = fileReader.result as string;
    const { data } = Papa.parse(fileContent);
    console.log(data);
  };
  fileReader.readAsText(fslData);
};

export const fileProcessor = (fslData: File | null) => {
  if (!fslData || fslData?.size === 0) {
    alert("Sorry! this is not a valid file!");
    return [];
  }
  readContent(fslData);
  return [];
};
