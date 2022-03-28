a = Math.floor(Math.random() * (1000 - 1) + 1);
b = Math.floor(Math.random() * (1000 - 1) + 1);
console.log(a,b);

if (a > b) {
	b = a - b;
  a = a - b;
  b = a + b;
}
else {
	if (b > a) {
  	a = b - a;
    b = b - a;
    a = b + a;
  }
}

console.log(a,b)
