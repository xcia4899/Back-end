<template>
  <el-form
    ref="formRef"
    :model="loginUser"
    :rules="rules"
    status-icon
    label-width="auto"
    class="loginForm sign-in-form"
  >
    <el-form-item label="信箱" prop="email">
      <el-input v-model="loginUser.email" placeholder="請輸入信箱" />
    </el-form-item>
    <el-form-item label="密碼" prop="password">
      <el-input v-model="loginUser.password" placeholder="請輸入密碼" />
    </el-form-item>

    <el-form-item>
      <el-button @click="onSubmit" class="btn"> 確認 </el-button>
    </el-form-item>
    <div class="tiparea">
      <p>忘記密碼 <a href="">點我找回</a></p>
    </div>
  </el-form>
  
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import type { LoginUser } from '@/hooks/useLogin'


const props = defineProps<{
  // 父層會傳進來的使用者資料物件（包含 email 與 password）
  loginUser: LoginUser
  // 表單驗證規則，Element Plus 的類型
  rules: FormRules
  // 父層傳入的登入方法，可接收一個可選的 FormInstance（表單實例）
  // 若表單有 ref，會將它傳入讓父層能操作 validate()、resetFields() 等方法
  handleLogin: (form?: FormInstance) => void | Promise<void>
}>()


const formRef = ref<FormInstance>()


// 呼叫父層傳入的 handleLogin()，並把目前的表單實例傳入
// 父層可在裡面呼叫 form?.validate() 進行驗證
const onSubmit = () => props.handleLogin(formRef.value)


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
  width: 100%;
  // margin: 0 auto;
  margin-left: auto;
  &:hover {
    background-color: #e97171;
  }
}
</style>

