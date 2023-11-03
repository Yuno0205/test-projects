// Mini-Max Sum

function sumMinMax(arr: number[]): void {
    // Tìm giá trị nhỏ nhất và lớn nhất trong mảng
    const min = Math.min(...arr);

    console.log(min);

    const max = Math.max(...arr);

    console.log(max);

    // Tính tổng của tất cả các phần tử trong mảng bằng reduce
    const totalSum = arr.reduce((acc, value) => acc + value, 0);

    console.log(totalSum);

    // Tính tổng min bằng cách loại bỏ giá trị lớn nhất
    const minSum = totalSum - max;

    // Tính tổng max bằng cách loại bỏ giá trị nhỏ nhất
    const maxSum = totalSum - min;

    // Kết quả
    console.log(`${minSum} ${maxSum}`);
}

sumMinMax([3, 4, 5, 6, 7]);
