import {Routes, Route} from "react-router-dom";
import Corona from "./Corona/Corona";

export default function Parent(){
    return (
      <div>
          <Routes>
              <Route path="/" element={<Corona />} />
          </Routes>
      </div>
    )
}
  