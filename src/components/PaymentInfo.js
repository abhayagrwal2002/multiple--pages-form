import React from "react";

function PaymentInfo({ formData, setFormData }) {
  return (
    <>
    <div className="other-info-container">
    <input
        type="number"
        placeholder="Enter the amount"
        value={formData.money}
        onChange={(e) => {
          setFormData({ ...formData, money: e.target.value });
        }}
      />
      <input  type="text" id="cname" name="cardname" placeholder="Name on the card"
        value={formData.cname}
        onChange={(e) => {
          setFormData({ ...formData, cname: e.target.value });
        }}
      />
      <input
        type="number" id="ccnum" name="cardnumber" placeholder="Card Number"
        value={formData.cnum}
        onChange={(e) => {
          setFormData({ ...formData, cnum: e.target.value });
        }}
      />
    <input type="number" id="expmonth" name="expmonth" placeholder="Exp Month" value={formData.month}
        onChange={(e) => {
          setFormData({ ...formData, emonth: e.target.value });

        }}
      />
      <div className="row">
      <div className="col-50">
    <input type="number" id="expyear" name="expyear" placeholder="Exp Year" value={formData.year}
        onChange={(e) => {
          setFormData({ ...formData, eyear: e.target.value });
        }}
      />
    </div>
    <div className="col-50">
    <input type="number" id="cvv" name="cvv" placeholder="cvv" value={formData.cvv}
        onChange={(e) => {
          setFormData({ ...formData, cvv: e.target.value });
        }}
      />
    </div>
    </div>
    </div>
    </>
  );
}

export default PaymentInfo;
