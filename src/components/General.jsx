import '../styles/General.css'
import { useState } from 'react';

function General() {
    const [disabled, setDisabled] = useState(true);
  return (
    <>
      <form>
        <h1>General Info</h1>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" disabled={disabled}/>

        <label htmlFor="email">Email</label>
        <input type="text" id="email" disabled={disabled}/>

        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" disabled={disabled}/>
        <button onClick={
            (e) => {
                e.preventDefault();
                setDisabled(!disabled);
            }
        }>Edit</button>
        <button>Submit</button>
      </form>
    </>
  );
}

export default General;
