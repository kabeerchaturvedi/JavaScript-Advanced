/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
 function throttle(func, wait) {
   let lastFunc;
   let lastRan;

   return function () {
     capture context and args
     const context = this;
     const args = arguments;

     if (!lastRan) {
       func.apply(context, args);
       lastRan = Date.now();
     }
     else {
       reset timer
       clearTimeout(lastFunc);

 start again
       lastFunc = setTimeout(function () {
         if ((Date.now() - lastRan) >= wait) {
           func.apply(context, args);
           lastRan = Date.now();
         }
       }, wait - (Date.now() - lastRan));
     }
   }
 }
