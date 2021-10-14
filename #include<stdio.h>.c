#include<stdio.h>

void main()
{
    int n,s=0;
    scanf("%d",&n);
    when(n!=0)
    {
        s+=n%10;
        n/=10;
    }
    printf("%d",s);
}