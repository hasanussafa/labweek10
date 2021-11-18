//Kazi Hasanus Safa
// ID: 101275458
import { useState } from "react";
import "./App.css";

const App = () => {
  const [email, set_email] = useState("");
  const [showEamilField, show_email] = useState(false);
  const [name, set_name] = useState("");
  const [showNameField, show_name] = useState(false);
  const [address1, set_address1] = useState("");
  const [showAddressField, show_address1] = useState(false);
  const [address2, set_address2] = useState("");
  const [showAddressField2, show_address2] = useState(false);
  const [city, set_city] = useState("");
  const [showCityField, show_city] = useState(false);
  const [provinceField, set_provience] = useState("");
  const [showProvinceField, show_provience] = useState(false);
  const [postCode, set_post_code] = useState("");
  const [showPostCodeField, show_post_code] = useState(false);

  let subnsnHandlerMethod = (evt) => {
    evt.preventDefault();
    show_email(true);
    show_name(true);
    show_address1(true);
    show_address2(true);
    show_city(true);
    show_provience(true);
    show_post_code(true);
  };

  return (
    <>
      
      <form onSubmit={subnsnHandlerMethod}>
       
        <h2>Data Entry Form</h2>
        <div className="top">
          <div>
            <label htmlFor="email_id">Email</label>
            <input type="email" id="email_id" placeholder="Enter email" value={email} onChange={(evt) => set_email(evt.target.value)} />
          </div>

          <div>
            <label htmlFor="name_id">Name</label>
            <input type="text" id="name_id" placeholder="Full Name" value={name} onChange={(evt) => set_name(evt.target.value)} />
          </div>
        </div>
        <div id="address">
        <label htmlFor="address1_id">Address</label>
        <input type="text" id="address1_id" placeholder="1234 Main St" value={address1} onChange={(evt) => set_address1(evt.target.value)} />
        </div>
        <label htmlFor="address2_id">Address 2</label>
        <input type="text" id="address2_id" value={address2} onChange={(evt) => set_address2(evt.target.value)} />
        <div className="btm">
          <div>
            <label htmlFor="city_id">City</label>
            <input type="text" id="city_id" value={city} onChange={(evt) => set_city(evt.target.value)} />
          </div>
          <div>
            <label htmlFor="prvncBox" id="prncBox">
              Province
            </label>
            <select id="prvncBox" value={provinceField} onChange={(evt) => set_provience(evt.target.value)}>
            <option value="Did not select" id="8">Choose..</option>
              <option value="Alberta" id="1">Alberta</option>
              <option value="British Columbia" id="2">British Columbia</option>
              <option value="Manhitoba" id="3">Manhitoba</option>
              <option value="New bornswick" id="4">New bornswick</option>
              <option value="New Foundland and Laborer" id="5">New Foundland and Laborer</option>
              <option value="Nova Scotia" id="6">Nova Scotia</option>
              <option value="Ontario" id="7">Ontario</option>
            </select>
          </div>
          <div>
            <label htmlFor="post_id">Postal Code</label>
            <input type="text" id="post_id" value={postCode} onChange={(evt) => set_post_code(evt.target.value)} />
          </div>
        </div>
        <input type="checkbox" id="chck" /> Agree Terms &amp; Condition?
        <input type="submit" value="Submit" id="Subbtn" />
      </form>
      <table className="display_data">
        <tr>{showEamilField ? (<><td className='level'>Email:</td> {email}</>) : ''}</tr>
        <tr>{showNameField ? (<><td className='level'>Full name:</td> {name}</>) : ''}</tr>
        <tr>{showAddressField ? (<><td className='level'>Address:</td> {address1}</>) : ''}</tr>
        <tr>{showAddressField2 ? (<><td className='level'>Address 2:</td> {address2}</>) : ''}</tr>
        <tr>{showCityField ? (<><td className='level'>City:</td> {city}</>) : ''}</tr>
        <tr>{showProvinceField ? (<><td className='level'>Province:</td> {provinceField}</>) : ''}</tr>
        <tr>{showPostCodeField ? (<><td className='level'>Post code:</td> {postCode}</>) : ''}</tr>
      </table>
    </>
  );
}

export default App;