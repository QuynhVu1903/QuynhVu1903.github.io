import { users } from "../data.js";
import { posts } from "../data.js";

window.searchPost = function() {
  const email = document.getElementById("emailInput").value.trim();
  const result = document.getElementById("result");
  result.innerHTML = "";

  for(let i = 0; i < users.length; i++) {
    if(email === users[i].email){
        let author = users[i].first_name + " " + users[i].last_name;
        let filtered = posts.filter(p => p.user_id === users[i].id)
        if (filtered.length === 0) {
            result.innerHTML = "<p style='text-align:center'>Không tìm thấy post</p>";
            return;
  }

  filtered.forEach(post => {
    result.innerHTML += `
      <div class="post-item">
        <div class="post-nameImg">
            <div> 
            <span><strong>ID:</strong> ${post.id}</span>
            </div>
            <div>
            <span><strong>Tác giả:</strong> ${author}</span>
            </div>
            <img src="${post.image}" alt="post image">
        </div>
        <div class="post-body">
          <div class="titleH3">
            <h3>${post.title}</h3>
          </div>
          <div class="content">
            ${post.content}
          </div>

          <div class="post-meta">
            
            <div><strong>Ngày tạo:</strong> ${post.created_at}</div>
            <div><strong>Ngày sửa:</strong> ${post.updated_at}</div>
          </div>
        </div>
      </div>
    `;
  });
}
}
}