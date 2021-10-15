<template>
  <!--  container  -->
  <div class="container noBg info_input_01">
    <!--contents-->
    <div class="contents">
      <ul class="infoInput_list mb7">
        <li class="inputBox centerFlex mb3">
          <p class="input_tit">이름<span class="required">*</span></p>
          <p class="input disabled"><!--수정불가 :: disabled style과 터치가 안되도록 css속성넣음. -->
            <input type="text" v-model="usr_name" name="" value="홍길동" disabled>
          </p>
        </li>
        <li class="inputBox centerFlex mb3">
          <p class="input_tit">생년월일<span class="required">*</span></p>
          <p class="input disabled"><!--수정불가 :: disabled-->
            <input type="text" v-model="usr_birth" name="" value="19921111" disabled>
          </p>
        </li>
        <li class="inputBox centerFlex mb3">
          <p class="input_tit">성별<span class="required">*</span></p>
          <p class="radioBox">
							<span class="inputRadio typeA disabled"><!--수정불가 :: disabled-->
								<input type="radio" name="gender" id="gender00" v-model="usr_gender" value="M" checked="" disabled>
								<label for="gender00">
									<span class="bul"></span>남
								</label>
							</span>
            <span class="inputRadio typeA disabled ml4"><!--수정불가 :: disabled-->
								<input type="radio" name="gender" id="gender01" v-model="usr_gender" value="F" disabled>
								<label for="gender01">
									<span class="bul"></span>여
								</label>
							</span>
          </p>
        </li>
        <li class="inputBox centerFlex mb3">
          <p class="input_tit">휴대폰<span class="required">*</span></p>
          <p class="input disabled"><!--수정불가 :: disabled-->
            <input type="text" v-model="usr_telnum" name="" value="010-1234-5678" disabled>
          </p>
        </li>
        <li class="inputBox centerFlex mb7">
          <p class="input_tit">E-mail<span class="required">*</span></p>
          <p class="input disabled"><!--수정불가 :: disabled-->
            <input type="text" v-model="usr_email" name="" value="aaaaaaaa@seegene.com" disabled>
          </p>
        </li>
      </ul>
      <ul class="infoInput_list">
        <li class="inputBox mb3">
          <p class="input_tit">주소 (선택)</p>
        </li>
        <li class="inputBox centerFlex mb3 address">
          <p class="input disabled"><!--수정불가 :: disabled-->
            <input type="text" v-model="usr_zipcode" name="" placeholder="우편번호" disabled>
          </p>
          <button type="button" @click="showApi" class="btn_border sm ">검 색</button>
          <div ref="embed"></div>
        </li>
        <li class="inputBox centerFlex mb3">
          <p class="input">
            <input type="text" v-model="usr_address" name="" placeholder="상세주소">
          </p>
        </li>
        <li class="inputBox centerFlex mb3">
          <p class="input">
            <input type="text" v-model="usr_address_detail" name="" placeholder="상세주소">
          </p>
        </li>
      </ul>
    </div>
    <!--//contents-->
    <!-- footer -->
    <div class="footer typeB">
      <div class="btnArea">
        <button class="btn_fill"
                @click="regUsrInfo">가입완료
        </button>
      </div>
    </div>
    <!-- //footer -->
  </div>
</template>

<script>

export default {
  data: function () {
    return {
    }
  }
}
</script>

<style>

</style>
