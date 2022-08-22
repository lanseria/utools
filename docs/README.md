# utools

另类的 JavaScript 工具库

## tree 树类

### treeForeach 树遍历

```ts{9-16}
import { treeForeach, ForeachType } from "@lanseria/utools";
/**
 *
 * @param node A Node width children
 * @param cb A Function
 * @param foreachType foreach type
 * @returns void
 */
treeForeach(
  node,
  (n) => {
    console.log(n);
  },
  ForeachType.Bfs
);
```

### treeMap 树 Map

```ts{3-7}
import { treeMap } from "@lanseria/utools";

const newData = treeMap(node, (item: INode) => {
  item.id = item.name;
  delete item.name;
  // DO NOT Delete children
});
console.log(JSON.stringify(newData));
```

### treeToList 树转为数组

```ts{3}
import { treeToList } from "@lanseria/utools";

const list = treeToList(data2);

console.log(JSON.stringify(newData));
```

### treeToListById 树转为数组

> 需要自身有 id 属性,暂不支持自定义,扁平化后赋予 parentId

```ts{3}
import { treeToListById } from "@lanseria/utools";

const list = treeToListById(data2);

console.log(JSON.stringify(newData));
```

## list 数组类

### listToTree 扁平数据结构转 Tree

> 暂不支持自定义 parentId 与 id

```ts{3}
import { listToTree } from "@lanseria/utools";

const tree = listToTree(data4 as IObj[]);

console.log(JSON.stringify(tree));
```

## utils 工具类

### mergeProperties 对象属性覆盖

```ts{3}
import { mergeProperties } from "@lanseria/utools";

const mV = mergeProperties(oldV, newV);

console.log(JSON.stringify(mV));
```

### treeClone 拷贝

> 简单的类型深拷贝

### treeCloneById 拷贝并赋值唯一 ID

> 简单的类型深拷贝

```ts{3}
import { treeCloneById } from "@lanseria/utools";

const idList = treeCloneById(data2);

console.log(JSON.stringify(idList));
```

### normalDistribution 正态分布

> Box-Muller

```ts{3}
import { normalDistribution } from "@lanseria/utools";

const x = normalDistribution(0, 0.01);

console.log(x);
```
