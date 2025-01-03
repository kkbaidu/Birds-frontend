import React, { useState, useEffect } from "react";
import Modal from "react-modal";

interface BirdUpdateModalProps {
  isOpen: boolean;
  bird: any | null;
  onUpdate: (updatedBird: any) => void;
  onClose: () => void;
}

const BirdUpdateModal: React.FC<BirdUpdateModalProps> = ({
  isOpen,
  bird,
  onUpdate,
  onClose,
}) => {
  const [formData, setFormData] = useState(bird || {});

  useEffect(() => {
    if (bird) setFormData(bird);
  }, [bird]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name !== "photos") {
      // Ensure photos are not updated
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    const updatedBird = { ...formData, photos: bird?.photos }; // Preserve original photos
    onUpdate(updatedBird);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
      {bird ? (
        <div>
          <h2 className="text-lg font-semibold">Edit Bird</h2>
          <input
            name="commonName"
            value={formData.commonName || ""}
            onChange={handleChange}
            placeholder="Common Name"
            className="w-full mt-2 p-2 border rounded"
          />
          <input
            name="scientificName"
            value={formData.scientificName || ""}
            onChange={handleChange}
            placeholder="Scientific Name"
            className="w-full mt-2 p-2 border rounded"
          />
          <textarea
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
            placeholder="Description"
            className="w-full mt-2 p-2 border rounded"
          ></textarea>
          <button
            className="mt-4 px-4 py-2 bg-green-500 text-white"
            onClick={handleSubmit}
          >
            Update
          </button>
          <button
            className="mt-4 px-4 py-2 bg-gray-500 text-white"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      ) : null}
    </Modal>
  );
};

export default BirdUpdateModal;
