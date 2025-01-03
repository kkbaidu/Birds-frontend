import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { BirdTable } from "./components/bird-table";
import BirdDetailModal from "./components/bird-detail-modal";
import BirdUpdateModal from "./components/bird-update-modal";
import { fetchBirds, updateBird, deleteBird } from "./services/api";
import { toast } from "react-hot-toast";
import { Bird } from "./utils/types";

const App = () => {
  const [birds, setBirds] = useState<Bird[]>([]);
  const [selectedBird, setSelectedBird] = useState<Bird | null>(null);
  const [isDetailModalOpen, setDetailModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [birdToDelete, setBirdToDelete] = useState<string | null>(null);

  useEffect(() => {
    fetchBirds().then((res) => setBirds(res.data.data));
  }, []);

  const handleSelect = (bird: Bird) => {
    setSelectedBird(bird);
    setDetailModalOpen(true);
  };

  const handleEdit = (bird: Bird) => {
    setSelectedBird(bird);
    setUpdateModalOpen(true);
  };

  const handleUpdate = (updatedBird: Bird) => {
    updateBird(updatedBird._id, updatedBird).then(() => {
      toast.success("Bird updated successfully");
      setUpdateModalOpen(false);
      setBirds((prev) =>
        prev.map((bird) => (bird._id === updatedBird._id ? updatedBird : bird))
      );
    });
  };

  const handleDeleteClick = (birdId: string) => {
    setBirdToDelete(birdId);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (birdToDelete) {
      deleteBird(birdToDelete).then(() => {
        toast.success("Bird deleted successfully");
        setBirds((prev) => prev.filter((b) => b._id !== birdToDelete));
        setDeleteModalOpen(false);
        setBirdToDelete(null);
      });
    }
  };

  return (
    <div className="md:mx-auto md:w-1/2">
      <Toaster />
      <div className="p-4">
        <BirdTable
          birds={birds}
          onRowClick={handleSelect}
          onEdit={handleEdit}
          onDelete={handleDeleteClick}
          onEditClick={handleEdit}
          onDeleteClick={handleDeleteClick}
        />
        <BirdDetailModal
          isOpen={isDetailModalOpen}
          bird={selectedBird}
          onClose={() => setDetailModalOpen(false)}
        />
        <BirdUpdateModal
          isOpen={isUpdateModalOpen}
          bird={selectedBird}
          onUpdate={handleUpdate}
          onClose={() => setUpdateModalOpen(false)}
        />
        {isDeleteModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded shadow-md text-center">
              <h2 className="text-lg font-semibold mb-4">
                Are you sure you want to delete this bird?
              </h2>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={confirmDelete}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Confirm
                </button>
                <button
                  onClick={() => setDeleteModalOpen(false)}
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
