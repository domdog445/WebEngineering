import './JsonDIsplay.css';

export const createJson = ({
  json = ""
}) => {
  
  var result = "";
  for (var i = 0; i < json.length; i++) {
    
    
    if(json[i].question != undefined)
    {
      result += "<h3>"+json[i].question+"</h3>" +
        "<p>"+json[i].answer+"</p>";
    }
    else
    {

      result += "<h3>"+json[i][0]+" </h3><table class=border>";

      for (var y = 1; y < json[i].length; y++) 
      {
        result+="<tr class=border>";
        for (var x = 0; x < json[i][y].length; x++) 
        {
          result+="<td class=border>"+json[i][y][x]+"</td>";
        }
        result+="</tr>";
      }
      result+="</table>";



      console.log("Frank:" + json[i]);
    }



    // more statements
 }
 


  return result;
};
