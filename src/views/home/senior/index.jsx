import { Route, Routes } from "react-router";
import SeniorEducation from "./education";
import SeniorJob from "./jobs";
import ChildrenList from "./children/list";
import ChildrenDetail from "./children/detail";

export default function HomeSenior() {
  return (
    <div className="w-full h-full flex flex-col gap-12 shrink">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SeniorJob />
              <SeniorEducation />
            </>
          }
        />
        <Route path="/children/list" element={<ChildrenList />} />
        <Route path="/children/detail/:id" element={<ChildrenDetail />} />
      </Routes>
    </div>
  );
}