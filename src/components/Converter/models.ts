export interface ConvertRequestModel {
  fromValue: string;
  toValue: string;
  amount: string
}

export interface ConvertResultModel {
  conversion_result: number
}