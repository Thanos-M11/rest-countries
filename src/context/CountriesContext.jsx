import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "https://restcountries.com/v3.1";

const CountriesContext = createContext();

function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // derived state regions
  const regions = countries.reduce((acc, country) => {
    if (!acc.includes(country.region)) {
      acc.push(country.region);
    }
    return acc;
  }, []);

  const cca3Codes = countries.map((country) => country.cca3.toLowerCase());

  useEffect(function () {
    setIsLoading(true);
    async function fetchCountries() {
      try {
        const res = await fetch(`${BASE_URL}/all`);
        if (!res.ok) throw new Error("Failed to fetch countries.");
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCountries();
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        regions,
        isLoading,
        cca3Codes,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

function useCountries() {
  const context = useContext(CountriesContext);
  if (context === undefined)
    throw new Error("Countries context used outside the Countries Provider");
  return context;
}

export { CountriesProvider, useCountries, BASE_URL };
