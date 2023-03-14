import Tile from "../Tile/Tile.js";

const Row = ({ tiles, rowCoord }) => {
    return (
        <div style={{
            marginTop: rowCoord === 0 && '5vh',
            display: 'flex', 
            justifyContent: 'center'
        }}>
            {
                tiles.map((tile, i) => <Tile currValue={tile} rowCoord={rowCoord} colCoord={i} />)
            }
        </div>
    );
};

export default Row;