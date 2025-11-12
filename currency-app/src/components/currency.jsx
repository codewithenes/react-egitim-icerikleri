import React, { useState } from "react";
import "../css/currency.css";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_NEbLnfnThOlM2Jv11TL8eoDruIJNGbIyu5WauNJR";

function currency() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState("0");

  const exchange = async () => {
    // console.log(amount);
    // console.log(toCurrency);
    const response = await axios.get(
      BASE_URL + "?apikey=" + API_KEY + "&base_currency=" + fromCurrency
    );
    const rate = response.data.data[toCurrency];
    const calculated1 = rate * Number(amount);
    const calculated = calculated1.toFixed(3);
    setResult(calculated);
  };

  return (
    <div className="main">
      <div className="currency-div">
        <h2 className="h2-header">EXCHANGE APP</h2>

        <div className="input-group">
          <p>Amount</p>
          <input
            type="number"
            className="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <p>FROM</p>
          <select
            size="5"
            onChange={(e) => setFromCurrency(e.target.value)}
            className="from-currency-option"
          >
            <option>EUR</option>
            <option>USD</option>
            <option>JPY</option>
            <option>BGN</option>
            <option>CZK</option>
            <option>DKK</option>
            <option>GBP</option>
            <option>HUF</option>
            <option>PLN</option>
            <option>RON</option>
            <option>SEK</option>
            <option>CHF</option>
            <option>ISK</option>
            <option>NOK</option>
            <option>HRK</option>
            <option>RUB</option>
            <option>TRY</option>
            <option>AUD</option>
            <option>BRL</option>
            <option>CAD</option>
            <option>CNY</option>
            <option>HKD</option>
            <option>IDR</option>
            <option>ILS</option>
            <option>INR</option>
            <option>KRW</option>
            <option>MXN</option>
            <option>MYR</option>
            <option>NZD</option>
            <option>PHP</option>
            <option>SGD</option>
            <option>THB</option>
            <option>ZAR</option>
          </select>
          <p>TO</p>
          <select
            size="5"
            onChange={(e) => setToCurrency(e.target.value)}
            className="-currency-option"
          >
            <option>EUR</option>
            <option>USD</option>
            <option>JPY</option>
            <option>BGN</option>
            <option>CZK</option>
            <option>DKK</option>
            <option>GBP</option>
            <option>HUF</option>
            <option>PLN</option>
            <option>RON</option>
            <option>SEK</option>
            <option>CHF</option>
            <option>ISK</option>
            <option>NOK</option>
            <option>HRK</option>
            <option>RUB</option>
            <option>TRY</option>
            <option>AUD</option>
            <option>BRL</option>
            <option>CAD</option>
            <option>CNY</option>
            <option>HKD</option>
            <option>IDR</option>
            <option>ILS</option>
            <option>INR</option>
            <option>KRW</option>
            <option>MXN</option>
            <option>MYR</option>
            <option>NZD</option>
            <option>PHP</option>
            <option>SGD</option>
            <option>THB</option>
            <option>ZAR</option>
          </select>

          <input
            type="number"
            readOnly
            className="result"
            value={result}
            onChange={(e) => setResult(e.target.value)}
          />
        </div>

        <button onClick={exchange}>Exchange</button>
      </div>
      <div className="currency-list">
        <p>EUR - Euro</p>
        <p>USD - US Dollar</p>
        <p>JPY - Japanese Yen</p>
        <p>BGN - Bulgarian Lev</p>
        <p>CZK - Czech Republic Koruna</p>
        <p>DKK - Danish Krone</p>
        <p>GBP - British Pound Sterling</p>
        <p>HUF - Hungarian Forint</p>
        <p>PLN - Polish Zloty</p>
        <p>RON - Romanian Leu</p>
        <p>SEK - Swedish Krona</p>
        <p>CHF - Swiss Franc</p>
        <p>ISK - Icelandic Króna</p>
        <p>NOK - Norwegian Krone</p>
        <p>HRK - Croatian Kuna</p>
        <p>RUB - Russian Ruble</p>
        <p>TRY - Turkish Lira</p>
        <p>AUD - Australian Dollar</p>
        <p>BRL - Brazilian Real</p>
        <p>CAD - Canadian Dollar</p>
        <p>CNY - Chinese Yuan</p>
        <p>HKD - Hong Kong Dollar</p>
        <p>IDR - Indonesian Rupiah</p>
        <p>ILS - Israeli New Sheqel</p>
        <p>INR - Indian Rupee</p>
        <p>KRW - South Korean Won</p>
        <p>MXN - Mexican Peso</p>
        <p>MYR - Malaysian Ringgit</p>
        <p>NZD - New Zealand Dollar</p>
        <p>PHP - Philippine Peso</p>
        <p>SGD - Singapore Dollar</p>
        <p>THB - Thai Baht</p>
        <p>ZAR - South African Rand</p>
      </div>
    </div>
  );
}

export default currency;
