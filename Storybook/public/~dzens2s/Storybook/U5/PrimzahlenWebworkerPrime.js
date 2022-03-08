self.addEventListener('message',()=> calcPrim())


var prims = [];
var j = 2;

console.log("Worker loaded");
function calcPrim() {
  for(o = j; true ;j++)
	{
		if(testPrim(j))
		{
			self.postMessage(j);
		}
	}
}

function testPrim(numb)
{
	for(i = 0; i < prims.length;i++)
	{
		if(numb%prims[i]==0)
			return false;
	}
	prims.push(numb);
	return true;
}

/*
testnumber = math.bignumber('2')

console.log(testnumber);*/