import React, { FC, useEffect } from "react";
import { useTypeSelector } from "../../hooks/UseTypeSelector";
import { useDispatch } from "react-redux";
import * as actions from "./actions";

const CurrentCurrencies: FC = () => {
  const defaultCurrency = navigator.language === "en-US" ? "USD" : "RUB";
  const { conversion_rates } = useTypeSelector((state) => state.currencies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getCurrenciesRequest(defaultCurrency));
  }, []);

  return (
    <div>
      <h2>Current Currencies</h2>
      <ul style={{ listStyle: "none" }}>
        {conversion_rates.RUB && defaultCurrency !== "RUB" ? (
          <li>
            1 {defaultCurrency} = {conversion_rates.RUB} RUB
          </li>
        ) : null}
        {conversion_rates.USD && defaultCurrency !== "USD" ? (
          <li>
            1 {defaultCurrency} = {conversion_rates.USD} USD
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default CurrentCurrencies;
