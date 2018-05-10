export interface IGridData<T> {
    GetGridHeader() : string[];
    GetGridData(): T[];
}