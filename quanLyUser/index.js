import { users } from "./data.js";
import { posts } from "./data.js";
// CODE

window.showSignup = function () {
	document.getElementById("loginForm").style.display = "none";
	document.getElementById("signupBox").style.display = "flex";

}

window.showLogin = function () {
	document.getElementById("signupBox").style.display = "none";
	document.getElementById("loginForm").style.display = "block";
}


function check(emailInput, passwordInput) {
	for (let i = 0; i < users.length; i++) {
		if (emailInput === users[i].email && passwordInput === users[i].password) {
			let greeting = "Xin chào " + users[i].first_name + " " + users[i].last_name;
			return greeting;
		}
	}
}

window.signIn = function () {
	let emailInput = document.getElementById("email").value;
	let passwordInput = document.getElementById("password").value;
	let greeting;
	if (emailInput !== null && emailInput.length > 0 && passwordInput !== null && passwordInput.length > 0) {
		let result = check(emailInput, passwordInput);
		if (result) {
			alert(result);
		}
		else {
			greeting = "Thông tin tài khoản không chính xác";
			alert(greeting);
		}
	}
	else {

		greeting = "Hãy nhập đầy đủ thông tin";
		alert(greeting);
	}
}

function check1(emailSignUp) {
	for (let i = 0; i < users.length; i++) {
		if (emailSignUp === users[i].email) {
			let greeting = "Email này đã có tài khoản";
			return greeting;
		}
	}
}
window.register = function() {
	let first = document.getElementById("first").value;
	let last = document.getElementById("last").value;
	let emailSignUp = document.getElementById("emailSignUp").value;
	let passwordSignUp = document.getElementById("passwordSignUp").value;
	let greeting;
	let a = {
		id: users.length + 1,
		first_name: first,
		last_name: last,
		email: emailSignUp,
		password: passwordSignUp
	};

	if (emailSignUp !== null && emailSignUp.length > 0 && passwordSignUp !== null && passwordSignUp.length > 0
		&& first !== null && last !== null) {
		let result = check1(emailSignUp);
		if (result) {
			alert(result);
		}
		else {
			users.push(a);
			greeting = "Tạo tài khoản thành công: id: " + users[users.length - 1].id + ", first_name: " + users[users.length - 1].first_name + ", last_name: "
				+ users[users.length - 1].last_name + ", email: " + users[users.length - 1].email + ", password: " + users[users.length - 1].password;
			alert(greeting);
		}
	}
	else {

		let greeting = "Hãy nhập đầy đủ thông tin";
		alert(greeting);
	}
}

window.danhSach = function () {
	let key = document.getElementById("list").value.trim().toLowerCase();
	let html = `
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Họ và tên</th>
	  <th>Email</th>
    </tr>
  </thead>
  <tbody>
`;
	let filteredUser;
	if(key === ""){
		filteredUser = users;
	}
	else {
		//tạo 1 mảng mới để chứa những object được lọc từ users vói điều kiện object
		//này có fullname hoặc email chứa key
		filteredUser = users.filter(user => {
			let fullName = (user.first_name + " " + user.last_name).toLocaleLowerCase();
			let email = user.email.toLocaleLowerCase();
			return fullName.includes(key) || email.includes(key);
		});
	}

	//In danh sách
	//dùng forEach không tạo mảng mới mà biến đổi từng phần tử của mảng hiện tại
	filteredUser.forEach(user => {
		html += `
		<tr>
			<td>${user.id}</td>
			<td>${user.first_name} ${user.last_name}</td>
			<td>${user.email}</td>
		</tr>
		`;
	});
	
	html += `
	</tbody>
	</talble>
	`;
	document.getElementById("table-container").innerHTML = html;
}

