import Sidebar from "../component/Dashboard/Sidebar/Sidebar";
import Topbar from "../component/Dashboard/Topbar/Topbar";

export default function RootLayout({ children }) {
  return (
    <div className="flex gap-4 m-auto">
      <div className="w-1/6 block">
        <Sidebar />
      </div>
      <div className="w-5/6 block">
        <div>
          <Topbar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
