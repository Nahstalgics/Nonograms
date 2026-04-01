interface CellState {
    state: 0 | 1 | 2;
    rgb: number;
}

interface Nonogram {
    id: string;
    private: boolean;
    grid: number[][];
}