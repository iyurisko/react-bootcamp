import AuthPages from './pages/auth';
import Dashboard from './pages/dashboard';
import Catalog from './pages/catalog';
import CatalogByID from './pages/catalog/byId';
import NotFound from './pages/notFound';
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter,
  Outlet
} from 'react-router-dom'

function RequireAuth() {
  let auth = localStorage.getItem('access_token');

  if (!auth) {
    // cek auth logged ada atau tidak
    // jika tidak ada maka arahkan ke login pages 
    // endpoint login ===>  'baseURL/'
    return <Navigate to="/"/>;
  }

  //Renders child route's element, jika ada.
  return <Outlet />;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* PUBLIC ROUTES
          Pages yang bisa di akses oleh siapa pun pengunjung website
          */}
          <Route>
            <Route path="/" element={<AuthPages />} />
            <Route path="/catalog" >
              <Route path=":id" element={<CatalogByID />} />
              <Route index element={<Catalog />} />
            </Route>


            {/* PRIVATE ROUTES
          Pages yang hanya bisa di akses oleh user yang terotentikasi
          */}
            <Route element={<RequireAuth />}>
              <Route index path="/dashboard" element={<Dashboard />} />
            </Route>
          </Route>

           {/* NOT FOUND PAGE
           end point yang tak terdapaftar akan dialihkan ke page not found
          */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}




export default App;



