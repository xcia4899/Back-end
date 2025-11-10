import { ref, reactive } from "vue";
import type { FormInstance, FormRules } from "element-plus";

export interface LoginUser {
  email: string;
  password: string;
}

export function useLogin() {
   

  const loginUser = reactive<LoginUser>({
    email: "",
    password: "",
  });

  // 表單驗證規則
  const rules: FormRules<LoginUser> = {
    email: [
      { required: true, message: "請輸入信箱", trigger: "blur" },
      { type: "email", message: "Email 格式不正確", trigger: "blur" },
    ],
    password: [
      { required: true, message: "請輸入密碼", trigger: "blur" },
      { min: 6, max: 20, message: "密碼需為 6-20 碼", trigger: "blur" },
    ],
  };

  // 由子元件傳入要驗證的表單實例
 

 
  return {
    
   
    loginUser,
    rules,
 
  };
}
