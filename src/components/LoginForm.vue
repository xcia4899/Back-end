<template>
  <el-form
    ref="formRef"
    :model="loginUser"
    :rules="rules"
    status-icon
    label-width="auto"
    label-position="left"
    class="loginForm sign-in-form"
  >
    <el-form-item label="信箱" prop="email">
      <el-input v-model="loginUser.email" placeholder="請輸入信箱" />
    </el-form-item>
    <el-form-item label="密碼" prop="password">
      <el-input
        v-model="loginUser.password"
        placeholder="請輸入密碼"
        type="password"
        show-password
      />
    </el-form-item>

    <el-form-item>
      <el-button @click="leLoginSubmit" class="btn"> 確認 </el-button>
    </el-form-item>
    <div class="tiparea">
      <p>忘記密碼 <a href="">點我找回</a></p>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import type { LoginUser } from "@/hooks/useLogin";
import http from '@/utils/http';
import { useRouter } from "vue-router";

const router = useRouter();

const formRef = ref<FormInstance | null>(null);
const props = defineProps<{
  // 父層會傳進來的使用者資料物件（包含 email 與 password）
  loginUser: LoginUser;
  // 表單驗證規則，Element Plus 的類型
  rules: FormRules;

}>();


const leLoginSubmit = async () => {
  // console.log("2:", formRef.value);
  if (!formRef.value) return;
  // console.log("11111");
  try {
    await formRef.value.validate(); // 驗證成功才會繼續
    console.log("表單驗證通過");
  } catch {
    console.log("表單驗證失敗");
    return; // ← 必須中止
  }
  // console.log("222222");
  //驗證成功後送出註冊資料
  try {
    const res = await http.post("/v1/auth/register", props.loginUser);
    console.log("回傳",res);
    const {token } = res.data
    localStorage.setItem("msToken", token);
    // 4. 跳轉頁面
    router.push("/");
  } catch (err) {
    console.log("後端 API 失敗", err);
  }
  console.log(props.loginUser.email)
  console.log(props.loginUser.password)
  // console.log("333333");
};

</script>

<style scoped lang="scss">
.loginForm {
  width: 32vw;
  padding: 16px 16px;
  background-color: #eeeeee;
  border-radius: 8px;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    width: 80vw;
  }
}
.sign-in-form {
  .tiparea {
    font-size: 14px;
    text-align: right;
    // height: 20px;
    p {
      margin: 0;
      padding: 0;
    }
  }
}
.btn {
  background-color: #297eff;
  color: #fff;
  letter-spacing: 1.5px;
  width: 100%;
  margin-left: auto;
  transition: all 0.4s ease;
  &:hover {
    background-color: #169b64;
  }
}
</style>
