export const createPage4 = ({
	title = "Survey Form",
	subtitle = "Let us know how we can improve freeCodeCamp",
}) => {
  const article = document.createElement('article');

  const section = `
  <style>
		.outSideColor{background-color: #b2d6d1;
			padding: 0px 50px 0px 50px;
			top: 0px;
			position: fixed;}
		.inSideColor{background-color: #FAFAFA;}
		.leftSide{text-align: right;}
		h1 {text-align: center;
		    font-family: Arial, Helvetica, sans-serif;}
		p {text-align: center;}
		td {padding: 5px 5px 5px 5px;
			vertical-align: top; }
	</style>
	<div class="outSideColor">
	<h1> `+title+`</h1>
	<div class="inSideColor">
	<p> `+subtitle+` </p>
	<form>
		<table>
		<colgroup>
		   <col span="1" style="width: 50%;">
		   <col span="1" style="width: 50%;">
		</colgroup>
    
		<tbody>
			
				<tr>
					<td class="leftSide">*Name</td>
					<td><input type="text" placeholder="Enter your name"></td>
				</tr>
				<tr>
					<td class="leftSide">*Email</td>
					<td><input type="text" placeholder="Enter your Email"></</td>
				</tr>
				<tr>
					<td class="leftSide">*Age</td>
					<td><input type="text" placeholder="Age"></</td>
				</tr>
				<tr>
					<td class="leftSide">*Which option best describes your current role</td>
					<td>
						<select name="Role" id="role">
							<option value="student">Student</option>
							<option value="professor">Professor</option>
							<option value="worker">Worker</option>
						</select>
					</td>
				</tr>
				<tr>
					<td class="leftSide">*How likely is that you would recommend freeCodeCamp to a friend</td>
					<td><input type="radio" id="Definitely" name="recommend" value="Definitely">
						<label for="Definitely">Definitely</label><br>
						
						<input type="radio" id="Maybe" name="recommend" value="Maybe">
						<label for="Maybe">Maybe</label><br>
						
						<input type="radio" id="NotSure" name="recommend" value="Not Sure">
						<label for="NotSure">Not Sure</label><br></td>
				</tr>
				<tr>
					<td class="leftSide">*What do you like most in FCC</td>
					<td>
						<select name="LikeMost" id="LikeMost">
							<option value="default">Front-end </option>
							<option value="Template">The Template</option>
							<option value="functionality">The functionality</option>
						</select>
					</td>
				</tr>
				<tr>
					<td class="leftSide">*Things that should be improved in the future <br>(Check all that apply)</td>
					<td>
						<input type="checkbox" id="frontend" name="frontend">
						<label for="frontend">Front-end Projects</label><br>
						
						<input type="checkbox" id="backend" name="backend">
						<label for="backend">Back-end Projects</label><br>
						
						<input type="checkbox" id="data" name="data">
						<label for="data">Data Visualization</label><br>
					</td>
				</tr>
			</tbody>
		</table>
	</form>
	</div>
	
	
	</div>
`;

  article.insertAdjacentHTML('beforeend', section);

  return article;
};
