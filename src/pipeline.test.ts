// src/pipeline.test.ts
import { expect, test } from 'vitest';

const double = (x: number): number => x * 2;
const square = (x: number): number => x * x;
const add = (x: number, y: number): number => x + y;

test('パイプライン演算子のテスト', () => {
    const result1 = 5|>double(#)|>square(#);
  expect(result1).toBe(100);

  const result2 = 3 |> ((x) => add(x, 2))(#) |> square(#);
  expect(result2).toBe(25);
});

// 複数の関数を連続して適用する
test('複数の関数を連続して適用する', () => {
  const result = 10 |> double(#) |> square(#) |> ((x) => add(x, 5))(#);
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