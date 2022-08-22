import { treeCloneById } from "@lanseria/utools";
import { data2 } from "../mock";

describe("Utils 工具函数", () => {
  it("treeCloneById 拷贝并赋值唯一ID", () => {
    const idList = treeCloneById(data2);
    expect(idList).toMatchSnapshot();
  });
});
