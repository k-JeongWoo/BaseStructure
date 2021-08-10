<template>
    <!--  container  -->
    <div class="container noBg hospital_enrollment">
      <!--contents-->
      <div class="contents">
        <div class="attendPhy_box">
          <p class="title_05 colorA">Cellimedi 협동병원</p>
          <h2 class="title_01">주치의 병원을 등록하세요!</h2>
          <p class="contTxt_06 mt4">Cellimedi 서비스를 제공하고 있는 병원들입니다.
            관심병원을 등록하고 주치의 서비스를 받아보세요.</p>
        </div>
        <!-- // attendPhy_box 주치의병원등록 -->
        <ul class="hospital_list typeCheck">
          <li class="item">
            <!--체크박스-->
            <p class="inputCheck typeA">
              <input type="checkbox" id="hospital_01">
              <label for="hospital_01">
                <span class="bul"></span>
              </label>
            </p>
            <!--//체크박스-->
            <a href="hospital_02.html">
              <div class="hospital_thumb">
                <img src="../../assets/resources/images/_temp/hospital_temp02.png" alt="병원썸네일">
              </div>
              <div>
                <h3 class="title_05">씨젠클리닉</h3>
                <p class="title_10 mb1">송파구 방이동</p>
              </div>
            </a>
          </li>
          <!-- //item -->
          <li class="item">
            <!--체크박스-->
            <p class="inputCheck typeA">
              <input type="checkbox" id="hospital_02">
              <label for="hospital_02">
                <span class="bul"></span>
              </label>
            </p>
            <!--//체크박스-->
            <a href="hospital_02.html">
              <div class="hospital_thumb">
                <img src="../../assets/resources/images/_temp/hospital_temp02.png" alt="병원썸네일">
              </div>
              <div>
                <h3 class="title_05">씨젠클리닉</h3>
                <p class="title_10 mb1">송파구 방이동</p>
              </div>
            </a>
          </li>
          <!-- //item -->
          <li class="item">
            <!--체크박스-->
            <p class="inputCheck typeA">
              <input type="checkbox" id="hospital_03">
              <label for="hospital_03">
                <span class="bul"></span>
              </label>
            </p>
            <!--//체크박스-->
            <a href="hospital_02.html">
              <div class="hospital_thumb">
                <img src="../../assets/resources/images/_temp/hospital_temp02.png" alt="병원썸네일">
              </div>
              <div>
                <h3 class="title_05">씨젠클리닉</h3>
                <p class="title_10 mb1">송파구 방이동</p>
              </div>
            </a>
          </li>
          <!-- //item -->
          <li class="item">
            <!--체크박스-->
            <p class="inputCheck typeA">
              <input type="checkbox" id="hospital_04">
              <label for="hospital_04">
                <span class="bul"></span>
              </label>
            </p>
            <!--//체크박스-->
            <a href="hospital_02.html">
              <div class="hospital_thumb">
                <img src="../../assets/resources/images/_temp/hospital_temp02.png" alt="병원썸네일">
              </div>
              <div>
                <h3 class="title_05">씨젠클리닉</h3>
                <p class="title_10 mb1">송파구 방이동</p>
              </div>
            </a>
          </li>
          <!-- //item -->
          <li class="item">
            <!--체크박스-->
            <p class="inputCheck typeA">
              <input type="checkbox" id="hospital_05">
              <label for="hospital_05">
                <span class="bul"></span>
              </label>
            </p>
            <!--//체크박스-->
            <a href="hospital_02.html">
              <div class="hospital_thumb">
                <img src="../../assets/resources/images/_temp/hospital_temp02.png" alt="병원썸네일">
              </div>
              <div>
                <h3 class="title_05">씨젠클리닉</h3>
                <p class="title_10 mb1">송파구 방이동</p>
              </div>
            </a>
          </li>
          <!-- //item -->
          <li class="item">
            <!--체크박스-->
            <p class="inputCheck typeA">
              <input type="checkbox" id="hospital_06">
              <label for="hospital_06">
                <span class="bul"></span>
              </label>
            </p>
            <!--//체크박스-->
            <a href="hospital_02.html">
              <div class="hospital_thumb">
                <img src="../../assets/resources/images/_temp/hospital_temp02.png" alt="병원썸네일">
              </div>
              <div>
                <h3 class="title_05">씨젠클리닉</h3>
                <p class="title_10 mb1">송파구 방이동</p>
              </div>
            </a>
          </li>
          <!-- //item -->
          <li class="item">
            <!--체크박스-->
            <p class="inputCheck typeA">
              <input type="checkbox" id="hospital_07">
              <label for="hospital_07">
                <span class="bul"></span>
              </label>
            </p>
            <!--//체크박스-->
            <a href="hospital_02.html">
              <div class="hospital_thumb">
                <img src="../../assets/resources/images/_temp/hospital_temp02.png" alt="병원썸네일">
              </div>
              <div>
                <h3 class="title_05">씨젠클리닉</h3>
                <p class="title_10 mb1">송파구 방이동</p>
              </div>
            </a>
          </li>
          <!-- //item -->
        </ul>
      </div>
      <!--//contents-->
      <!-- footer -->
      <footer class="footer typeB">
        <div class="btnArea">
          <a href="" class="btn_fill disabled">등록하기</a><!-- disabled 클래스 추가시 비활성화 -->
        </div>
      </footer>
      <!-- //footer -->

    </div>
    <!--  //container  -->
</template>

<script>
export default {
  methods: {
    movePageBtn: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
