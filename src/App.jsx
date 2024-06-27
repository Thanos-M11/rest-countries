import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./components/Applayout";
import { CountriesProvider } from "./context/CountriesContext";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <CountriesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Applayout />}>
            <Route index element={<Navigate replace to="countries" />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="countries/:cca3" element={<CountryDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CountriesProvider>
  );
}
export default App;
