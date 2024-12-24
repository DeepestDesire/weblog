import data from '../tasks/weChat.json';
import moment from 'moment';

enum InOrOut {
  income = '收入',
  consumption = '支出',
  other = '其他',
}
export type SourceDataType = typeof data;

export type TransactionKey = keyof SourceDataType[0];

// 统计所有消费金额
export function getTotalConsumption(data: SourceDataType) {
  const totalConsumption = getTotalInOrOut(data, InOrOut.consumption);
  const totalIncome = getTotalInOrOut(data, InOrOut.income);
  const totalOther = getTotalInOrOut(data, InOrOut.other);

  console.log('types', totalConsumption, totalIncome, totalOther);

  const consumptionData = filterData(data, 'inOrOut', InOrOut.consumption);
  const incomeData = filterData(data, 'inOrOut', InOrOut.income);
  const otherData = filterData(data, 'inOrOut', InOrOut.other);

  const consumptionData1 = filterData(data, 'transactionType', '');

  console.log('consumptionData', consumptionData);
  console.log('consumptionData', consumptionData1);
  console.log('incomeData', incomeData);
  console.log('otherData', otherData);

  const total = data.reduce(
    (acc, item) =>
      // 只统计支出
      item.inOrOut === '支出' ? acc + Number(item.amountCNY) : acc,
    0
  );
  return total;
}

// 获取一年中消费最高的5笔交易
export function getTop5Consumption(data: SourceDataType) {
  const consumptionData = filterData(data, 'inOrOut', InOrOut.consumption);
  const sortedData = consumptionData.sort((a, b) => Number(b.amountCNY) - Number(a.amountCNY));
  return sortedData.slice(0, 5) as SourceDataType;
}

// 根据2024年12个月，统计每个月消费的总金额
export function getMonthlyConsumption(data: SourceDataType) {
  const monthlyConsumption = Array(12).fill(0); // 初始化12个月的消费总额为0
  data.forEach((item) => {
    const month = moment(item.transactionTime).month(); // 获取月份（0-11）
    if (item.inOrOut === InOrOut.consumption) {
      monthlyConsumption[month] += Number(item.amountCNY); // 累加消费金额
    }
  });
  console.log('monthlyConsumption', monthlyConsumption);

  return monthlyConsumption; // 返回每个月的消费总额
}

export function getDataForSpecifyMonth(data: SourceDataType, month: number) {
  return data.filter((item) => moment(item.transactionTime).month() === month);
}

// 统计 data 中三种 inOrOut 类型的数据
export function getTotalInOrOut(data: SourceDataType, inOrOut: InOrOut) {
  const total = data.reduce((acc, item) => (item.inOrOut === inOrOut ? acc + Number(item.amountCNY) : acc), 0);
  return total;
}

// 获取 data 中三种 inOrOut 类型的原始数据
export function filterData(data: SourceDataType, type: TransactionKey, value: SourceDataType[0][TransactionKey]) {
  return data.filter((item) => item[type] === value);
}

// 判断是支出还是收入
export function isIncome(params: string) {
  if (params === '支出') {
    return -1;
  }
  return 1;
}

// 获取列表中数据所有的种类并去重
export function getTypes(data: SourceDataType, type: TransactionKey) {
  const types = data.map((item) => item[type]);
  return [...new Set(types)];
}

// 根据 12个月份来统计 data 中每个月的支出和收入，使用 moment 日期处理库 来计算 2024 年 12 个月份的支出和收入
// 筛选出 2024 年 12 个月份的支出和收入
export function getMonthData(data: SourceDataType) {
  const monthData = data.map((item) => moment(item.transactionTime).format('MM'));
  return monthData;
}
