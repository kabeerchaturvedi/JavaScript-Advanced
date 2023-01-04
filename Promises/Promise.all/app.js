### Promise.all

const myPromiseAll = function(tasklist)
{
  const results = [];
  let promisesCompleted = 0;

 return new Promise((resolve,reject) => {
  tasklist.forEach((promise,index) => {
   promise.then((val) => {
     results[index] = val; 
     promisesCompleted += 1;

if(promisesCompleted === tasklist.length)
{
resolve(results);
}
)}
.catch(error) => {
  reject(error);
})
})

});  
}
