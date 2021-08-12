import Center from './center/Center'
import Side from './sides/Side'

const Board = ({gameTiles}) => {
  const tilesStructure = [];

  const cornerClasses = ['top', 'right', 'bottom', 'left'];

  for (let c = 0; c < gameTiles.corners.length; c++) {
    tilesStructure.push(<div id={gameTiles.corners[c].id} className={gameTiles.corners[c].type} key={gameTiles.corners[c].id}>{gameTiles.corners[c].name}</div>)
    
    tilesStructure.push(<Side sides={gameTiles.sides[c]} key={c} classes={['row', cornerClasses[c], c % 2 === 0 ? 'horizontal': 'vertical']} />);
  }

  return (
    <div className="board">
      <Center />
      {tilesStructure}
    </div>
  )
}

export default Board;
