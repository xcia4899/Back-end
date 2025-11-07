import { ref, reactive, watch } from "vue";
import type { FormInstance, FormRules } from "element-plus";

//註冊案件類型推斷
export interface RegisterUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "admin" | "user" | "visitor" | "";
}

export function useRegister() {
  const registerForm = ref<FormInstance | null>(null);

  const registerUser = reactive<RegisterUser>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  //二次密碼驗證
  const valuealidatePass2 = (_rule: any, value: string, callback: any) => {
    if (!value) callback(new Error("請再次輸入密碼"));
    else if (value !== registerUser.password)
      callback(new Error("兩次密碼不一致"));
    else callback();
  };
  //規則
  const registrRules: FormRules<RegisterUser> = {
    name: [
      { required: true, message: "姓名不能空", trigger: "blur" },
      { min: 2, max: 30, message: "姓名最少為2字，最多30字", trigger: "blur" },
    ],
    email: [
      { required: true, message: "請輸入信箱", trigger: "blur" },
      { type: "email", message: "Email 格式不正確", trigger: "blur" },
    ],
    password: [
      { required: true, message: "請輸入密碼", trigger: "blur" },
      { min: 6, max: 20, message: "密碼需為 6-20 碼", trigger: "blur" },
    ],
    confirmPassword: [
      { required: true, message: "請輸入密碼", trigger: "blur" },
      { min: 6, max: 20, message: "密碼需為 6-20 碼", trigger: "blur" },
      { validator: valuealidatePass2, trigger: "blur" },
    ],
    role: [{ required: true, trigger: "change" }],
  };

  //密碼改變時，重新驗證確認密碼
  watch(
    () => registerUser.password,
    () => {
      registerForm.value?.validateField("confirmPassword");
    }
  );

  //驗證以及提交
  // const registerSubmit = () => {};
  const registerSubmit = async () => {
    if (!registerForm.value) return;
    try {
      await registerForm.value.validate(); // 通過則不拋錯
      console.log("表單驗證通過");
    } catch (err) {
      console.log("表單驗證失敗", err);
    }
    console.log("姓名:", registerUser.name);
    console.log("信箱:", registerUser.email);
    console.log("密碼:", registerUser.password);
    console.log("角色:", registerUser.role);
  };
  return { registerUser, registerForm, registrRules, registerSubmit };
}
