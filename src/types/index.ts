export interface IMeta {
  limit: number;
  page: number;
  total: number;
}
export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
export interface OrderTableDataType {
  key: string;
  name: string;
  contact: string;
  address: string;
  services: string[];
}
export interface ServiceTableDataType {
  key: string;
  name: string;
}
