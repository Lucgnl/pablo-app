import Layout from "./components/layout/Layout";
import { Routes, Route } from 'react-router-dom'
import AllSus from "./pages/AllSus";
import AllPablo from "./pages/AllPablo"

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/all' element={<AllPablo />} />
          <Route path='/all-sus' element={<AllSus />} />
        </Routes>
      </Layout>
    </div>  
  );
}

export default App;
