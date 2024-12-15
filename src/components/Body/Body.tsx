import React, { useState } from "react";
import { Form } from "../Form/Form";
import { FSLResult } from "../../utils/fileProcessor";

export const Body = () => {
  const [fslData, setFslData] = useState<FSLResult[]>([]);
  return <>{fslData.length === 0 && <Form storeData={setFslData} />}</>;
};
