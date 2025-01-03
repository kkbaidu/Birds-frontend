export interface Bird {
  _id: string;
  commonName: string;
  scientificName: string;
  description: string;
  appearance: {
    size: string;
    color: string[];
  };
  habitat: string[];
  photos: string[];
  createdAt: string;
  updatedAt: string;
}

export interface BirdTableProps {
  birds: Bird[];
  onRowClick: (bird: Bird) => void;
  onEditClick: (bird: Bird) => void;
  onDeleteClick: (birdId: string) => void;
  onSelect?: (bird: Bird) => void;
  onEdit: (bird: Bird) => void;
  onDelete: (birdId: string) => void;
}

export interface BirdDetailModalProps {
  isOpen: boolean;
  bird: any | null;
  onClose: () => void;
}

export interface AddBirdModalProps {
  onClose: () => void;
  onSubmit: (newBird: Bird) => void;
}
