import { useState } from "react";
import Modal from '../../components/Modal';
export default function Index() {
  const [showModal, setShowModal] = useState(false);

  function onClickModal(){
    setShowModal(true)
  }

  return (
    <>
      <button onClick={onClickModal}>hola</button>
        <div>hola aquaher</div>  
      <Modal show={showModal} onClose={()=>setShowModal(false)}>
        hola desde el modal
      </Modal>
    </>
  )
}