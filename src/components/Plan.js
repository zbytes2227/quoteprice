import React from 'react'

function Plan(props) {

  const handleRadioChange = (event) => {
    props.setPlanName(event.target.value);
  };

  const labelStyle = {
    fontWeight: 'bold'
  };

  return (
    <div className="btn-group d-flex" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked={props.planName === 'BASIC'} value="BASIC" onChange={handleRadioChange} />
      <label className="btn btn-outline-primary" htmlFor="btnradio1" style={labelStyle}>BASIC</label>

      <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" checked={props.planName === 'PREMIUM'} value="PREMIUM" onChange={handleRadioChange} />
      <label className="btn btn-outline-success" htmlFor="btnradio3" style={labelStyle}>PREMIUM</label>

      <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" checked={props.planName === 'ULTIMATE'} value="ULTIMATE" onChange={handleRadioChange} />
      <label className="btn btn-outline-danger" htmlFor="btnradio2" style={labelStyle}>ULTIMATE</label>

    </div>
  )
}

export default Plan;
