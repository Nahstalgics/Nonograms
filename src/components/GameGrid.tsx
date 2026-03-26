interface CellState {
    state: 0 | 1 | 2;
}

interface Nonogram {
    id: string;
    private: boolean;
    grid: number[][];
}