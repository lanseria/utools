import { treeForeach, ForeachType } from "@lanseria/utools";
import { data1, data2 } from "../mock";

describe("Tree Foreach 树循环", () => {
  describe("Dfs 深度遍历", () => {
    describe("Recursive 递归式", () => {
      it("List.length", () => {
        const list: INode[] = [];
        treeForeach(data2, (n) => {
          list.push(n);
        });
        expect(list.length).toBe(10);
        const nameList = list.map((m) => m.name);
        expect(nameList).toMatchSnapshot();
      });

      it("TreeList.length", () => {
        const treeList: INode[] = [];
        data1.map((m) => {
          treeForeach(m, (n) => {
            treeList.push(n);
          });
        });
        expect(treeList.length).toBe(20);
      });
    });

    describe("Non-Recursive 非递归式", () => {
      const treeForeachNonRecursive = (node: INode, cb: Fn) => {
        treeForeach(node, cb, ForeachType.DfsNonRecursive);
      };
      it("List.length", () => {
        const list: INode[] = [];
        treeForeachNonRecursive(data2, (n) => {
          list.push(n);
        });
        expect(list.length).toBe(10);
        const nameList = list.map((m) => m.name);
        expect(nameList).toMatchSnapshot();
      });

      it("TreeList.length", () => {
        const treeList: INode[] = [];
        data1.map((m) => {
          treeForeachNonRecursive(m, (n) => {
            treeList.push(n);
          });
        });
        expect(treeList.length).toBe(20);
      });
    });
  });
  describe("Bfs 广度遍历", () => {
    const treeForeachBfs = (node: INode, cb: Fn) => {
      treeForeach(node, cb, ForeachType.Bfs);
    };
    it("List.length", () => {
      const list: INode[] = [];
      treeForeachBfs(data2, (n) => {
        list.push(n);
      });
      expect(list.length).toBe(10);
      const nameList = list.map((m) => m.name);
      expect(nameList).toMatchSnapshot();
    });

    it("TreeList.length", () => {
      const treeList: INode[] = [];
      data1.map((m) => {
        treeForeachBfs(m, (n) => {
          treeList.push(n);
        });
      });
      expect(treeList.length).toBe(20);
    });
  });
});
