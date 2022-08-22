import { treeToList, treeToListById } from "@lanseria/utools";
import { data2, data3 } from "../mock";

describe("Tree To List 树转为数组操作", () => {
  it("无ID", () => {
    const list = treeToList(data2);
    expect(list).toMatchSnapshot();
  });

  it("有ID", () => {
    const list = treeToListById(data3);
    expect(list).toMatchSnapshot();
  });
});
