import React, { useState } from "react";
import AddressInfo from "./AddressInfo";
import PersonalInfo from "./PersonalInfo";
import PaymentInfo from "./PaymentInfo";
import {useNavigate} from "react-router-dom";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username:"",
    city:"",
    address:"",
    zip:"",
    state:"",
    money: "",
    eyear:"",
    emonth:"", 
    cvv:"",
     cname:"", 
    cnum:"",
  });

  const FormTitles = [ "Personal Info","Address", "Payment"];
  const navigate = useNavigate();
  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } 
    else if (page === 1) {
      return <AddressInfo formData={formData} setFormData={setFormData} />;
    }
    else {
      return <PaymentInfo formData={formData} setFormData={setFormData} />;
    }
  };

  const infoDisplay=()=>{
    {
      if (page === FormTitles.length - 1) {
        if(formData.firstName.length<3 || formData.lastName.length<3 ||formData.username.length<5){
            alert("Invalid Credentials");
            setPage(0);
        }
        else if(formData.city.length<3 ||formData.address.length<5 || formData.state.length<3){
          alert("Invalid Credentials 1");
          setPage(1);
        }
        else if(formData.cname.length<3){
          alert("Invalid Credentials");
          setPage(2);
        }
        else{
          console.log(formData.firstName.length);
          console.log("submit");
          alert("Form Submitted");
          navigate('/succcessful');
        }
      } 
      else {
        setPage((currPage) => currPage + 1);
      }
    }}

  return (
    <><h1>Internship Task Code 1</h1>
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button onClick={() => {infoDisplay()}}>
            {page === FormTitles.length - 1 ? "PAY" : "Next"}
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Form;