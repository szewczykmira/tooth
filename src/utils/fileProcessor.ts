import Papa from "papaparse";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export type FSLResult = {
  date: Date;
  value: number;
};

const readContent = (fslData: File): Promise<FSLResult[]> => {
  return new Promise((res) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const fileContent = fileReader.result as string;
      const { data } = Papa.parse(fileContent);

      res(
        (data.slice(2) as string[6][]).map(
          (item): FSLResult => ({
            date: dayjs(item[2], "DD-MM-YYYY HH:mm").toDate(),
            value: Number(item[4]),
          }),
        ),
      );
    };
    fileReader.readAsText(fslData);
  });
};

export const fileProcessor = async (
  fslData: File | null,
): Promise<FSLResult[]> => {
  if (!fslData || fslData?.size === 0) {
    alert("Sorry! this is not a valid file!");
    return [];
  }
  return await readContent(fslData);
};
