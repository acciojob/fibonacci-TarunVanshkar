function fibonacci(num) {
	// your code here
	let a=0;
	let b=1;
	if(num==0)
		return a;

	if(num==1)
		return b;

	let count=2;
	let c=0;
	while(count<=num)
		{
			c=a+b;
			a=b;
			b=c;
		}
	return c;
}

module.exports = fibonacci;
