import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './pages/List';
import ItemGuest from './pages/ItemGuest';
import DeleteForm from './pages/DeleteForm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/list' element={<List />} />
          <Route path='/itemguest' element={<ItemGuest />} />
          <Route path='/deleteform/:no' element={<DeleteForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;