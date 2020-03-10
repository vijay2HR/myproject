var x=525;
var z=x;
var rev=0;
var rem=0;
while(x>0)
{
    rem=x%10;
    rev=rev*10+rem;
    
x=parseInt(x/10);
}
if(z==rev)
{
    console.log("palindrom");
}
else
{
console.log("not palindrome");
}