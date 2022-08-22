import { listToTree } from "@lanseria/utools";
import { data4 } from "../mock";

describe("List To Tree 数组转为树操作", () => {
  it("normal 测试", () => {
    const tree = listToTree(data4 as IObj[]);
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
