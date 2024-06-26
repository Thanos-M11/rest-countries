import { useCountries } from "../context/CountriesContext";
import styles from "./CountryDetails.module.css";

import { Link, useNavigate, useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";

function CountryDetails() {
  const { countries, cca3Codes } = useCountries();
  const { cca3 } = useParams();
  const navigate = useNavigate();

  if (!cca3Codes.includes(cca3.toLowerCase())) {
    return <PageNotFound cca3={cca3} />;
  }

  const country =
    countries.find(
      (entry) => entry.cca3.toLowerCase() === cca3.toLowerCase()
    ) || {};

  const {
    name,
    population,
    region,
    subregion,
    flags,
    capital,
    borders,
    tld,
    currencies,
    languages,
  } = country;

  const nativeName =
    typeof name.nativeName === "object"
      ? name.nativeName[Object.keys(name.nativeName)[0]].official
      : name.nativeName?.official;

  const topLevelDomain =
    tld !== undefined ? tld.map((item) => item).join(", ") : "";

  const countryCurrencies = currencies
    ? Object.values(currencies)
        .map((cur) => cur.name)
        .join(",")
    : "";

  const countryLanguages = languages ? Object.values(languages).join(", ") : "";

  const countryBorders = borders ? borders.map((code) => code) : [];

  return (
    <li>
      <div className={styles.countryContainer}>
        <nav className={styles.nav}>
          <section className={styles.btn} onClick={() => navigate(-1)}>
            <svg
              data-slot="icon"
              fill="currentColor"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              ></path>
            </svg>

            <span className={styles.btnDescription}>Back</span>
          </section>
        </nav>
        <div className={styles.detailsContainer}>
          <aside className={styles.asideImg}>
            <img src={flags.svg} alt={flags.alt} />
          </aside>
          <aside className={styles.asideInfo}>
            <p className={styles.countryName}>{name.common}</p>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <span>Native Name:</span>
                <span>{nativeName}</span>
              </li>
              <li className={styles.infoItem}>
                <span>Population:</span>
                <span>{Intl.NumberFormat("en-US").format(population)}</span>
              </li>
              <li className={styles.infoItem}>
                <span>Region:</span>
                <span>{region}</span>
              </li>
              <li className={styles.infoItem}>
                <span>Sub Region:</span>
                <span>{subregion}</span>
              </li>
              <li className={styles.infoItem}>
                <span>Capital:</span>
                <span>{capital}</span>
              </li>
              <li className={styles.infoItem}>
                <span>Top Level Domain:</span>
                <span>{topLevelDomain}</span>
              </li>
              <li className={styles.infoItem}>
                <span>Currencies:</span>
                <span>{countryCurrencies}</span>
              </li>
              <li className={styles.infoItem}>
                <span>Languages:</span>
                <span>{countryLanguages}</span>
              </li>
            </ul>
            <div className={styles.borderCountries}>
              <span className={`${styles.infoItem} ${styles.borderHeading}`}>
                Border Countries:{" "}
              </span>
              {countryBorders.length > 0 && (
                <ul className={styles.borderList}>
                  {countryBorders.map((code) => (
                    <Borders key={code} cca3={code} />
                  ))}
                </ul>
              )}
            </div>
          </aside>
        </div>
      </div>
    </li>
  );
}

function Borders({ cca3 }) {
  const { countries } = useCountries();

  const country = countries.find(
    (country) => country.cca3.toLowerCase() === cca3.toLowerCase()
  ).name.common;

  return (
    <div>
      <Link
        className={styles.borderItem}
        to={`/countries/${cca3.toLowerCase()}`}
      >
        {country}
      </Link>
    </div>
  );
}

export default CountryDetails;
