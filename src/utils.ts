import { intersection, keys, pick } from "lodash-es";
import { config } from "./config";

function isObject(obj: INode, isReal = false) {
  if (isReal) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  } else {
    return typeof obj === "object" && obj !== null;
  }
}
/**
 * 拷贝树或者数组, 简单普通类型情况
 * @param tree 树或者树数组
 * @param hash 唯一Hash
 * @returns selft
 */
const treeClone = (
  tree: INode | IObj[],
  hash = new WeakMap()
): INode | IObj[] => {
  if (hash.has(tree)) {
    return hash.get(tree);
  }
  const obj: INode | IObj[] = Array.isArray(tree) ? [] : {};
  hash.set(tree, obj);
  for (let key in tree) {
    obj[key] = isObject(tree[key]) ? treeClone(tree[key], hash) : tree[key];
  }

  return obj;
};

/**
 * 拷贝树或者数组, 简单普通类型情况
 * @param tree 树或者树数组
 * @param hash 唯一Hash
 * @returns selft
 */
const treeCloneById = (
  tree: INode,
  hash = new WeakMap(),
  i = { idx: 0 }
): INode => {
  if (hash.has(tree)) {
    return hash.get(tree);
  }
  const obj: INode = Array.isArray(tree) ? [] : {};
  hash.set(tree, obj);
  for (let key in tree) {
    if (isObject(tree[key])) {
      obj[key] = treeCloneById(tree[key], hash, i);
    } else {
      obj["id"] = i.idx++;
      obj[key] = tree[key];
    }
  }

  return obj;
};

/**
 * 覆盖对象属性
 * @param distObject 初始化对象
 * @param srcObject 传递过来新对象
 */
const mergeProperties = <T>(distObject: T, srcObject: IObj) => {
  const distPropList = keys(distObject);
  const srcPropList = keys(srcObject);
  const propList = intersection(distPropList, srcPropList);
  return {
    ...distObject,
    ...pick(srcObject, propList),
  };
};

/**
 * 使用递归的方式
 * @param node
 * @param cb
 */
const dfs = (item: INode, cb: Fn) => {
  cb && cb(item);
  if (item.children && item.children.length) {
    // for (let i = item.children.length - 1; i >= 0; i--) {
    //   const m = item.children[i];
    //   dfs(m, cb);
    // }
    for (let i = 0; i < item.children.length; i++) {
      const m = item.children[i];
      dfs(m, cb);
    }
  }
};
/**
 * 使用递归的方式
 * @param node 需要自带 id
 * @param cb
 * @param parentId
 */
const dfsUseId = (item: INode, cb: Fn, parentId = -1) => {
  const pKey = config.parentId;
  item[pKey] = parentId;
  cb && cb(item);
  if (item.children && item.children.length) {
    // for (let i = item.children.length - 1; i >= 0; i--) {
    //   const m = item.children[i];
    //   dfs(m, cb);
    // }
    if (!item.hasOwnProperty("id")) {
      throw new Error("无ID字段");
    }
    for (let i = 0; i < item.children.length; i++) {
      const m = item.children[i];
      dfsUseId(m, cb, item.id);
    }
  }
};

/**
 * 使用非递归的方式
 * @param node
 * @param cb
 */
const dfsStack = (node: INode, cb: Fn) => {
  const stack: INode[] = [];
  // const nodes: INode[] = [];
  if (node) {
    // 推入当前处理的node
    stack.push(node);
    while (stack.length) {
      const item: INode = stack.pop() as INode;
      if (item?.children && item.children.length) {
        const children = item.children;
        // for (let i = 0; i < children.length; i++) {
        //   stack.push(children[i]);
        // }
        for (let i = children.length - 1; i >= 0; i--) {
          stack.push(children[i]);
        }
      }
      /**
       * 操作 item
       */
      cb && cb(item);
      // nodes.push(item);
    }
  }
};
/**
 * Bfs 遍历方式
 * @param node
 * @param cb
 */
const bfsStack = (node: INode, cb: Fn) => {
  const stack: INode[] = [];
  // const nodes: INode[] = [];
  if (node) {
    stack.push(node);
    while (stack.length) {
      const item: INode = stack.shift() as INode;
      if (item?.children && item.children.length) {
        const children = item.children;
        for (let i = 0; i < children.length; i++) {
          stack.push(children[i]);
        }
      }
      /**
       * 操作 item
       */
      cb && cb(item);
      // nodes.push(item)
    }
  }
};
/**
 * 正态分布
 * @param mean 均值
 * @param stdDev 方差
 * @returns
 */
const normalDistribution = (mean: number, stdDev: number) => {
  return mean + randomNormalDistribution() * stdDev;
};

const randomNormalDistribution = () => {
  let u = 0.0,
    v = 0.0,
    w = 0.0,
    c = 0.0;
  do {
    //获得两个（-1,1）的独立随机变量
    u = Math.random() * 2 - 1.0;
    v = Math.random() * 2 - 1.0;
    w = u * u + v * v;
  } while (w == 0.0 || w >= 1.0);
  //这里就是 Box-Muller转换
  c = Math.sqrt((-2 * Math.log(w)) / w);
  //返回2个标准正态分布的随机数，封装进一个数组返回
  //当然，因为这个函数运行较快，也可以扔掉一个
  //return [u*c,v*c];
  return u * c;
};

export {
  treeClone,
  treeCloneById,
  mergeProperties,
  dfs,
  dfsStack,
  bfsStack,
  dfsUseId,
  normalDistribution,
};
