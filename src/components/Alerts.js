import React from "react";

// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';



export default function Alerts(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div  style={{ height: "70px" }}>
      {props.alert && (
        <div id="alertBox"
          className={`alert alert-${props.alert.type} ${props.alert.msg==="Hide"?"alertHide":"alertShow"}`}
          role="alert"
        >
          {capitalize(props.alert.type)}: {props.alert.msg}
        </div>
      )}
    </div>
  );
}
