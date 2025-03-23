// src/pipeline.test.ts
import { expect, test } from 'vitest';
const double = x => x * 2;
const square = x => x * x;
const add = (x, y) => x + y;
test('パイプライン演算子のテスト', () => {
  const result1 = square(double(5));
  expect(result1).toBe(100);
  const result2 = square((x => add(x, 2))(3));
  expect(result2).toBe(25);
});

// 複数の関数を連続して適用する
test('複数の関数を連続して適用する', () => {
  var _ref;
  const result = (_ref = square(double(10)), (x => add(x, 5))(_ref));
  expect(result).toBe(405);
});

// // 部分適用と組み合わせる
// const addPartial = (y: number) => (x: number) => add(x, y);

// test('部分適用と組み合わせる', () => {
//   const result = 7 |> addPartial(3) |> square;
//   expect(result).toBe(100);
// });

// // 非同期処理と組み合わせる
// const asyncDouble = async (x: number): Promise<number> => x * 2;

// test('非同期処理と組み合わせる', async () => {
//   const result = await Promise.resolve(4) |> asyncDouble |> square;
//   expect(result).toBe(64);
// });

// // トピックトークン (^^) を使用する例を追加
// test('トピックトークン (^^) を使用する', () => {
//   const result = 5 |> double |> ((x) => add(x, 3)) |> square(^^);
//   expect(result).toBe(169); // (5 * 2 + 3) ** 2 = 13 ** 2 = 169
// });

