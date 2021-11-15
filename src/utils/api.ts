import { ConvertRequestModel } from "../components/Converter/models";

const URL = "https://v6.exchangerate-api.com/v6";
const API_KEY = "f13c9151b1ae82adc4758b8b";

export const convert = async (data: ConvertRequestModel) => {
  const { fromValue, toValue, amount } = data;
  try {
    const res = await fetch(
      `${URL}/${API_KEY}/pair/${fromValue}/${toValue}/${amount}`
    );
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const getCurrencies = async (defaultCurrency: string) => {
  try {
    const res = await fetch(`${URL}/${API_KEY}/latest/${defaultCurrency}`);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};
