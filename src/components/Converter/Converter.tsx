import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../hooks/UseTypeSelector";
import * as actions from "./actions";
import "./Converter.css";

const Converter: FC = () => {
  const [amount, setAmount] = useState("");
  const [fromValue, setFromValue] = useState("USD");
  const [toValue, setToValue] = useState("");
  const [currencies, setCurrencies] = useState([
    "USD",
    "EUR",
    "RUB",
    "GBP",
    "JPY",
  ]);
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
    console.log(fromValue, toValue, amount);

    dispatch(actions.connvertRequest({ fromValue, toValue }));
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

      {convert[`${fromValue}_${toValue}`] ? (
        <h3>{convert[`${fromValue}_${toValue}`]}</h3>
      ) : null}
    </form>
  );
};

export default Converter;
