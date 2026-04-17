import { use, useEffect, useState } from "react";
//side effect: tạo ra sự thay đổi dữ liệu bên cạnh  hoạt động chính
// Lý thuyết chung:
// 1. Callback luôn luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi component unmounted
// trong callback của useEffect có thẻ return ra 1 hàm

// ___________________
// TH1: - Gọi callback mỗi khi component re-render (useState) => ít dùng
//      - (Ưu tiên) Gọi callback sau khi component thêm element vào DOM => phải thực thi xong đoạn trong return  để tạo ra
// DOM element để thêm vào trong DOM đã <div></div> rồi mới gọi callback

// nếu để fetch ở ngoài useEffecr, mỗi lần gõ vào input thì component sẽ re-render lại API => k được, phải dùng TH2
// TH2:  chỉ gọi callback 1 lần sau khi component mounted => khác với TH1 nên không bị vòng lặp call API
// TH3: - Callback sẽ được gọi lại mỗi khi dependences thay đổi => khi component re-render lại thì useEffect sẽ kiểm tra dependences
// trước và sau khi render có khác nhau không, nếu khác nhau nó sẽ gọi lại callback (để biết có thay đổi hay không, nps sử dụng "===")
const tabs = ["posts", "comments", "albums"];

const Content = () => {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false); // false là ẩn

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`) // fetch → nhận response
      .then((res) => res.json()) // → res.json() → parse JSON
      .then((posts) => {
        setPosts(posts); // → nhận data thật → setPosts → re-render UI
      });
    // nếu viêt fetch ở ngoài useEffect thì mỗi khi Component re-render lại thì nó gọi lại API này
    //     // Gọi callback mỗi khi component re-render (useState) => setPosts(posts) re-render Content
    // Nên ở TH2, khi component mounted rồi thì khi đi re-render lại sẽ không bị callback nữa
  }, [type]);

  // nếu để fetch ở ngoài useEffecr, mỗi lần gõ vào input thì component sẽ re-render lại API => k được

  // truyền call back, truyền mảng rỗng, mảng có deps,
  //listener DOM event chỉ cần add event listener 1 lần, mỗi khi event được kích hoạt thì sẽ luôn gọi lại callback
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }

      // show và hide => phải re-render lại giao diện người dùng => re-render dùng state
    };
    window.addEventListener("scroll", handleScroll);

    // mỗi khi cuộn lên xuống, sẽ gọi hàm handleScroll
    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "#333",
                  borderRadius: "5px",
                  borderColor: "#333",
                }
              : {}
          }
          onClick={() => setType(tab)}
          // mỗi khi click, lấy content của tab để setType
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
        >
          Go to Top
        </button>
      )}
    </div>
  );
};
export default Content;
