var fs = require("fs")



/*
if(process.argv.length >= 4)
	FSReadFile([process.argv[2],process.argv[3],process.argv[4]])
else
{
	console.log("node [filename1] [filename2] [OutputFile]");
}*/

exports.merge = MergeFsFile;
async function MergeFsFile(file1,file2,OutputName)
{
	return new Promise(async (resolve, reject) => {
		Promise.all([getPromiseReadFile(file1), getPromiseReadFile(file2)])
			.then((values) => {
			fs.writeFile(OutputName, MergeStrings(values[0],values[1]), (err) => {
				if (err) 
				{
					reject(err);
					throw err;
				}
				
				console.log('Merge successfull');
				resolve();
			});	
		});	  
	});
}

function getPromiseReadFile(filename)
{
	return new Promise(function(resolve, reject) {
        fs.readFile(filename, "utf8", function(err, data){
            if (err) 
                reject(err); 
            else
                resolve(data);
        });
    });
	
}

function MergeStrings(String1,String2)
{
	var allA = String1.split("\r\n");
	var allB = String2.split("\r\n");
	var result = "";			
	var i = 0;	
	while(i < allA.length || i < allB.length)
	{
		if(i < allA.length)
		{
			result += allA[i];
		}
		if(i < allB.length)
		{
			result += allB[i];
		}
		result += "\r\n";
		i++;
	}
	return result;
}
