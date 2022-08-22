interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

interface PromiseFn<T = any, R = T> {
  (...arg: T[]): Promise<R>;
}

interface IObj<T = any> {
  [key: string]: T;
  [key: number]: T;
}

interface INode extends IObj {
  children?: INode[];
}

interface PList extends IObj {
  parentId: number;
  id: number;
}
interface PNode extends INode {
  parentId: number;
  id: number;
}
