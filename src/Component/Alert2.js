import React from 'react'

function Alert2(props) {
  const captlize =(word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible`}>
    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
    <strong>{captlize(props.alert.type)}</strong> : {props.alert.msg}
  </div>
  )
}

export default Alert2
