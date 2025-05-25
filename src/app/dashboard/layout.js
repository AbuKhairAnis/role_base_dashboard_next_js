import Sidebar from "../component/Dashboard/Sidebar/Sidebar";
import Topbar from "../component/Dashboard/Topbar/Topbar";

export default function RootLayout({ children }) {
  return (
    <div className="flex">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="w-5/6">
        <div>
          <Topbar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
