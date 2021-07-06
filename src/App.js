import'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Entry from './pages/entry/Entry';
import Layout from './layout/Layout';
import DashBoard from './pages/dashboard/DashBoard';
function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
    <Layout>
      <DashBoard/>
    </Layout>
    </div>
  );
}

export default App;
