import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import "./style/App.css";
import ProjectInfoPage from "./Pages/ProjectInfoPage";
import SupplierGridPage from './Pages/SupplierGridPage'
import SupplierInfoPage from "./Pages/SupplierInfoPage";
import ComparePage from "./Pages/ComparePage";
import NotFoundPage from "./Pages/NotFoundPage";
import supplier_data from '../data/supplier_data.json';
import HomePage from "./Pages/HomePage";
import Header from "./components/Header/Header";
import { SidebarBox } from "./components/Sidebar/sidebarbox";

function AppContent() {
  const supplierIds = Object.keys(supplier_data.suppliers);
  const { pathname } = useLocation();
  const isDemoPage = pathname.startsWith("/app");

  return (
    <div className="app-shell">
      {isDemoPage && <SidebarBox />}

      <div className={isDemoPage ? "app-content demo-content" : "app-content"}>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<ProjectInfoPage />} />
            <Route path="/app" element={<HomePage />} />
            <Route path="/app/compare" element={<ComparePage />} />
            <Route path="/app/suppliers" element={<SupplierGridPage />} />
            {supplierIds.map((supplierId) => (
              <Route
                key={supplierId}
                path={`/app/suppliers/${supplierId}`}
                element={<SupplierInfoPage supplier_id={supplierId} />}
              />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        {isDemoPage && <Header />}
      </div>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
