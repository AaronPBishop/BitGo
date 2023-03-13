import Tile from "../Tile/Tile.js";

const Row = ({ tiles, rowCoord }) => {
    return (
        <div>
            {
                tiles.map((tile, i) => {
                    return <Tile currValue={tile} rowCoord={rowCoord} colCoord={i} />
                })
            }
        </div>
    );
};

export default Row;