// II. Khai báo 1 mảng chứa thông tin 3 đt, mỗi đt gồm:
// tên, giá, hãng sx
// 1. in ds đt ra màn hình (không sử dụng log mảng và log object)
// 2. cho ngdung thêm 1 đt mới vào mảng, bằng cách cho ngdung nhập tên, giá, hãng rồi thêm đt mới này vào mảng
// 3. ngdung nhập stt và key muốn sửa, cho người dùng sửa thông tin của đt có stt đó
// 4. nhập stt, xóa đt có stt đó
// 5. Nhập 1 tên đt, tìm đt có tên đó (ko phân biệt hoa thường)
// 6. Nhập 2 số, tìm các đt có giá nằm giữa 2 số đó
// 7. Nhập 1 hãng SX, tìm các đt thuộc hãng sx đó
// 8. sắp xếp DS đt theo tên, theo giá, (tăng, giảm dần)
// function hienThi(listPhone){
//     for(let i=0;i<listPhone.length;i++)
//     {
//         const phone = listPhone[i];
//         console.log(i+1);
//         for (const key in phone) 
//         {
//                 const value = phone[key];
//                 console.log(key+": "+value);
//         }
//         console.log("\t----\t----"); 
//     }
// }
let listPhone = [
    {   
        "name": "SamSung note",
        "price": 10e6,
        "manufacturer": "SamSung",
    },
    {
        "name": "Xiaomi note7",
        "price": 5e6,
        "manufacturer": "Xiaomi",
    },
    {
        "name": "Iphone X",
        "price": 20e6,
        "manufacturer": "Apple",
    },
    {
        "name": "Iphone 8",
        "price": 10e6,
        "manufacturer": "Apple",
    }
];

// them dt moi
// function themMoi(a){
// let newName = prompt("Nhap ten cua dien thoai can them: ");
// let newPrice = prompt("Nhap gia cua dien thoai can them: ");
// let newHsx = prompt("Nhap hang san xuat can them: ");
// let newphone = {
//     "name": newName,
//     "price": newPrice,
//     "manufacturer": newHsx,
// }
// console.log("Hien thi lai danh sach dien thoai sau khi them dien thoai moi!");
// listPhone.push(a);
// hienThi(a);
// }
// // sua thong tin dt
// let stt = parseInt(prompt("Nhap so thu tu: "));
// let editKey = prompt("Ban muon sua gi: ");
// while(stt<=0 || stt>listPhone.length)
// {
//     stt = parseInt(prompt("Nhap lai so thu tu: "));
// }
// while (!listPhone[stt-1].hasOwnProperty(editKey)){
//   editKey = prompt("Bạn muốn sửa gì???");
// }
// listPhone[stt-1][editKey] = prompt("Nhap gia tri moi: ");
// // xoa dt o stt
// // let stt1 = parseInt(prompt("Nhap so thu tu can xoa: "));
// // while(stt<=1 || stt >listPhone.length){
// //     stt1 = parseInt(prompt("Nhap lai so thu tu can xoa: "));
// // }
// listPhone.slice(stt-1, 1);
// // tìm điện thoại theo tên
// let phoneName = prompt("Nhập một tên điện thoại bất kì: ");
// console.log("Tìm tên của điện thoại "+phoneName+" nếu có!");
// for(let i=0;i<listPhone.length;i++)
// {
//     const phone = listPhone[i];
//     if(phone.name.toLocaleLowerCase().includes(phoneName.toLocaleLowerCase()))
//     {
//       for (const key in phone) {
//               const value = phone[key];
//               console.log(key+": "+value);    
//       }
//     }
// }
// // tìm điện thoại trong khoảng giá
// let n1 = parseFloat(prompt("Nhập số thứ nhất:  "));
// let n2 = parseFloat(prompt("Nhập số thứ hai: "));
// let max = Math.max(n1, n2);
// let min = Math.min(n1, n2);
// console.log("Hiển thị các điện thoại có giá từ "+n1+" đến "+n2+"(nếu có)!");
// for(let i=0;i<listPhone.length;i++)
// {
//     const phone = listPhone[i];   
//     if(phone.price>=min && phone.price<=max)
//     {
//         for (const key in phone) {
//             const value = phone[key];
//             console.log(key+": "+value);            
//         }
//         console.log("\t----\t----\t");
//     }
// }
// // tìm điện thoại theo hãng sản xuất
// let findHsx = prompt("Nhập hãng sản xuất cần tìm: ");
// console.log("Hiển thị các điện thoại có hãng sản xuất vừa nhập(nếu có)!");
// for(let i=0;i<listPhone.length;i++){
//     const phone = listPhone[i];
//     if(phone.manufacturer.toLocaleLowerCase().includes(findHsx.toLocaleLowerCase()))
//     {
//         for (const key in phone){
//                 const value = phone[key];
//                 console.log(key+": "+value);
//             }
//         console.log("\t----\t----\t");        
//     }
// }
// // sắp xếp điện thoại theo tên
// console.log("Hiển thị danh sách điện thoại theo thứ tự giá tăng dần!");
// for(let i=0;i<(listPhone.length-1);i++)
// {
//     for(let j=i+1;j<listPhone.length;j++)
//     {
//         if(listPhone[i].price > listPhone[j].price)
//         {
//             let tg = listPhone[i];
//             listPhone[i] = listPhone[j];
//             listPhone[j] = tg;
//         }
//     }
// }
// //listPhone[i].name.tolowercase().localcompare(listPhone[j].name.tolowercase()) > 0
// hienThi(listPhone);
let r1 = listPhone.find(function(v, i, a){
    return (v.price > 10e6 && v.price < 12e6);
});
console.log(r1);
let find2 = listPhone.filter(function(v, i, a){
    return v.name.search("SamSung")>=0;
})
console.log(find2);
let r3 = listPhone.filter(function(v, i, a){
    return (v.price > 12e6);
});
console.log(r3);
let r4 = listPhone.filter(function(v, i, a){
    return v.name.includes("a");
});
console.log(r4);
let r5 = listPhone.filter(function(v, i, a){
    return (v.price < 20e6 && v.manufacturer.search("Apple")>=0);
});
console.log(r5);
let r6 = listPhone.sort(function(a, b){ return a.price-b.price;})
console.log(r6);



