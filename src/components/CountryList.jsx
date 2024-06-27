import { useCountries } from "../context/CountriesContext";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import NavBar from "./NavBar";
import { Link, useSearchParams } from "react-router-dom";
import Loader from "./Loader";

function CountryList() {
  const { countries, isLoading } = useCountries();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchedCountries =
    searchParams.get("search") === null
      ? countries
      : countries.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(searchParams.get("search").toLowerCase())
        );

  const filteredCountries =
    searchParams.get("region") === null
      ? searchedCountries
      : searchedCountries.filter(
          (country) => country.region === searchParams.get("region")
        );

  return (
    <>
      <NavBar />
      <ul className={styles.countryList}>
        {isLoading && <Loader />}
        {filteredCountries.map((item) => (
          <CountryItem country={item} key={item.cca3} />
        ))}
      </ul>
    </>
  );
}

export default CountryList;
