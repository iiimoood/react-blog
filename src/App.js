import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Post from './components/pages/Post';
import AddPost from './components/pages/AddPost';
import EditPost from './components/pages/EditPost';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/post/add" element={<AddPost />} />
      <Route path="/post/edit/:id" element={<EditPost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
