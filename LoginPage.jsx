// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function LoginPage() {
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('Admin');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (role === 'Admin') navigate('/admin');
//     else if (role === 'System Manager') navigate('/system-manager');
//     else if (role === 'Crew Member') navigate('/crew-member');
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-lg w-96">
//         <h1 className="text-2xl font-bold mb-6 text-center">DTC Employee Login</h1>
//         <input
//           type="text"
//           className="w-full mb-4 p-2 border rounded"
//           placeholder="User ID"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//         />
//         <input
//           type="password"
//           className="w-full mb-4 p-2 border rounded"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <select
//           className="w-full mb-4 p-2 border rounded"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//         >
//           <option value="Admin">Admin</option>
//           <option value="System Manager">System Manager</option>
//           <option value="Crew Member">Crew Member</option>
//         </select>
//         <button
//           className="w-full bg-blue-500 text-white p-2 rounded"
//           onClick={handleLogin}
//         >
//           Login
//         </button>
//         <div className="text-center mt-4">
//           <a href="#" className="text-blue-500">Forgot Password?</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;


///////////////////////////


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import dtcLogo from './assets/dtc-logo.png';

function LoginPage({ onLogin }) {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Admin');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock validation
    if (employeeId === 'admin' && password === 'admin123' && role === 'Admin') {
      onLogin('Admin');
      navigate('/admin');
    } else if (employeeId === 'system' && password === 'system123' && role === 'System Manager') {
      onLogin('System Manager');
      navigate('/system-manager');
    } else if (employeeId === 'crew' && password === 'crew123' && role === 'Crew Member') {
      onLogin('Crew Member');
      navigate('/crew-member');
    } else {
      setError('Incorrect Employee ID, Password, or Role');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-md">
        <div className="text-center mb-4">
          <img src='https://dtcpass.delhi.gov.in/images/DTC1.png' alt="DTC Logo" className="mx-auto w-24 h-24" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Employee ID</label>
            <input
              type="text"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              placeholder="Enter Employee ID"
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="Admin">Admin</option>
              <option value="System Manager">System Manager</option>
              <option value="Crew Member">Crew Member</option>
            </select>
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition duration-200"
          >
            Login
          </button>
          <div className="text-right mt-2">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Forgot Password?</a>
          </div>
        </form>
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={() => navigate('/')}>
          X
        </button>
      </div>
    </div>
  );
}

export default LoginPage;


////////////////


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const [employeeId, setEmployeeId] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('Admin');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Hardcoded credentials
//     const credentials = {
//       admin123: { password: 'adminpass', role: 'Admin' },
//       manager123: { password: 'managerpass', role: 'System Manager' },
//       crew123: { password: 'crewpass', role: 'Crew Member' },
//     };

//     if (
//       credentials[employeeId] &&
//       credentials[employeeId].password === password &&
//       credentials[employeeId].role === role
//     ) {
//       // Navigate to the respective dashboard
//       switch (role) {
//         case 'Admin':
//           navigate('/admin-dashboard');
//           break;
//         case 'System Manager':
//           navigate('/system-manager-dashboard');
//           break;
//         case 'Crew Member':
//           navigate('/crew-member-dashboard');
//           break;
//         default:
//           setError('Invalid role');
//           break;
//       }
//     } else {
//       setError('Invalid Employee ID or Password');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
//         <div className="text-center mb-6">
//           <h1 className="text-3xl font-bold">DTC Employee Login</h1>
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Employee ID</label>
//           <input
//             type="text"
//             value={employeeId}
//             onChange={(e) => setEmployeeId(e.target.value)}
//             placeholder="Enter Employee ID"
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter Password"
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Role</label>
//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           >
//             <option value="Admin">Admin</option>
//             <option value="System Manager">System Manager</option>
//             <option value="Crew Member">Crew Member</option>
//           </select>
//         </div>
//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
//         <div className="flex justify-between items-center">
//           <button
//             onClick={handleLogin}
//             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//           >
//             Login
//           </button>
//           <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
//         </div>
//       </div>
//       <button
//         className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//         onClick={() => alert('Login Page Closed')}
//       >
//         &times;
//       </button>
//     </div>
//   );
// };

// export default LoginPage;

