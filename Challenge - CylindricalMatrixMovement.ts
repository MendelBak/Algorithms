// The required outputs for this function will always fail one of the tests, since the ones shown on the challenge description are incorrectly formatted.
// The challenge states "the second [variable] one is the x coordinates of the starting point, third one are the y coordinates of the starting point".
// This would seem to indicate that the return values should be presented in the same manner [x, y].
// However, the results provided in the challenge's first example return as [y, x] and the second example as [x, y].

function netbeez(
    gridSize: number,
    startY: number,
    startX: number,
    direction: string,
) {
    const blankSpace: string = '-';
    const cursor: string = 'X';
    let currIdx = { x: startX, y: startY };

    // Initial grid setup
    let arr: any[] = Array(gridSize)
        .fill()
        .map(() => Array(gridSize).fill(blankSpace));
    arr[startY][startX] = cursor;

    for (let i = 0; i < direction.length; i++) {
        switch (direction.substr(i, 1).toUpperCase()) {
            case 'L':
                moveXAxis(-1);
                break;
            case 'R':
                moveXAxis(1);
                break;
            case 'U':
                // Need to use reverse number for Y axis, since lower values are negative on a mathematical grid, but not in an array.
                moveYAxis(-1);
                break;
            case 'D':
                moveYAxis(1);
                break;
            default:
                break;
        }
    }

    console.log(arr, currIdx);
    return [currIdx.x, currIdx.y];

    // newLocation: (inputs: -1 || 1) = the direction to move the cursor by one position on its X axis
    function moveXAxis(moveLocation: number): void {
        //   I used a switch/case here and an if-check in the moveYAxis function even though they are very similar. I'm not sure if an switch was needed here, but it makes it easier to read and change the checking logic.
        switch (moveLocation) {
            case 1:
                if (currIdx.x + moveLocation <= arr[currIdx.x].length - 1) {
                    arr[currIdx.y][currIdx.x] = blankSpace;
                    arr[currIdx.y][currIdx.x + moveLocation] = cursor;
                    currIdx.x = currIdx.x + moveLocation;
                } else if (
                    currIdx.x + moveLocation >
                    arr[currIdx.x].length - 1
                ) {
                    arr[currIdx.y][currIdx.x] = blankSpace;
                    arr[currIdx.y][0] = cursor;
                    currIdx.x = 0;
                }
                break;
            case -1:
                if (currIdx.x > 0) {
                    arr[currIdx.y][currIdx.x] = blankSpace;
                    arr[currIdx.y][currIdx.x + moveLocation] = cursor;
                    currIdx.x = currIdx.x + moveLocation;
                } else if (currIdx.x === 0) {
                    arr[currIdx.y][currIdx.x] = blankSpace;
                    arr[currIdx.y][arr[currIdx.y].length - 1] = cursor;
                    currIdx.x = arr[currIdx.y].length - 1;
                }
                break;

            default:
                break;
        }

        return;
    }

    /**
     * Move the cursor one position on the X axis
     * @param {number (-1 || 1)} newLocation - The direction to move the cursor by one position on its Y axis
     */
    function moveYAxis(moveLocation: number): void {
        if (
            (moveLocation === 1 &&
                currIdx.y + moveLocation <= arr[currIdx.y].length - 1) ||
            (moveLocation === -1 && currIdx.y > 0)
        ) {
            arr[currIdx.y][currIdx.x] = blankSpace;
            arr[currIdx.y + moveLocation][currIdx.x] = cursor;
            currIdx.y = currIdx.y + moveLocation;
            return;
        }

        return;
    }
}

netbeez(3, 0, 0, 'RDD');
