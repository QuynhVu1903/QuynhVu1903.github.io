import { useEffect, useState } from "react";
//Đồng hồ đếm ngược: mỗi lần đếm thì update lại theo từng giây => re-render lại giao diện
// setInterval: mỗi giây sẽ gọi callback 1 lần, mỗi lần setCountdown(countdown - 1)
// vD nêu gọi API ở bên ngoài useEffect thì ẽ tạo ra 1 vòng lặp vô hạn
// mỗi lần setInterval chạy thì sẽ rerender component lại 1 lần, mỗi lần re-render lại chạy 1 setInterval mới
//setInterval chỉ cần chạy 1 lần là sẽ chạy vô hạn, cho đến khi clear. Nêu làm như trên thì càng về sau sẽ càng
// có nhiều setInterval chạy song song nhau => sai thời điểm
// Nếu dùng setTimeout thì dùng TH3, vì setTimeout chỉ chạy 1 lần, TH3 có deps là countdown - biến thay đổi

// a. Cleanup function luôn được gọi trước khi component unmounted

// b. Cleanup function luôn đươc gọi trước khi callback được gọi (trừ lần mounted)
const Timers = () => {
  const [countdown, setCountdown] = useState(8);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(prevStage =>  prevStage -  1);
    }, 1000);
    return () => clearInterval(intervalId)
  }, []);
  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  );
};
export default Timers;
