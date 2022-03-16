import LivingCell from "./types/LivingCell"

export const DEFAULT_INTERVAL = 100;

export const nextGeneration = (world: Set<LivingCell>) => {
    let newWorld: Set<LivingCell> = new Set<LivingCell>();

    for (let cell of Array.from(world)) {
        const livingNeighborCount = livingNeighbors(cell, world);

        if (livingNeighborCount === 3 || (livingNeighborCount === 2 && world.has(cell))) {
            newWorld.add(cell);
        }
    }

    return newWorld;
}

export const livingNeighbors = (cell: LivingCell, world: Set<LivingCell>) => {
    let counter = 0;
    const operations = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ];

    for (let operation of operations) {
        const [opX, opY] = operation;
        const [posX, posY] = cell;

        if(world.has([posX+opX, posY+opY])) {
            counter += 1;
        }
    }

    return counter;
}

export const randomGrid = (rows: number, cols: number) => {
    let newWorld: Set<LivingCell> = new Set<LivingCell>();

    for (let i = 0; i <= rows * cols; i++) {
        let randomInt = Math.floor(Math.random() * 3);

        if (randomInt === 0) { // 1/3 chance
            newWorld.add([Math.floor(i / cols), Math.floor(i / rows)]);
        }
    }

    return newWorld;
}


export const wrap = (rows: number, cols: number, world: Set<LivingCell>) => {
    let newWorld: Set<LivingCell> = new Set<LivingCell>();

    for (let cell of Array.from(world)) {
        if (cell[0] >= 0 && cell[0] <= rows && cell[1] >= 0 && cell[1] >= cols) {
            newWorld.add(cell);
        } else {    
            let [x, y] = cell;

            if (x < 0) {
                x = rows;
            }

            if (x > rows) {
                x = 0;
            }

            if (y > cols) {
                y = 0;
            }

            if (y < 0) {
                y = cols;
            }

            newWorld.add([x, y]);
        }
    }

    return newWorld;
}