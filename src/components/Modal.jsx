import React, { useState } from "react";

const Modal = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className='modal'>
      <div className='modal__half modal__about'>
        <h3 className='modal__title modal__title--about '>
          Here's a bit about me!
        </h3>
      </div>
    </div>
  );
};

export default Modal;
