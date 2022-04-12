const SideRow = ({ items }) => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <li
            className={`${item.type} tile`}
            key={index}
            index={item.index}
            id={item.index}
          >
            <button type="button" className="view-place">
              <span
                className="description"
                style={{ backgroundColor: item.color }}
              ></span>
              <div className="landing-spot">{item.name}</div>
            </button>
          </li>
        );
      })}
    </>
  );
};

export default SideRow;
