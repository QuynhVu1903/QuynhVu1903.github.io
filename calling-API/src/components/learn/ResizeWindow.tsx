import { use, useEffect, useState } from "react";

const ResizeWindow = () => {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        //cleanup function
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
  return (
    <div>
     <h1>{width}</h1>
    </div>
  );
};
export default ResizeWindow;
