<template>
  <div class="loading">
    <div class="loading-content">
      <img src="우주 이미지 경로" alt="로딩 이미지">
      <h2>Loading...</h2>
      <div class="spinner"></div>
    </div>
  </div>
</template>

<style>
.loading {
  background-color: #000000; /* 검은 배경 색상 */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loading-content {
  text-align: center;
  color: #ffffff; /* 텍스트 및 스피너 색상 */
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #ffffff; /* 스피너 색상 */
  border-top: 4px solid #3498db; /* 스피너 색상 */
  border-radius: 50%;
  animation: spin 2s linear infinite;
  margin-top: 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
