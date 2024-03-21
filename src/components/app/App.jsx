import userData from '../../userData.json';
import Profile from '../profile/Profile';
import FriendList from '../friendList/FriendList';

const friends = {
  avatar: 'https://cdn-icons-png.flaticon.com/512/1998/1998592.png',
  name: 'Mango',
  isOnline: true,
  id: 1812,
};

const App = () => {
  console.log(friends.name);
  console.log(friends);
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friend={friends} />
    </>
  );
};

export default App;

//'../assets/react.svg'

// import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" rel='noreferrer' target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" rel='noreferrer' target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
