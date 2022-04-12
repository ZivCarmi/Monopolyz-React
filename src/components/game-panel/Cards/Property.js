import "../../../Card.css";

const rentLabels = [
  "Rent",
  "With 1 House",
  "With 2 Houses",
  "With 3 Houses",
  "With 4 Houses",
  "With 1 Hotel",
];

// this component should be only purchase card template

// we check here the type of the tile; could be property or airport
// if it's property we make another component to output all it's unique properties (like house cost etc)
// if it's airport we do the same, output unique properties

const Property = ({ tile }) => {
  return (
    <div className={`${tile.type} card-inner`}>
      <div className="color" style={{ backgroundColor: tile.color }}>
        <h2 className="name">{tile.name}</h2>
      </div>
      <div className="card-info">
        <ul className="property-info">
          <li className="rent">
            <ul className="rent-list">
              {tile.rent.map((rent, key) => {
                return (
                  <li key={key} className="row">
                    <span className="label">{rentLabels[key]}</span>
                    <span className="value">{rent}$</span>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="row">
            <span className="label">House cost:</span>
            <span className="value">{tile.houseCost}$</span>
          </li>
        </ul>
      </div>
      <div className="card-actions">
        <button type="button" className="purchase">
          Purchase
          <div className="price">{tile.cost}$</div>
        </button>
      </div>
    </div>
  );
};

export default Property;