// // トピックトークン (^^) を使用した非同期処理の例を追加
// test('トピックトークン (^^) を使用した非同期処理', async () => {
//   const result = await Promise.resolve(4) |> asyncDouble |> ((x) => add(x, 2)) |> square(^^);
//   expect(result).toBe(144); // (4 * 2 + 2) ** 2 = 10 ** 2 = 100
// });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJleHBlY3QiLCJ0ZXN0IiwiZG91YmxlIiwieCIsInNxdWFyZSIsImFkZCIsInkiLCJyZXN1bHQxIiwidG9CZSIsInJlc3VsdDIiLCJfcmVmIiwicmVzdWx0Il0sInNvdXJjZXMiOlsiLi4vc3JjL3BpcGVsaW5lLnRlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3BpcGVsaW5lLnRlc3QudHNcbmltcG9ydCB7IGV4cGVjdCwgdGVzdCB9IGZyb20gJ3ZpdGVzdCc7XG5cbmNvbnN0IGRvdWJsZSA9ICh4OiBudW1iZXIpOiBudW1iZXIgPT4geCAqIDI7XG5jb25zdCBzcXVhcmUgPSAoeDogbnVtYmVyKTogbnVtYmVyID0+IHggKiB4O1xuY29uc3QgYWRkID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyID0+IHggKyB5O1xuXG50ZXN0KCfjg5HjgqTjg5fjg6njgqTjg7PmvJTnrpflrZDjga7jg4bjgrnjg4gnLCAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0MSA9IDV8PmRvdWJsZSgjKXw+c3F1YXJlKCMpO1xuICBleHBlY3QocmVzdWx0MSkudG9CZSgxMDApO1xuXG4gIGNvbnN0IHJlc3VsdDIgPSAzIHw+ICgoeCkgPT4gYWRkKHgsIDIpKSgjKSB8PiBzcXVhcmUoIyk7XG4gIGV4cGVjdChyZXN1bHQyKS50b0JlKDI1KTtcbn0pO1xuXG4vLyDopIfmlbDjga7plqLmlbDjgpLpgKPntprjgZfjgabpgannlKjjgZnjgotcbnRlc3QoJ+ikh+aVsOOBrumWouaVsOOCkumAo+e2muOBl+OBpumBqeeUqOOBmeOCiycsICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gMTAgfD4gZG91YmxlKCMpIHw+IHNxdWFyZSgjKSB8PiAoKHgpID0+IGFkZCh4LCA1KSkoIyk7XG4gIGV4cGVjdChyZXN1bHQpLnRvQmUoNDA1KTtcbn0pO1xuXG4vLyAvLyDpg6jliIbpgannlKjjgajntYTjgb/lkIjjgo/jgZvjgotcbi8vIGNvbnN0IGFkZFBhcnRpYWwgPSAoeTogbnVtYmVyKSA9PiAoeDogbnVtYmVyKSA9PiBhZGQoeCwgeSk7XG5cbi8vIHRlc3QoJ+mDqOWIhumBqeeUqOOBqOe1hOOBv+WQiOOCj+OBm+OCiycsICgpID0+IHtcbi8vICAgY29uc3QgcmVzdWx0ID0gNyB8PiBhZGRQYXJ0aWFsKDMpIHw+IHNxdWFyZTtcbi8vICAgZXhwZWN0KHJlc3VsdCkudG9CZSgxMDApO1xuLy8gfSk7XG5cbi8vIC8vIOmdnuWQjOacn+WHpueQhuOBqOe1hOOBv+WQiOOCj+OBm+OCi1xuLy8gY29uc3QgYXN5bmNEb3VibGUgPSBhc3luYyAoeDogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+ID0+IHggKiAyO1xuXG4vLyB0ZXN0KCfpnZ7lkIzmnJ/lh6bnkIbjgajntYTjgb/lkIjjgo/jgZvjgosnLCBhc3luYyAoKSA9PiB7XG4vLyAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UucmVzb2x2ZSg0KSB8PiBhc3luY0RvdWJsZSB8PiBzcXVhcmU7XG4vLyAgIGV4cGVjdChyZXN1bHQpLnRvQmUoNjQpO1xuLy8gfSk7XG5cbi8vIC8vIOODiOODlOODg+OCr+ODiOODvOOCr+ODsyAoXl4pIOOCkuS9v+eUqOOBmeOCi+S+i+OCkui/veWKoFxuLy8gdGVzdCgn44OI44OU44OD44Kv44OI44O844Kv44OzICheXikg44KS5L2/55So44GZ44KLJywgKCkgPT4ge1xuLy8gICBjb25zdCByZXN1bHQgPSA1IHw+IGRvdWJsZSB8PiAoKHgpID0+IGFkZCh4LCAzKSkgfD4gc3F1YXJlKF5eKTtcbi8vICAgZXhwZWN0KHJlc3VsdCkudG9CZSgxNjkpOyAvLyAoNSAqIDIgKyAzKSAqKiAyID0gMTMgKiogMiA9IDE2OVxuLy8gfSk7XG5cbi8vIC8vIOODiOODlOODg+OCr+ODiOODvOOCr+ODsyAoXl4pIOOCkuS9v+eUqOOBl+OBn+mdnuWQjOacn+WHpueQhuOBruS+i+OCkui/veWKoFxuLy8gdGVzdCgn44OI44OU44OD44Kv44OI44O844Kv44OzICheXikg44KS5L2/55So44GX44Gf6Z2e5ZCM5pyf5Yem55CGJywgYXN5bmMgKCkgPT4ge1xuLy8gICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLnJlc29sdmUoNCkgfD4gYXN5bmNEb3VibGUgfD4gKCh4KSA9PiBhZGQoeCwgMikpIHw+IHNxdWFyZSheXik7XG4vLyAgIGV4cGVjdChyZXN1bHQpLnRvQmUoMTQ0KTsgLy8gKDQgKiAyICsgMikgKiogMiA9IDEwICoqIDIgPSAxMDBcbi8vIH0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxTQUFTQSxNQUFNLEVBQUVDLElBQUksUUFBUSxRQUFRO0FBRXJDLE1BQU1DLE1BQU0sR0FBSUMsQ0FBUyxJQUFhQSxDQUFDLEdBQUcsQ0FBQztBQUMzQyxNQUFNQyxNQUFNLEdBQUlELENBQVMsSUFBYUEsQ0FBQyxHQUFHQSxDQUFDO0FBQzNDLE1BQU1FLEdBQUcsR0FBR0EsQ0FBQ0YsQ0FBUyxFQUFFRyxDQUFTLEtBQWFILENBQUMsR0FBR0csQ0FBQztBQUVuREwsSUFBSSxDQUFDLGVBQWUsRUFBRSxNQUFNO0VBQ3hCLE1BQU1NLE9BQU8sR0FBaUJILE1BQU0sQ0FBakJGLE1BQU0sQ0FBVCxDQUFXLENBQVcsQ0FBQztFQUN6Q0YsTUFBTSxDQUFDTyxPQUFPLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQztFQUV6QixNQUFNQyxPQUFPLEdBQWlDTCxNQUFNLENBQS9CLENBQUVELENBQUMsSUFBS0UsR0FBRyxDQUFDRixDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQXRCLENBQXlCLENBQWEsQ0FBQztFQUN2REgsTUFBTSxDQUFDUyxPQUFPLENBQUMsQ0FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUMxQixDQUFDLENBQUM7O0FBRUY7QUFDQVAsSUFBSSxDQUFDLGdCQUFnQixFQUFFLE1BQU07RUFBQSxJQUFBUyxJQUFBO0VBQzNCLE1BQU1DLE1BQU0sSUFBQUQsSUFBQSxHQUFzQk4sTUFBTSxDQUFuQkYsTUFBTSxDQUFaLEVBQWMsQ0FBYSxDQUFDLEVBQUksQ0FBRUMsQ0FBQyxJQUFLRSxHQUFHLENBQUNGLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQU8sSUFBRyxDQUFDO0VBQ3BFVixNQUFNLENBQUNXLE1BQU0sQ0FBQyxDQUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQzFCLENBQUMsQ0FBQzs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiaWdub3JlTGlzdCI6W119