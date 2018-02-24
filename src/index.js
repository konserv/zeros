module.exports = function getZerosCount(number) {
var answer=0;
for (i=5;i<=number;i=i+5) {
	for (var x=5; i%x===0; x=x*5) {
		answer++;
	}	
}

return(answer);
}