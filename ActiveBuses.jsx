import React, { useState } from 'react';

function ActiveBuses({ darkMode, handleCardClick }) {
  const [buses, setBuses] = useState([
    { id: 'DTC-101', type: 'AC', currentRoute: 'Route 1', status: 'Active' },
    { id: 'DTC-102', type: 'Non-AC', currentRoute: 'Route 2', status: 'Inactive' },
  ]);
  const [editBus, setEditBus] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddBus = () => {
    setEditBus(null);
    setShowForm(true);
  };

  const handleEditBus = (bus) => {
    setEditBus(bus);
    setShowForm(true);
  };

  const handleDeleteBus = (id) => {
    setBuses(buses.filter((bus) => bus.id !== id));
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newBus = {
      id: formData.get('id'),
      type: formData.get('type'),
      currentRoute: formData.get('currentRoute'),
      status: formData.get('status'),
    };

    if (editBus) {
      setBuses(buses.map((bus) => (bus.id === editBus.id ? newBus : bus)));
    } else {
      setBuses([...buses, newBus]);
    }

    setShowForm(false);
  };

  return (
    <div className={`p-8 rounded-lg shadow-xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} mt-16`}>
      <button onClick={() => handleCardClick('overview')} className="mb-4 text-blue-500 hover:underline">
        Back to Dashboard
      </button>
      <h2 className="text-3xl font-bold mb-6">Manage Buses</h2>
      <button
        onClick={handleAddBus}
        className={`p-3 mb-4 rounded-lg transition-all hover:scale-105 ${darkMode ? 'bg-blue-700' : 'bg-blue-500'} text-white shadow-md`}
      >
        + Add New Bus
      </button>

      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-300 text-gray-700">
          <tr>
            <th className="py-3 px-6 text-left">Bus ID</th>
            <th className="py-3 px-6 text-left">Type</th>
            <th className="py-3 px-6 text-left">Current Route</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {buses.map((bus, index) => (
            <tr key={bus.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-50'} hover:bg-gray-200 transition-colors`}>
              <td className="py-3 px-6">{bus.id}</td>
              <td className="py-3 px-6">{bus.type}</td>
              <td className="py-3 px-6">{bus.currentRoute}</td>
              <td className="py-3 px-6">{bus.status}</td>
              <td className="py-3 px-6 text-center">
                <button
                  onClick={() => handleEditBus(bus)}
                  className={`p-2 rounded-lg mr-2 transition-all hover:scale-105 shadow ${darkMode ? 'bg-green-600' : 'bg-green-500'} text-white`}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteBus(bus.id)}
                  className={`p-2 rounded-lg transition-all hover:scale-105 shadow ${darkMode ? 'bg-red-600' : 'bg-red-500'} text-white`}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-full max-w-xs bg-white rounded-lg shadow-lg">
            <div className={`p-4 rounded-t-lg ${darkMode ? 'bg-blue-800 text-white' : 'bg-blue-500 text-white'} text-xl font-semibold`}>
              {editBus ? 'Edit Bus' : 'Add New Bus'}
            </div>
            <div className={`p-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <form onSubmit={handleSubmitForm}>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="id" className="block font-medium mb-2">Bus ID</label>
                    <input
                      type="text"
                      id="id"
                      name="id"
                      defaultValue={editBus ? editBus.id : ''}
                      required
                      className="w-full p-2 border rounded-lg bg-gray-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className="block font-medium mb-2">Type</label>
                    <input
                      type="text"
                      id="type"
                      name="type"
                      defaultValue={editBus ? editBus.type : ''}
                      required
                      className="w-full p-2 border rounded-lg bg-gray-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="currentRoute" className="block font-medium mb-2">Current Route</label>
                    <input
                      type="text"
                      id="currentRoute"
                      name="currentRoute"
                      defaultValue={editBus ? editBus.currentRoute : ''}
                      required
                      className="w-full p-2 border rounded-lg bg-gray-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="status" className="block font-medium mb-2">Status</label>
                    <select
                      id="status"
                      name="status"
                      defaultValue={editBus ? editBus.status : 'Active'}
                      className="w-full p-2 border rounded-lg bg-gray-50"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => setShowForm(false)}
                    className="mr-4 px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-green-600' : 'bg-green-500'} text-white shadow-md hover:bg-green-700 transition-all`}
                  >
                    {editBus ? 'Update Bus' : 'Add Bus'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ActiveBuses;
