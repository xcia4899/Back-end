<template>
  <div class="container">
    <!-- form表單容器 -->
    <div class="forms-container">
      <div class="signin-signup">
        <!-- 登錄 -->
        <el-form
          :model="loginUser"
          :rules="rules"
          status-icon
          label-width="auto"
          class="loginForm sign-in-form"
        >
          <el-form-item label="帳號" prop="email">
            <el-input v-model="loginUser.email" placeholder="輸入帳號" />
          </el-form-item>
          <el-form-item label="密碼" prop="password">
            <el-input v-model="loginUser.password" placeholder="輸入密碼" />
          </el-form-item>

          <el-form-item>
            <el-button class="btn"> 確認 </el-button>
          </el-form-item>
          <div class="tiparea">
            <p>忘記密碼 <a href="">立即找回</a></p>
          </div>
        </el-form>

        <!-- 注册 -->
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
import { ref, reactive } from "vue";
import type { FormRules } from "element-plus";

const panelsToggle = ref(false);

function togglePanelss() {
  panelsToggle.value = !panelsToggle.value;
}
interface LoginUser {
  email: string
  password: string
}
const loginUser = ref<LoginUser>({
  email: "",
  password: "",
});
//校驗規則
const rules = ref<FormRules>({
  email: [
    {
      type: "email",
      message: "帳號格式不正確",
      trigger: "blur",
      required: true,
    },
  ],
  password: [
    { message: "密碼不能為空", trigger: "blur", required: true },
    { min: 6, max: 20, message: "密碼長度 6-20 位", trigger: "blur" },
  ],
});
</script>

<style scoped lang="scss">
$cardW: 460px;
$gap: 20px;
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
}
.circleToggle {
  left: calc(100% + 64px);
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
    gap: $gap;
    top: 0;
    height: 100%;
    width: calc(100% + #{$cardW} + #{$gap} - 32px);
    transition: all 0.4s ease-in 0.2s;
    // overflow: hidden;
    pointer-events: none;
    z-index: 2;
    .panel {
      // height: 200px;
      flex: 0 0 $cardW;
      display: flex;
      flex-direction: column;
      .content {
        text-align: center;
        height: 40%;
      }
      img {
        max-height: 400px;
        min-height: 120px;
        // width: 200px;
        object-fit: contain;
        object-position: left;
        display: block;
        transition: all 0.4s ease-out;
        transform: translateX($gap);
      }
      .imgToggle {
        transform: translateX(-$gap);
      }
      .btn {
        pointer-events: auto; /* 允許點擊 */
        position: relative;
        z-index: 3; /* 最上層 */
        padding: 4px 16px;
        border: 2px solid #333;
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
  }
  .panels-toggle {
    transform: translateX(calc(-#{$cardW} - #{$gap}));
  }

  .forms-container {
    position: absolute;
    left: 56%;
    top: 40%;
    z-index: 1;

    .signin-signup {
      display: flex;
      gap: 20px;
      font-weight: 900;

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
    }
    .loginForm {
      width: 32vw;
      padding: 16px 16px;
      background-color: #eeeeee;
      border-radius: 8px;
      box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.2);
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
  }
}
</style>
