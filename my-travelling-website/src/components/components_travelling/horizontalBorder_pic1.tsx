import { ChevronDown, Clock, MapPin } from "lucide-react"


const HorizontalBorder = () => {
    return (
        <div className="headerPic1">
          <div className="listLeft">
            <div className="listLeft1">
              <div className="listLeft1-icon">
                <MapPin size={15} />
              </div>
              <div className="listLeft1-text">
                72 Hang Trong St., Hoan Kiem Dist., Hanoi, Vietnam 2000
              </div>
            </div>
            <div className="listLeft2">
              <div className="liftLeft2Icon">
                <Clock size={15} color="#0D0D0C" />
              </div>
              <div className="liftLeft2Text">Hotline: +84-946 505 505</div>
            </div>
          </div>
          <div className="listRight">
            <div className="borderButton">
              <div>Language</div>
              <div className="buttonDown">
                <ChevronDown size={15} color="#0D0D0C" />
              </div>
            </div>
            <div className="frame305">
              <div className="frame3051">FAQ</div>
              <div className="frame3052">Support</div>
              <div>Sign in/ Register</div>
            </div>
          </div>
        </div>
    )
}

export default HorizontalBorder