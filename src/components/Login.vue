<template>
  <div class="container">
    <!-- form表單容器 -->
    <div class="forms-container" :class="{ 'forms-toggle': panelsToggle }">
      <div class="signin-signup">
        <!-- 登錄 -->
        <LoginForm
          :loginUser="loginUser"
          :rules="rules"
          :handleLogin="handleLogin"
        />

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
import {ref} from "vue";
import { useLogin } from "@/hooks/useLogin";
import LoginForm from "./LoginForm.vue";
const {  loginUser, rules, handleLogin } = useLogin();

const panelsToggle = ref(false)
  // 登入面板切換
const togglePanelss = () => {
  panelsToggle.value = !panelsToggle.value;
};
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
}
.circleToggle {
  left: calc(100% + 64px);
  @media (max-width: 768px) {
    height: 110vh;
    top: calc(100% + 160px);
    left: calc(100%);
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
    transform: translateX(calc(-#{460px} - #{20px}));
    @media (max-width: 768px) {
      transform: translateX(calc(-#{360px} - #{20px}));
    }
  }

  .forms-container {
    position: absolute;
    left: 56%;
    top: 40%;
    z-index: 1;
    transition: all 0.5s ease-in-out;
    @media (max-width: 768px) {
      left: 10%;
      margin: 0 auto;
    }
    .signin-signup {
      display: flex;
      gap: 20px;
      font-weight: 900;
    }
  }
  .forms-toggle {
    left: 16%;
    @media (max-width: 768px) {
      left: 10%;
      margin: 0 auto;
    }
  }
}
</style>
