import { treeMap } from "@lanseria/utools";
import { isEqualWith } from "lodash-es";
import { data2 } from "../mock";

describe("Tree Map 树循环操作", () => {
  it("更换属性名", () => {
    const newData = treeMap(data2, (item: INode) => {
      item.id = item.name;
      delete item.name;
    });
    const res = isEqualWith(data2, newData, (objValue, othValue) => {
      if (objValue.name == othValue.id) {
        return true;
      }
    });
    expect(res).toBe(true);
  });
});
