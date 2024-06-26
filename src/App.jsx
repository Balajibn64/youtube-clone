import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';
import Sidebar from './Components/Sidebar/Sidebar'; // Ensure the path is correct
import { useState } from 'react';

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const [category, setCategory] = useState(0);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
