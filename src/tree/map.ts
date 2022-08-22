// import { cloneDeep } from "lodash-es";
import { treeClone } from "../utils";
import { ForeachType, treeForeach } from "./foreach";
/**
 * 使用深拷贝不影响原树
 * @param node
 * @param cb
 * @param foreachType ForeachType
 * @returns
 */
const treeMap = (
  node: INode,
  cb: Fn,
  foreachType: ForeachType = ForeachType.DfsRecursive
) => {
  const cloneNode = treeClone(node);
  treeForeach(cloneNode, cb, foreachType);
  return cloneNode;
};

export { treeMap };
