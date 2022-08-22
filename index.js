const flatTree = (data, list = []) => {
  const flatList = [];
  list.push(data);
  list.push([flatList]);
  if (data.children && data.children.length) {
    for (let i = 0; i < data.children.length; i++) {
      const m = data.children[i];
      flatTree(m, flatList);
    }
  }
  delete data.children;
};
const data1 = {
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
};
const l = [];
flatTree(data1, l);
const dfsMap = (flatList) => {
  if (!flatList.length) {
    return;
  }
  console.log(flatList);
  const [obj, children] = flatList;
  const newObj = {
    name: obj.name.toUpperCase(),
  };
  if (!children) {
    return [newObj];
  }
  return [newObj, children.map(dfsMap)];
};
console.log(JSON.stringify(l));
console.log(JSON.stringify(dfsMap(l)));
