import {
  ConvertRequestModel,
  ResultModel,
} from "../components/Converter/models";

const URL = "https://free.currconv.com/api/v7";
const API_KEY = "01a042582c0e07ad8f62";

export const convert = async (data: ConvertRequestModel) => {
  const { fromValue, toValue } = data;
  try {
    const res = await fetch(
      `${URL}/convert?q=${fromValue}_${toValue}&compact=ultra&apiKey=${API_KEY}`
    );
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};
