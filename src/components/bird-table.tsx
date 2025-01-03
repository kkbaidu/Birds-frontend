import { Bird, BirdTableProps } from "../utils/types";

export const BirdTable: React.FC<BirdTableProps> = ({
  birds,
  onRowClick,
  onEditClick,
  onDeleteClick,
  onSelect,
}) => {
  const handleRowClick = (bird: Bird) => {
    onRowClick(bird);
    if (onSelect) onSelect(bird); // Call onSelect if provided
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Common Name
            </th>
            <th
              scope="col"
              className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Scientific Name
            </th>
            <th
              scope="col"
              className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Description
            </th>
            <th
              scope="col"
              className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {birds.map((bird) => (
            <tr
              key={bird._id}
              className="hover:bg-gray-100 cursor-pointer"
              onClick={() => handleRowClick(bird)}
            >
              <td className="px-4 py-2 text-left text-sm font-medium text-gray-900">
                {bird.commonName}
              </td>
              <td className="px-4 py-2 text-left text-sm text-gray-500">
                {bird.scientificName}
              </td>
              <td className="px-4 py-2 text-left text-sm text-gray-500">
                {bird.description}
              </td>
              <td className="px-4 py-2 text-left text-sm">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent row click
                    onEditClick(bird);
                  }}
                  className="text-blue-600 hover:underline mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent row click
                    onDeleteClick(bird._id);
                  }}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
