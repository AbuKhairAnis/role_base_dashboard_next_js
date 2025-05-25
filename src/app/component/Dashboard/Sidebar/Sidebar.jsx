"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FiChevronDown,
  FiChevronRight,
  FiDollarSign,
  FiHome,
  FiLogOut,
  FiSettings,
  FiShoppingCart,
  FiUsers,
} from "react-icons/fi";
function Sidebar({ role = "superadmin" }) {
  const pathname = usePathname();
  const [expandedMenus, setExpandedMenus] = useState({});

  const menuItems = {
    superadmin: [
      { name: "Dashboard", href: "/dashboard/superadmin", icon: <FiHome /> },
      {
        name: "Products",
        href: "/dashboard/superadmin/products",
        icon: <FiShoppingCart />,
        submenu: [
          { name: "All Products", href: "/dashboard/superadmin/products" },
          { name: "Create", href: "/dashboard/superadmin/products/create" },
        ],
      },
      {
        name: "Categories",
        href: "/dashboard/superadmin/categories",
        icon: <FiShoppingCart />,
        submenu: [
          { name: "All Categories", href: "/dashboard/superadmin/categories" },
          { name: "Create", href: "/dashboard/superadmin/categories/create" },
        ],
      },
      {
        name: "Shops",
        href: "/dashboard/superadmin/shops",
        icon: <FiShoppingCart />,
        submenu: [
          { name: "All Shops", href: "/dashboard/superadmin/shops" },
          { name: "Create", href: "/dashboard/superadmin/shops/create" },
        ],
      },
      {
        name: "Orders",
        href: "/dashboard/superadmin/orders",
        icon: <FiDollarSign />,
      },
      {
        name: "Invoices",
        href: "/dashboard/superadmin/invoices",
        icon: <FiDollarSign />,
      },
      {
        name: "Users",
        href: "/dashboard/superadmin/admins",
        icon: <FiUsers />,
        submenu: [
          { name: "Admin", href: "/dashboard/superadmin/admins" },
          { name: "Salesmen", href: "/dashboard/superadmin/salesmen" },
        ],
      },
      {
        name: "Profile",
        href: "/dashboard/superadmin/profile",
        icon: <FiUsers />,
      },
      {
        name: "Settings",
        href: "/dashboard/superadmin/settings",
        icon: <FiSettings />,
      },
    ],
    admin: [
      { name: "Dashboard", href: "/dashboard/admin", icon: <FiHome /> },
      {
        name: "Products",
        href: "/dashboard/admin/products",
        icon: <FiShoppingCart />,
      },
      {
        name: "Categories",
        href: "/dashboard/admin/categories",
        icon: <FiShoppingCart />,
      },
      {
        name: "Shops",
        href: "/dashboard/admin/shops",
        icon: <FiShoppingCart />,
      },
      {
        name: "Orders",
        href: "/dashboard/admin/orders",
        icon: <FiDollarSign />,
      },
      {
        name: "Salesmen",
        href: "/dashboard/admin/salesmens",
        icon: <FiUsers />,
      },
      {
        name: "Invoices",
        href: "/dashboard/admin/invoices",
        icon: <FiDollarSign />,
      },
      { name: "Profile", href: "/dashboard/admin/profile", icon: <FiUsers /> },
      {
        name: "Settings",
        href: "/dashboard/admin/settings",
        icon: <FiSettings />,
      },
    ],
    salesman: [
      { name: "Dashboard", href: "/dashboard/salesman", icon: <FiHome /> },
      {
        name: "Assigned Orders",
        href: "dashboard/salesman/assigned-orders",
        icon: <FiDollarSign />,
      },
      {
        name: "Earnings",
        href: "dashboard/salesman/earnings",
        icon: <FiShoppingCart />,
      },
      {
        name: "Invoices",
        href: "dashboard/salesman/invoices",
        icon: <FiDollarSign />,
      },

      { name: "Profile", href: "/salesman/profile", icon: <FiUsers /> },
    ],
    customer: [
      { name: "Dashboard", href: "/dashboard/customer", icon: <FiHome /> },
      {
        name: "My Orders",
        href: "dashboard/customer/my-order",
        icon: <FiShoppingCart />,
      },
      {
        name: "Invoices",
        href: "dashboard/customer/invoices",
        icon: <FiDollarSign />,
      },

      {
        name: "Profile",
        href: "dashboard/customer/profile",
        icon: <FiUsers />,
      },
    ],
  };

  const toggleMenu = (menuName) => {
    setExpandedMenus({
      ...expandedMenus,
      [menuName]: !expandedMenus[menuName],
    });
  };

  return (
    <div className="w-64 h-screen bg-white shadow-lg fixed flex flex-col">
      {/* লোগো/হেডার */}
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold text-blue-600">
          {role === "superadmin"
            ? "SuperAdmin"
            : role.charAt(0).toUpperCase() + role.slice(1)}{" "}
          Panel
        </h1>
      </div>

      {/* মেনু আইটেম */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          {menuItems[role]?.map((item) => (
            <li key={item.name}>
              {item.submenu ? (
                <>
                  <div
                    onClick={() => toggleMenu(item.name)}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
                      pathname.startsWith(
                        item.href || `/${item.name.toLowerCase()}`
                      )
                        ? "bg-blue-50 text-blue-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                    {expandedMenus[item.name] ? (
                      <FiChevronDown className="text-sm" />
                    ) : (
                      <FiChevronRight className="text-sm" />
                    )}
                  </div>

                  {expandedMenus[item.name] && (
                    <ul className="ml-8 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            href={subItem.href}
                            className={`flex items-center gap-3 p-2 rounded-lg text-sm ${
                              pathname === subItem.href
                                ? "bg-blue-100 text-blue-600"
                                : "hover:bg-gray-100"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    pathname === item.href
                      ? "bg-blue-100 text-blue-600"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* লগআউট বাটন */}
      <div className="p-4 border-t">
        <button className="flex items-center gap-3 w-full p-3 text-red-500 hover:bg-red-50 rounded-lg">
          <FiLogOut />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
