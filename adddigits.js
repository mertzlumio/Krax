x=678
var s=0
while (x!=0) 
{
    s+=x%10
    x=Math.floor(x/10)
}
console.log(s)