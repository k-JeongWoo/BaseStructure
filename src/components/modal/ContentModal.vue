<template lang="html">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <!-- 모달 헤더 -->
          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <!-- 모달바디 -->
          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
