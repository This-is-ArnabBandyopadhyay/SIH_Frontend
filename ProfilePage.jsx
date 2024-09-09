// import React from 'react';
// import { FaUserCircle, FaTimes } from 'react-icons/fa';

// function ProfilePage({ onClose }) {
//   // Mock user data, including last login time
//   const user = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     role: 'Admin',
//     employeeId: '123456',
//     department: 'IT',
//     lastLogin: new Date().toLocaleString(), // This displays the current time for simplicity
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg relative border-l-8 border-r-8 border-orange-500">
//         {/* Close Icon */}
//         <FaTimes 
//           className="absolute top-4 right-4 text-gray-600 cursor-pointer" 
//           onClick={onClose} 
//         />

//         <div className="flex flex-col items-center">
//           <FaUserCircle className="text-6xl text-orange-500 mb-4" />
//           <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
//           <p className="text-gray-500 mb-4">{user.email}</p>
//           <div className="w-full bg-gray-100 p-4 rounded-lg mb-4 border-l-4 border-r-4 border-dark-green-500">
//             <p className="text-sm text-gray-600">Status: <span className="font-semibold text-black">Active</span></p>
//             <p className="text-sm text-gray-600">Role: <span className="font-semibold text-black">{user.role}</span></p>
//             <p className="text-sm text-gray-600">Employee ID: <span className="font-semibold text-black">{user.employeeId}</span></p>
//             <p className="text-sm text-gray-600">Department: <span className="font-semibold text-black">{user.department}</span></p>
//             <p className="text-sm text-gray-600">Last Login: <span className="font-semibold text-black">{user.lastLogin}</span></p>
//           </div>

//           <button className="bg-orange-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-orange-600 transition-colors">
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProfilePage;


////////////////////////////////////////////////

import React from 'react';
import { FaUserCircle, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function ProfilePage({ onClose, handleLogout, darkMode }) {
  // Mock user data, including last login time
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    employeeId: '123456',
    department: 'IT',
    lastLogin: new Date().toLocaleString(), // This displays the current time for simplicity
  };

  const navigate = useNavigate(); // Use navigate for redirection

  const logoutAndRedirect = () => {
    console.log("Logout button clicked"); // Debug log
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      if (typeof handleLogout === 'function') {
        handleLogout(); // Call the function only if it's defined
        console.log('User logged out successfully'); // Debug log
      } else {
        console.error('handleLogout is not a function'); // Error log if it's not a function
      }
      navigate('/'); // Redirect to login page after logging out
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      {/* Conditionally applying dark mode classes */}
      <div className={`w-full max-w-md p-8 rounded-lg shadow-lg relative border-l-8 border-r-8 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-orange-500'}`}>
        {/* Close Icon */}
        <FaTimes 
          className={`absolute top-4 right-4 cursor-pointer transition-colors ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-800'}`}
          onClick={onClose} 
        />

        <div className="flex flex-col items-center">
          <FaUserCircle className={`text-7xl mb-4 ${darkMode ? 'text-gray-300' : 'text-orange-500'}`} />
          <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{user.name}</h2>
          <p className={`text-lg mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>{user.email}</p>

          <div className={`w-full p-6 rounded-lg mb-4 border-l-4 border-r-4 shadow-md ${darkMode ? 'bg-gray-700 border-gray-500' : 'bg-gray-100 border-black'}`}>
            <p className={`text-md mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Status: <span className={`font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Active</span></p>
            <p className={`text-md mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Role: <span className={`font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>{user.role}</span></p>
            <p className={`text-md mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Employee ID: <span className={`font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>{user.employeeId}</span></p>
            <p className={`text-md mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Department: <span className={`font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>{user.department}</span></p>
            <p className={`text-md mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Last Login: <span className={`font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>{user.lastLogin}</span></p>
          </div>

          <button 
            className={`px-6 py-3 rounded-full mt-4 transition-colors shadow-lg ${darkMode ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-orange-500 hover:bg-orange-600 text-white'}`}
            onClick={logoutAndRedirect}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;



