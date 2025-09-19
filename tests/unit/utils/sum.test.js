// 导入要测试的sum函数
const { sum } = require('../../../src/utils/sum');

// describe: Jest的测试套件函数，用于组织相关的测试用例
// 第一个参数是测试套件的名称，第二个参数是包含测试用例的函数
describe('sum', () => {
  // test: Jest的测试用例函数，用于定义单个测试
  // 第一个参数是测试用例的描述，第二个参数是测试逻辑
  test('returns 1 when first parameter is 1', () => {
    // 执行被测试的函数
    const result = sum(1, 5);

    // expect: Jest的断言函数，用于验证结果是否符合预期
    // toBe: 精确匹配断言，检查值是否完全相等（使用 === 比较）
    expect(result).toBe(1);
  });

  test('returns 1 when first parameter is 1 and second is 0', () => {
    const result = sum(1, 0);

    expect(result).toBe(1);
  });

  test('returns 1 when first parameter is 1 and second is negative', () => {
    const result = sum(1, -10);

    expect(result).toBe(1);
  });

  test('returns sum of two positive numbers when first is not 1', () => {
    const result = sum(2, 3);

    expect(result).toBe(5);
  });

  test('returns sum of two negative numbers when first is not 1', () => {
    const result = sum(-2, -3);

    expect(result).toBe(-5);
  });

  test('returns sum when first is positive and second is negative', () => {
    const result = sum(5, -3);

    expect(result).toBe(2);
  });

  test('returns sum when first is negative and second is positive', () => {
    const result = sum(-5, 3);

    expect(result).toBe(-2);
  });

  test('returns first number when second is 0 and first is not 1', () => {
    const result = sum(5, 0);

    expect(result).toBe(5);
  });

  test('returns second number when first is 0', () => {
    const result = sum(0, 7);

    expect(result).toBe(7);
  });

  test('returns 0 when both parameters are 0', () => {
    const result = sum(0, 0);

    expect(result).toBe(0);
  });

  test('handles decimal numbers when first is not 1', () => {
    const result = sum(2.5, 3.7);

    // toBeCloseTo: 用于比较浮点数的断言，避免浮点数精度问题
    // 第一个参数是期望值，第二个参数（可选）是精度位数
    expect(result).toBeCloseTo(6.2);
  });

  test('returns 1 when first parameter is 1 and second is decimal', () => {
    const result = sum(1, 3.14);

    expect(result).toBe(1);
  });

  test('handles large numbers when first is not 1', () => {
    const result = sum(1000000, 2000000);

    expect(result).toBe(3000000);
  });

  test('returns 1 when first parameter is 1 and second is large number', () => {
    const result = sum(1, 1000000);

    expect(result).toBe(1);
  });
});
