import { useSelector } from 'react-redux';

const Instructions = () => {
    const clickedInstructions = useSelector(state => state.menu.clickedInstructions);
    
    return (
        <div style={{display: clickedInstructions ? 'flex' : 'none', justifyContent: 'center', flexWrap: 'wrap'}}>
            <p className='instructions' style={{width: '20vw', marginTop: '-6vh'}}>
                Each row and column must contain an equal amount of red tiles and blue tiles.
            </p>

            <p className='instructions'>
                Each row and column must be unique.
            </p>

            <p className='instructions' style={{marginBottom: '6vh'}}>
                More than two of the same colored tiles placed consecutively in a row or column are not allowed.
            </p>
        </div>
    );
};

export default Instructions;