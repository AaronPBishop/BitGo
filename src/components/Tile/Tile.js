const Tile = ({ currValue, rowCoord, colCoord }) => {
    return (
        <div
        style={{
            color: currValue < 1 ? 'red' : 'blue',
            width: '6vw',
            height: '3vh',
            borderRadius: '1vw'
        }}>
        </div>
    );
};

export default Tile;