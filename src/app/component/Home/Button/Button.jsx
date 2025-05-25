"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Button() {
  const [role, setRole] = useState("");
  const router = useRouter();
  const handleClick = (role) => {
    setRole(role);
  };

  useEffect(() => {
    if (role) {
      localStorage.setItem("role", role);
      router.push(`/dashboard/${role}`);
    }
  });
  return (
    <div className="flex gap-5 justify-center items-center m-auto w-full h-full">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleClick("superadmin")}
      >
        Super Adimin
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleClick("admin")}
      >
        Admin
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleClick("salesman")}
      >
        Salesman
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleClick("customer")}
      >
        Customer
      </button>
    </div>
  );
}
