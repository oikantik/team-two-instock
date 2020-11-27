import React from 'react';
import requireInput from '../../assets/icons/error-24px.svg';
import './RequireInput.scss'

const RequireInput = () => {
  return (
    <p className="require-input">
      <img src={requireInput} alt="Error Image" className="require-input__img"></img>
      <span className="require-input__paragraph">This field is required</span>
    </p>
  );
};


export default RequireInput;