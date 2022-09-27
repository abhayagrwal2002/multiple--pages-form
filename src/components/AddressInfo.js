import React from "react";

function AddressInfo({ formData, setFormData }) {
  return (
    <>
    <div className="sign-up-container">

      <input type="text" id="adr" name="address" placeholder="Address..." value={formData.address}
        onChange={(event) =>
          setFormData({ ...formData, address: event.target.value })
        }/>

      <input type="text" id="city"className="city" placeholder="City..." value={formData.city}
        onChange={(event) =>
          setFormData({ ...formData, city: event.target.value })
        }/>
        <input type="text" id="state" name="state" placeholder="State..."  value={formData.state}
        onChange={(event) =>
          setFormData({ ...formData, state: event.target.value })}/>

        <input type="number" id="zip" name="zip" placeholder="Pin Code"  value={formData.zip}
        onChange={(event) =>
          setFormData({ ...formData, zip: event.target.value })}/>
        </div>
    </>
  );
}

export default AddressInfo;


