import { treeClone, treeCloneById, treeToListById } from "@lanseria/utools";
/**
 * 多树
 */
export const data1 = [
  {
    name: "a",
    children: [
      {
        name: "a1",
        children: [
          {
            name: "a11",
          },
          {
            name: "a12",
          },
        ],
      },
      {
        name: "a2",
        children: [
          {
            name: "a21",
          },
          {
            name: "a22",
          },
        ],
      },
      {
        name: "a3",
        children: [
          {
            name: "a31",
          },
          {
            name: "a32",
          },
        ],
      },
    ],
  },
  {
    name: "b",
    children: [
      {
        name: "b1",
        children: [
          {
            name: "b11",
          },
          {
            name: "b12",
          },
        ],
      },
      {
        name: "b2",
        children: [
          {
            name: "b21",
          },
          {
            name: "b22",
          },
        ],
      },
      {
        name: "b3",
        children: [
          {
            name: "b31",
          },
          {
            name: "b32",
          },
        ],
      },
    ],
  },
];
/**
 * 单树
 */
export const data2 = treeClone(data1[0]);
/**
 * 有唯一ID的树
 */
export const data3 = treeCloneById(data2);
/**
 * 有pid与id的扁平列表
 */
export const data4 = treeClone(treeToListById(data3));
