

let users = [
	{
		id: 1,
		first_name: 'Lorilee',
		last_name: 'Adame',
		email: 'ladame0@guardian.co.uk',
		password: '12345678',
	},
	{
		id: 2,
		first_name: 'Gannon',
		last_name: 'Manwell',
		email: 'gmanwell1@naver.com',
		password: '12345678',
	},
	{
		id: 3,
		first_name: 'Christiana',
		last_name: 'Dowtry',
		email: 'cdowtry2@mapy.cz',
		password: '12345678',
	},
	{
		id: 4,
		first_name: 'Warden',
		last_name: 'Ansteys',
		email: 'wansteys3@yahoo.com',
		password: '12345678',
	},
	{
		id: 5,
		first_name: 'Claybourne',
		last_name: 'Barbosa',
		email: 'cbarbosa4@si.edu',
		password: '12345678',
	},
	{
		id: 6,
		first_name: 'Zita',
		last_name: 'Triner',
		email: 'ztriner5@youku.com',
		password: '12345678',
	},
	{
		id: 7,
		first_name: 'Orsa',
		last_name: 'Pilcher',
		email: 'opilcher6@surveymonkey.com',
		password: '12345678',
	},
	{
		id: 8,
		first_name: 'Lyn',
		last_name: 'Fockes',
		email: 'lfockes7@answers.com',
		password: '12345678',
	},
	{
		id: 9,
		first_name: 'Harv',
		last_name: 'Olifaunt',
		email: 'holifaunt8@jalbum.net',
		password: '12345678',
	},
	{
		id: 10,
		first_name: 'Nikita',
		last_name: 'Duncanson',
		email: 'nduncanson9@harvard.edu',
		password: '12345678',
	},
];

function showSignup() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupBox").style.display = "flex";
  
}

function showLogin() {
  document.getElementById("signupBox").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}


function check (emailInput, passwordInput) {
    for(let i = 0; i < users.length; i++){
            if(emailInput === users[i].email && passwordInput === users[i].password){
                let greeting = "Xin chào " + users[i].first_name + " " + users[i].last_name;
                return greeting;
            }
        }
}

function signIn() {
    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;
    if(emailInput !== null && emailInput.length > 0 && passwordInput !== null && passwordInput.length > 0) {
        let result = check (emailInput, passwordInput);
        if(result){
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

function check1 (emailSignUp) {
	for(let i = 0; i < users.length; i++){
		if(emailSignUp === users[i].email){
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
		password: passwordSignUp,
	};

	if(emailSignUp !== null && emailSignUp.length > 0 && passwordSignUp !== null && passwordSignUp.length > 0
		&& first !== null && last !== null) {
        let result = check1 (emailSignUp);
        if(result){
            alert(result);
        }
        else {
			users.push(a);
            greeting = "Tạo tài khoản thành công: id: " + a.id + ", first_name: " + a.first_name + ", last_name: " 
			+ a.last_name + ", email: " + a.emailSignUp + ", password: "  + a.passwordSignUp;
            alert(greeting);
        }
    }
    else {
        
        let greeting = "Hãy nhập đầy đủ thông tin";
        alert(greeting);
    }    

}
function check2 (key, firstLastName, email){
	for(let i = 0; i < )
} 
function danhSach() {
	let key = document.getElementById("list").value;
	let firstLastName = users.first_name + users.last_name;
	let email = users.email;
	if(key !== null) {
        let result = check1 (emailSignUp);
        if(result){
            alert(result);
        }
        else {
			users.push(a);
            greeting = "Tạo tài khoản thành công: id: " + a.id + ", first_name: " + a.first_name + ", last_name: " 
			+ a.last_name + ", email: " + a.emailSignUp + ", password: "  + a.passwordSignUp;
            alert(greeting);
        }
    }
    else {
        
        let greeting = "Hãy nhập đầy đủ thông tin";
        alert(greeting);
    }    
}