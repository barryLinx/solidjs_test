import { createSignal, createEffect,createMemo, createRoot  } from "solid-js";
/**we can build a global reactive data store by creating a signal in a global scope, and exporting it for other modules to use:  */
function createLoginStatus() {
  //const [accessToken, setAccessToken] = createSignal("");
  const [userName, setUserName] = createSignal("");
  //const [userRole, setUserRole] = createSignal("");
  
  // 事件監聽 localStorage的變化，更新localAccessToken
  const [localAccessToken, setLocalAccessToken] = createSignal(localStorage.getItem("localAccessToken"));

  //監聽 localStorage的變化，更新localAccessToken
  createEffect(() => {
    setLocalAccessToken(localStorage.getItem("localAccessToken"));
  });

  return { userName, setUserName,localAccessToken,setLocalAccessToken };
}

export default createRoot(createLoginStatus);
