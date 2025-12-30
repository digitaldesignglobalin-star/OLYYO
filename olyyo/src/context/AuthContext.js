// "use client";

// import { createContext, useContext, useState } from "react";
// import { useRouter } from "next/navigation";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   // ✅ LOGIN (ALL ROLES)
//   const login = async ({ username, password }) => {
//     try {
//       const res = await fetch("http://localhost:2000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         alert(data.message || "Login failed");
//         return;
//       }

//       setUser(data.user);

//       // 🔁 ROLE-BASED REDIRECT
//       switch (data.user.role) {
//         case "admin":
//           router.push("/admin");
//           break;
//         case "restaurant":
//           router.push("/restaurant");
//           break;
//         case "middleman":
//           router.push("/middleman");
//           break;
//         case "delivery":
//           router.push("/delivery");
//           break;
//         default:
//           router.push("/user");
//       }
//     } catch (err) {
//       alert("Backend not reachable");
//     }
//   };


//   // ✅ ADMIN LOGIN (separate endpoint)
// const adminLogin = async ({ username, password }) => {
//   try {
//     const res = await fetch("http://localhost:2000/api/auth/admin/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, password }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       alert(data.message || "Admin login failed");
//       return;
//     }

//     setUser(data.user);
//     router.push("/admin");
//   } catch (err) {
//     alert("Backend not reachable");
//   }
// };


//   // ✅ REGISTER (USER by default, OTHERS via type)
//   const register = async ({
//     username,
//     email,
//     password,
//     confirmPassword,
//     type = "user", // 👈 DEFAULT
//   }) => {
//     try {
//       const endpoint =
//         type === "user"
//           ? "http://localhost:2000/api/auth/register"
//           : `http://localhost:2000/api/auth/${type}/register`;

//       const res = await fetch(endpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           username,
//           email,
//           password,
//           confirmPassword,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         alert(data.message || "Registration failed");
//         return;
//       }

//       alert("Registration successful!");
//       router.push(`/auth/${type}/login`);
//     } catch (err) {
//       alert("Backend not reachable");
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     router.push("/");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, adminLogin, register, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );


  
// }

// export const useAuth = () => useContext(AuthContext);
