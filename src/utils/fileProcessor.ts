export const fileProcessor = (fslData: File | null) => {
  if (!fslData || fslData?.size === 0) {
    alert("sorry! this is not a valid file!");
  }
  return [];
};
