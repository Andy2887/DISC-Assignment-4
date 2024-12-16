import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/HomePage/Home';
import Profile from './components/ProfilePage/Profile';
import ProfileList from './components/ProfileListPage/ProfileList';
import About from './components/AboutPage/About';
import Create from './components/CreatePage/Create';



// the main function
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profiles" element={<ProfileList />} />
          <Route path="create" element={<Create />} />
          <Route path="profiles/:profileID" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
