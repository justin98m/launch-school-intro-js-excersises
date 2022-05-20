// Indirectly Replace the 6 in the following code with 606
let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj.bar[3].xyz = 606;

console.log(JSON.stringify(obj,null,2));
