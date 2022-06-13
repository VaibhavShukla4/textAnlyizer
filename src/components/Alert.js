import React from "react";

const Alert = (props) => {
  return (
    <div>
      <div>
        <div class="alert alert-success" role="alert">
          {props.alert}
        </div>
      </div>
    </div>
  );
};

export default Alert;
