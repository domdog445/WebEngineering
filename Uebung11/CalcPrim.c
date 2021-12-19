long prims[10000];

typedef int bool;
#define true 1
#define false 0

int currentcount = 0;


bool testPrim(long numb)
{
	for(long i = 0; i < currentcount;i++)
	{
		if(numb%prims[i]==0)
			return false;
	}
	prims[currentcount] = numb;
	currentcount++;
	return true;
}
bool testPrims(long numb)
{
  for(int i= 2; i<numb ;i++)
  {
  	testPrim(i);
  }
  return currentcount;
}