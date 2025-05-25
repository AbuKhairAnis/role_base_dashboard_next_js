"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronRight } from "react-icons/fi";

const DashboardHeader = ({ title, breadcrumbs = [], children }) => {
  const pathname = usePathname();

  return (
    <div className="mb-6">
      {/* Breadcrumbs */}
      <nav className="flex mb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          {/* <li className="inline-flex items-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600"
            >
              <FiHome className="mr-2" />
              Dashboard
            </Link>
          </li> */}

          {breadcrumbs.map((crumb, index) => (
            <li key={index}>
              <div className="flex items-center">
                <FiChevronRight className="text-gray-400 mx-1" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="ml-1 text-sm font-medium text-gray-700 md:ml-2">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="ml-1 text-sm font-medium text-gray-500 hover:text-blue-600 md:ml-2"
                  >
                    {crumb.label}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>

      {/* Title and Action Buttons */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        {children && (
          <div className="flex items-center space-x-3">{children}</div>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
