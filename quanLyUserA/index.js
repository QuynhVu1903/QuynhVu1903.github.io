
// CODE

function showSignup() {
	document.getElementById("loginForm").style.display = "none";
	document.getElementById("signupBox").style.display = "flex";

}

function showLogin() {
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

function signIn() {
	let emailInput = document.getElementById("email").value;
	let passwordInput = document.getElementById("password").value;
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

		let greeting = "Hãy nhập đầy đủ thông tin";
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
function register() {
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

function danhSach() {
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

function listPost() {
	let html = `
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
	  <th>Ngày tạo</th>
	  <th>Họ và tên người tạo</th>
    </tr>
  </thead>
  <tbody>
`;
	for(let i = 0; i < posts.length; i++){
		for(let j = 0; j < users.length; j++) {
			if(posts[i].user_id === users[j].id){
				let fullName = users[j].first_name + " " + users[j].last_name;
				html += `
				<tr>
					<td>${posts[i].id}</td>
					<td>${posts[i].title}</td>
					<td>${posts[i].created_at}</td>
					<td>${fullName}</td>
				</tr>
				`;
			}
		}
	}
	html += `
	</tbody>
	</talble>
	`;
	document.getElementById("table-container").innerHTML = html;
}

// Hiển thị chi tiêt 1 post và giới hạn số chữ cho content
function autoLimit(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}
function afterHalf(text){
	return "..." + text.substring(80);
}


function chiTiet() {
	let idChiTiet = Number(document.getElementById("idOnly").value);
	let html = `
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Tiêu đề</th>
	  <th>Nội dung</th>
	  <th>Link ảnh</th>
	  <th>Tên người tạo</th>
	  <th>Ngày tạo</th>
	  <th>Ngày sửa đổi</th>
    </tr>
  </thead>
  <tbody>
`;

		for(let i = 0; i < posts.length; i++) {
			if(idChiTiet === posts[i].id){
				for(let j = 0; j < users.length; j++){
					if(posts[i].user_id === users[j].id){
				let fullName = users[j].first_name + " " + users[j].last_name;
				html += `
				<tr>
					<td>${posts[i].id}</td>
					<td>${posts[i].title}</td>
					<td id="noiDung">
					<div id="toolTip"> 
					<span id="toolTipText">${afterHalf(posts[i].content)} </span>
					<span>
					${autoLimit(posts[i].content, 80)}
					<span>
					</div>
					</td>
					<td>${posts[i].image}</td>
					<td>${fullName}</td>
					<td>${posts[i].created_at}</td>
					<td>${posts[i].updated_at}</td>
				</tr>
				</tbody>
				</talble>
				`;
				document.getElementById("table-container").innerHTML = html;
				break;
			}
			}
		}
		}
}
