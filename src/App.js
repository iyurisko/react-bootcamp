import AuthPages from './pages/auth';
import Dashboard from './pages/dashboard';
import Catalog from './pages/catalog';
import CatalogByID from './pages/catalog/byId';
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  BrowserRouter,
  Outlet
} from 'react-router-dom'

function NotFound() {
  return (
    <div className="home">
      <p>
        NOT FOUND 404
        <br />
        return to <a href='/'> HomePage </a> ?
      </p>
    </div>
  );
}

function RequireAuth() {
  let auth = sessionStorage.getItem('logged');
  let location = useLocation();

  if (!auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <Outlet />;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<AuthPages />} />
            <Route path="/catalog" >
              <Route path=":id" element={<CatalogByID />} />
              <Route index element={<Catalog />} />
            </Route>
            <Route element={<RequireAuth />}>
              <Route index path="/dashboard" element={<Dashboard />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}




export default App;



