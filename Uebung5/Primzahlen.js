
const container = document.getElementById("container");
const animate = document.getElementById("animate");
const primzahlenContainer = document.getElementById("primzahlen");
let width = 1;
let animation = requestAnimationFrame(step);

function step() {
	width +=1;
	if(width ===100) width = 1;
	animate.style.width = width + "%";
	animation = requestAnimationFrame(step);
	
}



var prims = [];
var j = 2;
calcPrims = async function()
{
	return new Promise(function(resolve,reject)
	{
		for(o = j; true ;j++)
		{
			if(testPrim(j))
			{
				resolve(j);
				return;
			}
		}

	});
	
	
}

async function asyncCall() {
  calcPrims().then(function(){
	  primzahlenContainer.innerHTML += '<div class="primzahl">'+j+' </div>'
				
	  setTimeout(function() {
				  asyncCall();
				}, 0);
  });
}



asyncCall();

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