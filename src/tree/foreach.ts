import { bfsStack, dfs, dfsStack } from "../utils";

/**
 * 遍历方式
 */
const enum ForeachType {
  Bfs,
  DfsRecursive,
  DfsNonRecursive,
}

/**
 * 树遍历函数
 * @param node A Node width children 一个节点
 * @param cb A Function 遍历到每个节点执行函数
 * @param foreachType foreach type 遍历方式
 */
const treeForeach = (
  node: INode,
  cb: Fn,
  foreachType = ForeachType.DfsRecursive
) => {
  switch (foreachType) {
    case ForeachType.DfsRecursive:
      dfs(node, cb);
      break;
    case ForeachType.DfsNonRecursive:
      dfsStack(node, cb);
      break;
    case ForeachType.Bfs:
      bfsStack(node, cb);
      break;

    default:
      dfs(node, cb);
      break;
  }
};

export { ForeachType, treeForeach };
