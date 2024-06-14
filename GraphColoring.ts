class GraphColoring {
    private graph: number[][];
    private V: number;
    private colors: number[];

    constructor(graph: number[][], V: number) {
        this.graph = graph;
        this.V = V;
        this.colors = Array(V).fill(-1);
    }

    private isSafe(v: number, color: number): boolean {
        for (let i = 0; i < this.V; i++) {
            if (this.graph[v][i] === 1 && this.colors[i] === color) return false;
        }
        return true;
    }

    private graphColoringUtil(v: number, m: number): boolean {
        if (v === this.V) return true;
        for (let c = 1; c <= m; c++) {
            if (this.isSafe(v, c)) {
                this.colors[v] = c;
                if (this.graphColoringUtil(v + 1, m)) return true;
                this.colors[v] = -1;
            }
        }
        return false;
    }

    public solve(m: number): void {
        if (this.graphColoringUtil(0, m)) {
            this.printSolution();
        } else {
            console.log("No solution exists");
        }
    }

    private printSolution(): void {
        console.log("Solution Exists: Following are the assigned colors");
        for (let i = 0; i < this.V; i++) {
            console.log("Vertex " + i + " -> Color " + this.colors[i]);
        }
    }
}

const graph = [
    [0, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 1],
    [1, 0, 1, 0]
];
const V = 4;
const m = 3; // Number of colors

const graphColoring = new GraphColoring(graph, V);
graphColoring.solve(m);
