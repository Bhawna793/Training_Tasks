const n=parseInt(prompt("Enter the size of array"));
const arr=[];

for(let i=0;i<n;i++){
  const rows=[];

  for(let j=0;j<n;j++){
    const element=parseInt(prompt(`Enter element at position [${i},${j}]`));
    rows.push(element);
  }

  arr.push(rows);
}

console.log(arr);

let ldiag=0;
let rdiag=0;

for(let k=0;k<n;k++){
   ldiag+=arr[k][k];
   rdiag+=arr[k][n-k-1];
}

let totaldiff=Math.abs(ldiag-rdiag);
console.log(totaldiff);