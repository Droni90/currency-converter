import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../hooks/UseTypeSelector";
import * as actions from "./actions";
import "./Converter.css";

const Converter: FC = () => {
  const [amount, setAmount] = useState("");
  const [fromValue, setFromValue] = useState("USD");
  const [toValue, setToValue] = useState("EUR");
  const currencies = ["USD", "EUR", "RUB"];
  const convert = useTypeSelector((state) => state.convert);

  const dispatch = useDispatch();

  const handlerAmountInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(evt.target.value);
  };

  const handlerFromRadio = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setFromValue(evt.target.value);
  };

  const handlerToRadio = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setToValue(evt.target.value);
  };

  const handlerSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    dispatch(actions.convertRequest({ fromValue, toValue, amount }));
  };
  return (
    <form onSubmit={handlerSubmit} className="Converter">
      <h1>Currency Converter</h1>
      <div className="Form">
        <input
          name="amount"
          type="text"
          onChange={handlerAmountInput}
          value={amount}
        />
        <select name="from" onChange={handlerFromRadio} value={fromValue}>
          {currencies.map((cur) => (
            <option key={cur}>{cur}</option>
          ))}
        </select>
        <select name="to" onChange={handlerToRadio} value={toValue}>
          {currencies.map((cur) => (
            <option key={cur}>{cur}</option>
          ))}
        </select>
        <button type="submit">Convert</button>
      </div>

      {convert.conversion_result ? (
        <h3>
          {convert.conversion_result} {toValue}
        </h3>
      ) : null}
    </form>
  );
};

export default Converter;
