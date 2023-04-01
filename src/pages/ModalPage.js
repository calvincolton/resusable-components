import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const actionBar = (
    <Button onClick={() => setShowModal(false)} primary>
      I accept
    </Button>
  );

  const modal = (
    <Modal onClose={() => setShowModal(false)} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept.</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={() => setShowModal((curr) => !curr)}>
        {showModal ? "Close Modal" : "Open Modal"}
      </Button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
