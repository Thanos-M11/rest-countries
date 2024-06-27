import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const { name, population, region, capital, flags } = country;

  const flagAlt = country.flags.alt || `flag of ${name.common}`;

  return (
    <li className={styles.cartItem}>
      <div className={styles.imgContainer}>
        <img className={styles.cartItemImg} src={flags.svg} alt={flagAlt} />
      </div>
      <ul className={styles.cartItemSummary}>
        <li className={styles.cartItemHeading}>{name.common}</li>
        <li className={styles.cartItemSummaryLine}>
          <span>Population: </span>
          <span>{Intl.NumberFormat("en-US").format(population)}</span>
        </li>
        <li className={styles.cartItemSummaryLine}>
          <span>Region: </span>
          <span>{region}</span>
        </li>
        <li className={styles.cartItemSummaryLine}>
          <span>Capital:</span>
          <span>{capital}</span>
        </li>
      </ul>
    </li>
  );
}

export default CountryItem;
