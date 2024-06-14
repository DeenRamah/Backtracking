class HamiltonianCycle {
    private graph: number[][];
    private V: number;
    private path: number[];

    constructor(graph: number[][], V: number) {
        this.graph = graph;
        this.V = V;
        this.path = Array(V).fill(-1);
    }

    private isSafe(v: number, pos: number): boolean {
        if (this.graph[this.path[pos - 1]][v] === 0) return false;
        for (let i = 0; i < pos; i++) {
            if (this.path[i] === v) return false;
        }
        return true;
    }

    private hamCycleUtil(pos: number): boolean {
        if (pos === this.V) {
            if (this.graph[this.path[pos - 1]][this.path[0]] === 1) return true;
            return false;
        }
        for (let v = 1; v < this.V; v++) {
            if (this.isSafe(v, pos)) {
                this.path[pos] = v;
                if (this.hamCycleUtil(pos + 1)) return true;
                this.path[pos] = -1;
            }
        }
        return false;
    }

    public solve(): void {
        this.path[0] = 0;
        if (!this.hamCycleUtil(1)) {
            console.log("Solution does not exist");
        } else {
            this.printSolution();
        }
    }

    private printSolution(): void {
        console.log("Solution Exists: Following is one Hamiltonian Cycle");
        for (let i = 0; i < this.V; i++) {
            console.log(this.path[i] + " ");
        }
        console.log(this.path[0] + " ");
    }
}

const graph = [
    [0, 1, 0, 1, 0],
    [1
