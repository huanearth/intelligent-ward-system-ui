import { RefObject } from "react";
// import { Data } from "react-csv";
export type Data = Array<Record<string, any>> | string;
export interface IOwnProps {
  csvData: string | Data;
  graphRef: RefObject<any>;
  title?: string;
}
