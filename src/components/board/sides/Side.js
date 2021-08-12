import SideRow from './side-row/Side-Row'

const Side = (row) => {

  return (
    <>
      <ul className={row.classes.join(' ')}>
        <SideRow items={row.sides} />
      </ul>
    </>
  );
};

export default Side;
