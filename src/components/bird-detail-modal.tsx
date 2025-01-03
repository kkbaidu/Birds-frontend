import React from "react";
import Modal from "react-modal";
import { BirdDetailModalProps } from "../utils/types";

const BirdDetailModal: React.FC<BirdDetailModalProps> = ({
  isOpen,
  bird,
  onClose,
}) => (
  <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
    {bird ? (
      <div>
        <h2 className="text-lg font-semibold">{bird.commonName}</h2>
        <p>
          <strong>Scientific Name:</strong> {bird.scientificName}
        </p>
        <p>
          <strong>Description:</strong> {bird.description}
        </p>
        <p>
          <strong>Size:</strong> {bird.appearance.size}
        </p>
        <p>
          <strong>Color:</strong> {bird.appearance.color.join(", ")}
        </p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    ) : null}
  </Modal>
);

export default BirdDetailModal;
