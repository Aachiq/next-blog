export const setItemLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};
// const handleLogout = async () => {
//     console.log("hi call logout");
//     try {
//       const result = await userLogoutService();
//       if (result) {
//         console.log("result :", result);
//         // remove userinfos from localStorage
//         removeItemLocalStorage("userInfos");

//         // redirect to signin
//         router.push("/auth/signin");
//       }
//     } catch (err) {
//       console.error("Logout failed:", err);
//     }
//   };
export const getItemLocalStorage = (property: string): any | null => {
  const item = localStorage.getItem(property);
  if (!item) return null;
  return JSON.parse(item);
};

export const removeItemLocalStorage = (property: string) => {
  localStorage.removeItem(property);
};
