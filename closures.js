function jade(x)
{
    x=5;
   return function(y)
   {
       return x*y;
   }
}
var z;
var a=jade(z);
console.log(a(9));
if(true===true)
{
    let s=0
}
console.log(s);