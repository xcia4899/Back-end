<template>
  <div class="container">
    <!-- form表單容器 -->
    <div class="forms-container">
      <div class="signin-signup">
        <!-- 登錄 -->
        <LoginForm
          :loginUser="loginUser"
          :rules="rules"
          :handleLogin="handleLogin"
          class="LoginForm"
          :class="{ 'LoginForm-toggle': panelsToggle }"
        />
        <!-- 注册 -->
        <el-form
          ref="registerForm"
          :model="registerUser"
          :rules="rules"
          status-icon
          label-width="auto"
          class="RegisterForm sign-up-form"
          :class="{ 'RegisterForm-toggle': panelsToggle }"
        >
          <el-form-item label="名子" prop="name">
            <el-input v-model="registerUser.name" placeholder="請輸入用戶名" />
          </el-form-item>
          <el-form-item label="信箱" prop="email">
            <el-input v-model="registerUser.email" placeholder="請輸入信箱" />
          </el-form-item>
          <el-form-item label="密碼" prop="password">
            <el-input
              v-model="registerUser.password"
              placeholder="請輸入密碼"
            />
          </el-form-item>
          <el-form-item label="確認密碼" prop="confirmPassword">
            <el-input
              v-model="registerUser.password"
              placeholder="再次輸入密碼"
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
      </div>
    </div>

    <!-- 左右切換动画 -->
    <div class="panels-container" :class="{ 'panels-toggle': panelsToggle }">
      <div class="panel left-panel">
        <div class="content">
          <h1>學習是為了更多的選擇</h1>
          <h2>讓生活變得更美好</h2>
          <button @click="togglePanelss" class="btn transparent">註冊</button>
        </div>
        <img
          :class="{ imgToggle: panelsToggle }"
          src="../assets/img/fileRole.png"
          alt=""
        />
      </div>

      <div class="panel right-panel">
        <div class="content">
          <h1>用知識換更大的世界</h1>
          <h2>讓每一步都通往更好的自己</h2>
          <button @click="togglePanelss" class="btn transparent">登入</button>
        </div>
        <img
          :class="{ imgToggle: panelsToggle }"
          src="../assets/img/fileRole02.png"
          alt=""
        />
      </div>
    </div>
    <div class="circle" :class="{ circleToggle: panelsToggle }"></div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useLogin } from "@/hooks/useLogin";
import LoginForm from "./LoginForm.vue";
const { loginUser, rules, handleLogin } = useLogin();

const panelsToggle = ref(false);
// 登入面板切換
const togglePanelss = () => {
  panelsToggle.value = !panelsToggle.value;
};
interface RegisterUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: 'admin' | 'user' | 'visitor' | ''
}
const registerUser = reactive<RegisterUser>({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "",
});
const registerForm = ref("");
const registerSubmit = () => {};
</script>

<style scoped lang="scss">
.circle {
  position: absolute;
  left: -64px;
  top: 0;
  transition: all 1s ease-in-out;
  transform: translate(-50%, -50%);
  // width: 100%;
  height: 170vh;
  aspect-ratio: 1/1;
  border-radius: 100%;
  background-color: $yellow;
  z-index: 1;
  pointer-events: none;
  @media (max-width: 768px) {
    height: 110vh;
    top: -60px;
    left: -100px;
  }
  &.circleToggle {
    left: calc(100% + 64px);
    @media (max-width: 768px) {
      height: 110vh;
      top: calc(100% + 160px);
      left: calc(100%);
    }
  }
}

.container {
  position: relative;
  padding: 16px;
  // width: 100vw;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow-x: hidden;
  .panels-container {
    position: absolute;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    top: 0;
    height: 100%;
    width: calc(100% + #{460px} + #{20px} - 32px);
    transition: all 0.4s ease-in 0.2s;
    // overflow: hidden;
    pointer-events: none;
    z-index: 2;
    @media (max-width: 768px) {
      width: calc(100% + #{360px} + #{20px} - 32px);
    }
    .panel {
      // height: 200px;
      width: 460px;
      display: flex;
      flex-direction: column;
      @media (max-width: 768px) {
        width: 360px;
        justify-content: space-between;
      }
      .content {
        text-align: center;
        height: 40%;
      }
      img {
        max-height: 400px;
        // width: 200px;
        object-fit: contain;
        object-position: left;
        display: block;
        transition: all 0.4s ease-out;
        transform: translateX(20px);
        @media (max-width: 768px) {
          max-height: 160px;
          object-position: bottom center;
        }
      }
      .imgToggle {
        transform: translateX(-20px);
      }
      .btn {
        pointer-events: auto; /* 允許點擊 */
        position: relative;
        z-index: 3; /* 最上層 */
        padding: 4px 16px;
        border: 2px solid #333;
        width: 40%;
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 2px;
        border-radius: 16px;
        color: #333;
        background: transparent;
        transition: all 0.3s ease-out;
        cursor: pointer;
        &:hover {
          background-color: #fff;
          color: #111;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
        }
      }
    }
    &.panels-toggle {
      transform: translateX(calc(-#{460px} - #{20px}));
      @media (max-width: 768px) {
        transform: translateX(calc(-#{360px} - #{20px}));
      }
    }
  }

  .forms-container {
    // border: 1px solid;
    font-weight: 900;
    width: 100%;
    height: 100%;
    .LoginForm {
      position: absolute;
      left: 56%;
      top: 40%;
      z-index: 1;
      visibility: visible;
      opacity: 1;
     transition: all 0.4s ease-in 0.3s;
      @media (max-width: 768px) {
        left: 10%;
        margin: 0 auto;
      }
      &.LoginForm-toggle {
        opacity: 0;
        visibility: hidden;
        left: 46%;
        @media (max-width: 768px) {
          left: 40%;
          margin: 0 auto;
        }
      }
    }
    .RegisterForm {
      position: absolute;
      left: 30%;
      top: 30%;
      z-index: 1;
      visibility: hidden;
      opacity: 0;
      transition: all 0.4s ease-in 0.3s;
      @media (max-width: 768px) {
        left: 10%;
        margin: 0 auto;
      }
      &.RegisterForm-toggle {
        opacity: 1;
        visibility: visible;
        left: 12%;
        @media (max-width: 768px) {
          left: 10%;
          margin: 0 auto;
        }
      }

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
  }
}
</style>
