import { useEffect, useState } from "react";

const CleanUpWithAvatar = () => {
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    // Cleanup
    return () => {

        // Callback luôn luôn được gọi sau khi component mounted 
       avatar && URL.revokeObjectURL(avatar.preview)
    }
  }, [avatar])
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0]; // lấy ảnh đầu tiên
    // file là một object nên có thể thêm property cho nó (kiểm tra xem có phải object k bằng cách console.log(file))
    file.preview = URL.createObjectURL(file); //URL.createObjectURL(file) làm 1 object trở thành URL xem tạm
    setAvatar(file);

    //trong TH tải lên nhiều ảnh thì mới cần để 1 ảnh được tải lên nhiều lần
    e.target.value = null;
    
  };
  return (
    <div>
      <input
        type="file"
        //  multiple cho phép chọn nhiều ảnh, TH này chỉ lấy 1 ảnh
        //nếu chỉ lấy 1 ảnh thì khi đăng lại ảnh đấy lần thứ 2, thì ảnh đó không được
        //tải lên vì onChange là bắt sự thay đổi
        onChange={handlePreviewAvatar}
        //onChange để bắt trường hợp mình thay đổi ảnh
        //mỗi khi ảnh thay đổi thì nó sẽ lọt vào hàm handlePreviewAvt
      />
      {avatar && <img src={avatar.preview} alt="" width="80%" />}
    </div>
  );
};
export default CleanUpWithAvatar;
