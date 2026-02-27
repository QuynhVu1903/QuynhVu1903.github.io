import { users } from "../data.js";
import { posts } from "../data.js";
// CODE
// Hiển thị chi tiêt 1 post và giới hạn số chữ cho content
// function autoLimit(text, maxLength) {
//     if (text.length <= maxLength) return text;
//     return text.substring(0, maxLength) + "...";
// }
// function afterHalf(text) {
//     return "..." + text.substring(80);
// }


window.detail = function () {
    document.getElementById("postDetail").style.display = "flex";
    const id = parseInt(document.getElementById("postId").value);
    const post = posts.find(p => p.id === id);

    if (!post) {
        alert("Không tìm thấy post!");
        return;
    }

    document.getElementById("postID").textContent = post.id;
    document.getElementById("postTitle").textContent = post.title;
    document.getElementById("postContent").textContent = post.content;
    document.getElementById("postImage").src = post.image;
    for(let i = 0; i < users.length; i++){
        if(post.user_id === users[i].id){
            let author = users[i].first_name + " " + users[i].last_name;
            document.getElementById("postAuthor").textContent = author;
            break
        }
    }

    
    document.getElementById("postCreated").textContent = post.created_at;
    document.getElementById("postUpdated").textContent = post.updated_at;


























    //     let idChiTiet = Number(document.getElementById("idOnly").value);
    //     let html = `
    // <table>
    //   <thead>
    //     <tr>
    //       <th>ID</th>
    //       <th>Tiêu đề</th>
    //       <th>Nội dung</th>
    //       <th>Link ảnh</th>
    //       <th>Tên người tạo</th>
    //       <th>Ngày tạo</th>
    //       <th>Ngày sửa đổi</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    // `;

    //         for(let i = 0; i < posts.length; i++) {
    //             if(idChiTiet === posts[i].id){
    //                 for(let j = 0; j < users.length; j++){
    //                     if(posts[i].user_id === users[j].id){
    //                 let fullName = users[j].first_name + " " + users[j].last_name;
    //                 html += `
    //                 <tr>
    //                     <td>${posts[i].id}</td>
    //                     <td>${posts[i].title}</td>
    //                     <td id="noiDung">
    //                     <div class="toolTip"> 
    //                     <span class="toolText">${afterHalf(posts[i].content)} </span>
    //                     <span>
    //                     ${autoLimit(posts[i].content, 80)}
    //                     </span>
    //                     </div>
    //                     </td>
    //                     <td>${posts[i].image}</td>
    //                     <td>${fullName}</td>
    //                     <td>${posts[i].created_at}</td>
    //                     <td>${posts[i].updated_at}</td>
    //                 </tr>
    //                 </tbody>
    //                 </table>
    //                 `;
    //                 document.getElementById("table-container").innerHTML = html;
    //                 break;
    //             }
    //             }
    //         }
    //         }
}
