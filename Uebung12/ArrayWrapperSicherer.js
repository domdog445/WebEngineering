function demethodize(f)
	{
	  return function(x,y)
	  {
		  return f.call(x,y);
	  }
	}


function arrayWrapper(){
  var array= ["Peter","Karl"]
  var push = demethodize(array.push);
	return {
    get:function(pos){
      return array[pos];
    },
		set:function(pos,val){
      array[pos] = val;
    },
		append:function(val){
      push(array,val)
    }
  }
}



var arr=arrayWrapper();

arr.append("Hans");
console.log(arr.get(2))

function exploit(vector)
{
  var data;
vector.set('push',function(){
  data=this
})
vector.append();
return data;
}
console.log(exploit(arr))
