import classes from "./CSSDeneme.module.css";

const CssDeneme = () => {
  return (
    <div className={classes.pounter}>
      <div>
        <h1>yazamaysun css yoksa</h1>
        <h2>No has hash</h2>
        <p>Bir p de buraya ko...</p>
      </div>

      <div>
        <h2>bu baska</h2>
        <p>bu bas ka</p>
      </div>
      <div className={classes.inline1}>
        <button className={classes.but1}>Kaufen</button>
        <button>Bu da Button</button>
        <div className={classes.inline1}>
          <h2>Civayte baslik</h2>
          <p>Yillar oncesi </p>
        </div>
      </div>
    </div>
  );
};

export default CssDeneme;
