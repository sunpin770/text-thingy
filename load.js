// var load = document.getElementById('info');
// var pop = 1; 
// var loaded = false;
// const theTimeout = setTimeout(beep, 100);
// var theTimeoutId = theTimeout;
// function keepLoading() {
//     theTimeout();
// }
// 
// function beep() {
//     switch (pop) {
//         case 1:
//             load.innerHTML = ". . .<br/>. . o<br/>. . .";
//             pop += 1;
//             break;
//         case 2:
//             load.innerHTML = ". . .<br/>. . .<br/>. . o";
//             pop += 1;
//             break;
//         case 3:
//             load.innerHTML = ". . .<br/>. . .<br/>. o .";
//             pop += 1;
//             break;
//         case 4:
//             load.innerHTML = ". . .<br/>. . .<br/>o . .";
//             pop += 1;
//             break;
//         case 5:
//             load.innerHTML = ". . .<br/>o . .<br/>. . .";
//             pop += 1;
//             break;
//         case 6:
//             load.innerHTML = "o . .<br/>. . .<br/>. . .";
//             pop += 1;
//             break;
//         case 7:
//             load.innerHTML = ". o .<br/>. . .<br/>. . .";
//             pop += 1;
//             break;
//         case 8:
//             load.innerHTML = ". . o<br/>. . .<br/>. . .";
//             pop = 1;
//             break;
//     };
//     keepLoading();
// }
// 
// function stopLoading() {
//     clearTimeout(theTimeoutId)
// };
// 
// // Call beep() to start the animation
// beep();
// 