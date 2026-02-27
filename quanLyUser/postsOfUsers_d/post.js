import { users } from "../data.js";
import { posts } from "../data.js";
// CODE
window.listPost = function () {
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
	</table>
	`;
	document.getElementById("table-container").innerHTML = html;
}
listPost();

// Hiển thị chi tiêt 1 post và giới hạn số chữ cho content
function autoLimit(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}
function afterHalf(text){
	return "..." + text.substring(80);
}


window.chiTiet = function () {
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
				</table>
				`;
				document.getElementById("table-container").innerHTML = html;
				break;
			}
			}
		}
		}
}
