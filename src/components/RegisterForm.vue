<template>
  <el-form
    ref="registerForm"
    :model="registerUser"
    :rules="registrRules"
    status-icon
    label-width="auto"
    label-position="left"
    class="RegisterForm sign-up-form"
  >
    <el-form-item label="姓名" prop="name">
      <el-input v-model="registerUser.name" placeholder="請輸入用戶名" />
    </el-form-item>
    <el-form-item label="信箱" prop="email">
      <el-input v-model="registerUser.email" placeholder="請輸入信箱" />
    </el-form-item>
    <el-form-item label="密碼" prop="password">
      <el-input
        v-model="registerUser.password"
        type="password"
        placeholder="請輸入密碼"
        show-password
      />
    </el-form-item>
    <el-form-item label="確認密碼" prop="confirmPassword">
      <el-input
        v-model="registerUser.confirmPassword"
        type="password"
        placeholder="再次輸入密碼"
        show-password
      />
    </el-form-item>
    <el-form-item label="選擇身分">
      <el-select v-model="registerUser.role" placeholder="選擇身分">
        <el-option label="管理員" value="admin" />
        <el-option label="一般使用者" value="user" />
        <el-option label="訪客" value="visitor" />
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button @click="registerSubmit" class="btn"> 確認 </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import type { RegisterUser } from "@/hooks/useRegister";

const props = defineProps<{
  registerForm: FormInstance | null;
  // 父層會傳進來的使用者資料物件（包含 email 與 password）
  registerUser: RegisterUser;
  // 表單驗證規則，Element Plus 的類型
  registrRules: FormRules;
  // 父層傳入的登入方法，可接收一個可選的 FormInstance（表單實例）
  // 若表單有 ref，會將它傳入讓父層能操作 validate()、resetFields() 等方法
  registerSubmit: () =>  Promise<void>;
}>();

const registerSubmit = () => props.registerSubmit();
</script>

<style scoped lang="scss">
.RegisterForm {
  width: 32vw;
  padding: 16px 16px;
  background-color: #eeeeee;
  border-radius: 8px;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    width: 80vw;
  }
  .tiparea {
    font-size: 14px;
    text-align: right;
    // height: 20px;
    p {
      margin: 0;
      padding: 0;
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
}
</style>
