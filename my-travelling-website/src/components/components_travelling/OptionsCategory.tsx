import { ChevronDown } from "lucide-react";
import { useState } from "react";

const options = [
  "Cruise category",
  "Luxury",
  "Premium",
  "Budget",
  "Family",
  "Overnight cruise",
  "Day cruise",
];
interface Iprops {
    newCategory: (name: string) => void;
}
const CategorySelect = (props: Iprops) => {
  const { newCategory } = props;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Cruise category");

  return (
    <div className="" style={{ position: "relative" }}>
      {/* button select đóng mở */}
      <button
        onClick={() => {
          setOpen(!open);
        }}
        style={{
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: 18,
          fontWeight: 400,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 76,
        }}
      >
        {selected}{" "}
        <span>
          <ChevronDown style={{ paddingTop: "5px" }} />
        </span>
      </button>
      {/* sau khi mở ra thì chọn option, di chuột đến đâu thì màu thay đổi đến đó */}
      {open ? (
        <ul
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            margin: 0,
            padding: "6px 0",
            listStyle: "none",
            background: "#ffffff66" /* màu mờ giống search bar */,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.3)",
            minWidth: 180,
            zIndex: 100,
          }}
        >
          {options.map((item, index) => {
            return (
              <li
                key={item}
                onClick={() => {
                  setSelected(item);
                  setOpen(false);
                  newCategory(item);
                }}
                style={{
                  padding: "10px 18px",
                  color: "#fff",
                  fontSize: 15,
                  cursor: "pointer",
                  background:
                    selected === item ? "rgba(255,255,255,0.2)" : "transparent",
                  borderRadius: 8,
                  margin: "0 4px",
                }}
                // di chuột vào
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.15)")
                }
                // di chuột ra
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    selected === item ? "rgba(255,255,255,0.2)" : "transparent")
                }
              >
                {item}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default CategorySelect;
