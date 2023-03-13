import Tile from "../Tile/Tile.js";

const Row = ({ tiles, rowCoord }) => {
    return (
        <div style={{display: 'flex'}}>
            {
                tiles.map((tile, i) => {
                    return <Tile currValue={tile} rowCoord={rowCoord} colCoord={i} />
                })
            }
        </div>
    );
};

export default Row;