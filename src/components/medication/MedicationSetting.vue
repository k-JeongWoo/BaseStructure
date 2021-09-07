<template>
  <div>
  <!--  container  -->
    <div class="container noBg medication_02">
      <!-- header -->
      <header class="header">
        <div class="headerBox">
          <h1>
            <span class="tit">약 추가/알람설정</span>
          </h1>
          <button type="button" class="txt_btn btn_left" @click="movePagefnt('success')">
            완료
          </button>
          <button class="btn_right" @click="movePagefnt('close')">
            <i class="ico_close">닫기</i>
          </button>
        </div>
      </header>
      <!-- //header -->
      <!--contents-->
      <div class="contents">
        <p class="infomation_box mb6">
          <i class="icoCom_i">i</i>
          <span class="cont">복용시간과 복용약 이름을 입력하세요.</span>
        </p>
        <section>
          <h2 class="title_01">알람</h2>
          <ul class="list_styleE mt4">
            <li class="list_item reserv_timeBox">
              <p class="tit">켜짐/꺼짐</p>
              <div class="switch">
                <input type="radio" class="switch-input" name="view" value="on" id="on" checked>
                <label for="on" class="switch-label switch-label-off">켜짐</label>
                <input type="radio" class="switch-input" name="view" value="off" id="off">
                <label for="off" class="switch-label switch-label-on">꺼짐</label>
                <span class="switch-selection"></span>
              </div>
            </li>
          </ul>
        </section>
        <section class="mt7">
          <h2 class="title_01">시간</h2>
          <ul class="list_styleE mt4">
            <li class="list_item reserv_timeBox">
              <p class="tit">오전/오후 설정</p>
              <div class="tab_btnBox">
                <input type="radio" name="time" value="am" id="am" checked>
                <label for="am" class="label_typeTab">오전</label>
                <input type="radio" name="time" value="pm" id="pm">
                <label for="pm" class="label_typeTab">오후</label>
              </div>
            </li>
            <li class="list_item reserv_timeBox">
              <p class="tit">시간 설정</p>
              <div class="time_inputBox">
                <p class="time_input">
                  <input type="text" value="1">
                </p>
                :
                <p class="time_input">
                  <input type="text" value="30">
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section class="mt7">
          <h2 class="title_01">복용약</h2>
          <div class="mt4">
            <div class="inputBox">
              <p class="input">
                <input type="text" name="" placeholder="약이름을 입력하세요.">
              </p>
              <button type="button" class="btn_border">저장</button>
            </div>
          </div>
          <ul class="mediReserv_list mt4">
            <li class="list_item">
              <button type="button" class="btn">
                <i class="icoCom_del">삭제</i>
              </button>
              <p>당뇨약5알 당뇨약5알 당뇨약5알 당뇨약5알 당뇨약5알 당뇨약5알 당뇨약5알 당뇨약5알 당뇨약5알 </p>
            </li>
            <li class="list_item ">
              <button type="button" class="btn">
                <i class="icoCom_del">삭제</i>
              </button>
              <p>당뇨약</p>
            </li>
            <li class="list_item ">
              <button type="button" class="btn">
                <i class="icoCom_del">삭제</i>
              </button>
              <p>당뇨약</p>
            </li>
          </ul>
        </section>
        <div class="btnArea mt6">
          <button type="button" class="btn_border_red">알람/약 삭제</button>
        </div>
      </div>
      <!--//contents-->
      <!-- footer //footer -->
    </div>

    <!-- ##### Popup -->
    <div class="modal-mask" >
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>주의</h3>
          </div>
          <div class="modal-body">
            <p>
              알람과 약 정보가 삭제됩니다.<br>
              삭제하시겠어요?
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn">취소</button>
            <button type="button" class="btn modal-default-button">삭제</button>
          </div>
        </div>
      </div>
    </div>
    <!-- //// Popup -->
    <!-- ##### Popup -->
    <div class="modal-mask" >
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>주의</h3>
          </div>
          <div class="modal-body">
            <p>
              입력한 내용이 저장되지 않았습니다.<br>
              계속하시겠어요?
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn">취소</button>
            <button type="button" class="btn modal-default-button">확인</button>
          </div>
        </div>
      </div>
    </div>
    <!-- //// Popup -->
    <!-- ##### Popup -->
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>주의</h3>
          </div>
          <div class="modal-body">
            <p>
              약 이름을 입력해주세요.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn modal-default-button">확인</button>
          </div>
        </div>
      </div>
    </div>
    <!-- //// Popup -->
    <!-- ##### Popup -->
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>주의</h3>
          </div>
          <div class="modal-body">
            <p>
              수정한 내용이 저장되지 않았습니다.<br>
              기존 복약설정을 유지하시겠어요?
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn">취소</button>
            <button type="button" class="btn modal-default-button">유지</button>
          </div>
        </div>
      </div>
    </div>
    <!-- //// Popup -->
  </div>
</template>

<script>
export default {
  methods: {
    movePagefnt (value) {
      if (value === 'close') {
        this.$router.replace({name: 'mainhome'})
      } else if (value === 'success') {
        console.log('this is page move url ')
      }
    }
  }
}
</script>

<style scoped>

</style>
