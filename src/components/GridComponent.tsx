import LivingCell from "../types/LivingCell"
import { Grid, Cell } from "../styled-components"

interface GridComponentProps {
    rows: number;
    cols: number;
    world: Set<LivingCell>;
}

function generateGrid(rows: number, cols: number, world: Set<LivingCell>) {
    let grid = Array(rows * cols).fill(false);

    world.forEach((cell: LivingCell) => {
        let [x, y] = cell;

        if (x >= 0 && x <= cols && y >= 0 && y <= rows) {
            grid[x * y] = true;
        }
    });

    return grid;
}

const GridComponent = (props: GridComponentProps) => {
    const grid = generateGrid(props.rows, props.cols, props.world);
    let counter = 0;

    return(
        <Grid
            rows={props.rows}
            cols={props.cols}
            size='10px'
        >
            {grid.map((cell: boolean, index: number) => {
                
                return( 
                    <Cell
                        living={cell}
                        id={`cell_${index}`}
                        key={counter++}
                    />)
                })
            }
       
        </Grid>
    )
}

export default GridComponent;