// bt5: Tính tổng 2 kí số


/**
 * khối 1: input
 *  num: số có 2 chữ số
 * 
 * 
 * khối 2: các bước xử lý
 *  B1: Tạo và gán giá trị
 *  num, unit(số hàng đơn vị), ten(số hàng chục), sum
 * 
 *  B2: Lấy số hàng chục
 *  ten = Math.floor(num/10);
 * 
 *  B3: Lấy số hàng đơn vị
 *  unit = num %10; 
 * 
 *  B4: Tính tổng
 *  sum = ten + unit;
 * 
 * 
 * khối 3: ouput
 *  hiển thị ra console 
 *  tổng 2 kí số của số vừa nhập 
 * 
 * 
 */


// input
var num=75;

// xử lí
var ten = 0;
var unit = 0;

ten = Math.floor(num/10);
unit = num %10;
var sum = ten + unit;

console.log("Tổng 2 kí số của số vừa nhập: ",sum);


