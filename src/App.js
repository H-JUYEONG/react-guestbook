import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './pages/List';
import DeleteForm from './pages/DeleteForm';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/list' element={<List />} />
          <Route path='/deleteform' element={<DeleteForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;