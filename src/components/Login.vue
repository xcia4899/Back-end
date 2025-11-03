<template>
  <div class="container">
    <!-- form表單容器 -->
    <div class="forms-container">
      <div class="signin-signup">
        <!-- 登錄 -->
        <h1>登录</h1>
        <!-- 注册 -->
        <h1>注册</h1>
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
    <div class="circle" :class="{'circleToggle': panelsToggle}"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const panelsToggle = ref(false);

function togglePanelss() {
  panelsToggle.value = !panelsToggle.value;
}
</script>

<style scoped lang="scss">
$cardW: 460px;
$gap: 20px;
.circle {
  position: absolute;
  left: -64px;
  top: 0;
  transition: all 1s ease-in-out ;
  transform: translate(-50%, -50%);
  // width: 100%;
  height: 180vh;
  aspect-ratio: 1/1;
  border-radius: 100%;
  background-color: $yellow;
  z-index: -1;
}
.circleToggle{
  transform: translate(50%, -50%);
}
.container {
  position: relative; 
  padding: 32px;
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
    width: calc(100% + #{$cardW} + #{$gap} + 32px);
    transition: all 0.4s ease-in 0.2s;
    // overflow: hidden;
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
        transform: translateX(0%);
      }
      .imgToggle {
        transform: translateX(-$gap);
      }
      .btn {
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

    left: 50%;
    top: 50%;
    z-index: -2;
  }
}
</style>
