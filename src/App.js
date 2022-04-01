import Layout from './components/layout/Layout';
import { Routes, Route } from 'react-router-dom';
import AllSus from './pages/AllSus';
import AllPablo from './pages/AllPablo';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/all' element={<AllPablo />} />
          <Route path='/all-sus' element={<AllSus />} />
          <Route path='/' element={<Welcome />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
