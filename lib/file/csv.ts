import Papa from 'papaparse';

export const parseCSVFile = async (file: File) => {
  return await new Promise(async (resolve, reject) => {
    Papa.parse(file, {
      encoding: 'gb18030',
      header: false, // 将 CSV 第一行作为字段名
      complete: function (results) {
        convertToJsonString(results);
        return results;
      },
    });
  });
};

// 设置 workerSrc

export const parsePDFTable = async (file: File) => {
  // return new Promise((resolve, reject) => {
  //   const pdfParser = new pdf2json();
  //   pdfParser.on('pdfParser_dataError', (errData) => reject(errData.parserError));
  //   pdfParser.on('pdfParser_dataReady', (pdfData) => {
  //     const tableData = extractTableData(pdfData);
  //     resolve(tableData);
  //   });
  //   pdfParser.loadPDF(file.path);
  // });
};

const extractTableData = (pdfData) => {
  console.log('first', pdfData);
  return [];
};

const downloadFile = async (url, name) => {
  if (!url) return;
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.setAttribute('download', name);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export function convertToJsonString(obj: any) {
  const blob = new Blob(
    [JSON.stringify(obj)]
    //  { type: res.type }
  );
  const url = URL.createObjectURL(blob);

  downloadFile(url, 'data.json');
}

type Transaction = {
  transactionID: string;
  transactionTime: string;
  transactionType: string;
  inOrOut: string;
  paymentMethod: string;
  amountCNY: number;
  counterParty: string;
  merchantOrderID: string;
};

export function convertListToObjectData(data) {
  // 提取字段名（第一行数据）
  let headers = data[4].map((item) => item.trim());
  headers = convertHeader(headers);
  // 提取数据行并将其转换为对象
  const result = data.slice(5).map((row) => {
    return row.reduce((obj, value, index) => {
      obj[headers[index]] = value.trim(); // 使用去除空格后的字段名和数据
      return obj;
    }, {});
  });
  return result;
}

const HeaderMap = {
  交易号: 'transactionID',
};
export function convertHeader(header: string[]) {
  return header.map((column_ZH_CN, index) => {
    return HeaderMap[column_ZH_CN] || column_ZH_CN;
  });
}
