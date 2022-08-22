### Recursion



let abc = [7]; 

function print(N){
if (N<=1) {
return 1; 
} 
else {
console.log(N +" ");
print(N-1);
}
}


print(abc);
