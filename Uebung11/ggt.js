console.time('calcGGTS')

const ggts = [];
const wasmInstance =
      new WebAssembly.Instance(wasmModule, {});
const { ggt } = wasmInstance.exports;
for (let i = 1; i < 100; i++) {
  for (let j = 1; j < 100; j++) {
  	ggts.push(
      {"x": i,
       "y": j,
       "ggt":ggt(i, j)
      })
}
}
console.timeEnd('calcGGTS')
console.log(ggts[10].ggt);