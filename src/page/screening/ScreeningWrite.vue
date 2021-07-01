<template>
  <!--  container  -->
  <div class="container curation_02">
    <!--contents-->
    <div class="contents">
      <div class="box_wrap">
        <section class="box_shadow01">
          <h2 class="title_05 mb6">검진결과 자동 입력</h2>
          <div class="mt4">
            <p class="contTxt_06">공동인증서가 있는 경우 국민건강보험공단에서 검진 결과를 자동으로 가져올 수 있습니다. </p>
            <div class="btnArea mt4">
              <button type="button" class="btn_fill">자동으로 가져오기</button>
            </div>
          </div>
        </section>
      </div>
      <!---->
      <div class="box_wrap">
        <section class="box_shadow01 ">
          <h2 class="title_05 mb6">검진결과 직접 입력</h2>
          <!--curation_date-->
          <div class="curation_date">
            검진일
            <div class="date_pick">
              <p class="title_02 colorA checkDate"><span>2021/05/13</span><i class="ico_date"></i></p>
              <ul class="input_date_pick">
                <li class="mr4">
                  <div class="inputBox flexEnd">
                    <p class="input year">
                      <input type="text" class="tac" name="" value="2021">
                    </p>
                    <span class="unit">년</span>
                  </div>
                </li>
                <li class="mr4">
                  <div class="inputBox flexEnd">
                    <p class="input ">
                      <input type="text" class="tac" name="" value="12">
                    </p>
                    <span class="unit">월</span>
                  </div>
                </li>
                <li>
                  <div class="inputBox flexEnd">
                    <p class="input ">
                      <input type="text" class="tac" name="" value="31">
                    </p>
                    <span class="unit">일</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--//curation_date-->
          <section>
            <h3 class="title_05 colorA mt6">비만도 측정</h3>
            <div>
              <ul>
                <li>
                  <h5 class="title_09 mt4">허리둘레 (Waist)</h5>
                  <div class="inputBox flexEnd mt3 ">
                    <p class="input width01">
                      <input type="text" name="">
                    </p>
                    <span class="unit">cm</span>
                    <p class="input width01">
                      <input type="text" name="">
                    </p>
                    <span class="unit">inch</span>
                  </div>
                </li>
                <!---->
                <li>
                  <h5 class="title_09 mt4">키 (Height)</h5>
                  <div class="inputBox flexEnd mt3 ">
                    <p class="input width03">
                      <input type="text" name="">
                    </p>
                    <span class="unit">cm</span>
                  </div>
                </li>
                <!---->
                <li>
                  <h5 class="title_09 mt4">몸무게 (Weight)</h5>
                  <div class="inputBox flexEnd mt3 ">
                    <p class="input width03">
                      <input type="text" name="">
                    </p>
                    <span class="unit">kg</span>
                  </div>
                </li>
                <!---->
                <li>
                  <h5 class="title_09 mt4">신체질량지수 (BMI)</h5>
                  <div class="inputBox flexEnd mt3 ">
                    <p class="input width03">
                      <input type="text" name="">
                    </p>
                    <span class="unit">kg/m2</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <!--//section-->
          <section>
            <h3 class="title_05 colorA mt6">검진결과 확인 및 질병예측</h3>
            <div>
              <h4 class="title_05 colorE mt4">고혈압</h4>
              <ul>
                <li>
                  <h5 class="title_09 mt4">혈압 (Blood Pressure)</h5>
                  <div class="inputBox flexEnd mt3 ">
                    <p class="input width02">
                      <input type="text" name="">
                    </p>
                    <span class="unit">mmHg</span>
                    <span class="small">(표준 참고치: <span>120</span> 미만)</span>
                  </div>
                  <div class="inputBox flexEnd mt3 ">
                    <p class="input width02">
                      <input type="text" name="">
                    </p>
                    <span class="unit">mmHg</span>
                    <span class="small">(표준 참고치: <span>80</span> 미만)</span>
                  </div>
                </li>
              </ul>
            </div>
            <!--//div-->
            <div>
              <h4 class="title_05 colorE mt4">당뇨병</h4>
              <ul>
                <li>
                  <h5 class="title_09 mt4">공복혈당 (Fasting BG)</h5>
                  <div class="inputBox flexEnd mt3 ">
                    <p class="input width02">
                      <input type="text" name="">
                    </p>
                    <span class="unit">mmHg</span>
                    <span class="small">(표준 참고치: <span>100</span> 미만)</span>
                  </div>
                </li>
              </ul>
            </div>
            <!--//div-->
            <div>
              <h4 class="title_05 colorE mt4">이상지질혈증, 동맥경화</h4>
              <ul>
                <li>
                  <h5 class="title_09 mt4">총 콜레스테롤 (Total Cholesterol)</h5>
                  <div class="inputBox flexEnd mt3 ">
                    <p class="input width02">
                      <input type="text" name="">
                    </p>
                    <span class="unit">mmHg</span>
                    <span class="small">(표준 참고치: <span>200</span> 미만)</span>
                  </div>
                </li>
                <!---->
                <li>
                  <h5 class="title_09 mt4">중성지방 (Triglyceride)</h5>
                  <div class="inputBox flexEnd mt3 ">
                    <p class="input width02">
                      <input type="text" name="">
                    </p>
                    <span class="unit">mmHg</span>
                    <span class="small">(표준 참고치: <span>150</span> 미만)</span>
                  </div>
                </li>
                <!---->
                <li>
                  <h5 class="title_09 mt4">고밀도 콜레스테롤 (HDL-Cholesterol)</h5>
                  <div class="inputBox flexEnd mt3 ">
                    <p class="input width02">
                      <input type="text" name="">
                    </p>
                    <span class="unit">mmHg</span>
                    <span class="small">(표준 참고치: <span>60</span> 미만)</span>
                  </div>
                </li>
                <!---->
                <li>
                  <h5 class="title_09 mt4">저밀도 콜레스테롤 (LDL-Cholesterol)</h5>
                  <div class="inputBox flexEnd mt3 ">
                    <p class="input width02">
                      <input type="text" name="">
                    </p>
                    <span class="unit">mmHg</span>
                    <span class="small">(표준 참고치: <span>130</span> 미만)</span>
                  </div>
                </li>
                <!---->
              </ul>
            </div>
            <!--//div-->

          </section>
          <!--//section-->

          <section class="acco_list">
            <input type="checkbox" id="input_open01" class="opener">
            <div class="acco_item">
              <div class="acco_tit">
                <p class="title_05 colorF">선택항목 추가입력</p>
                <label for="input_open01" class="acco_arrow">
                  <i class="ico_arrowT_colora"></i>
                </label>
              </div>
              <div class="acco_detail">
                <div>
                  <h4 class="title_05 colorE mt4">빈혈 등</h4>
                  <ul>
                    <li>
                      <h5 class="title_09 mt4">혈색소 (Hemoglobin)</h5>
                      <div class="inputBox flexEnd mt3 ">
                        <p class="input width02">
                          <input type="text" name="">
                        </p>
                        <span class="unit">g/dL</span>
                      </div>
                      <p class="title_12 mt3">(표준 참고치: (남: 13~16.5) (여: 12~15.5))</p>
                    </li>
                  </ul>
                </div>
                <!--//div-->
                <div>
                  <h4 class="title_05 colorE mt4">만성신장질환</h4>
                  <ul>
                    <li>
                      <h5 class="title_09 mt4">혈청 크레아티닌 (Serum Creatinine)</h5>
                      <div class="inputBox flexEnd mt3 ">
                        <p class="input width02">
                          <input type="text" name="">
                        </p>
                        <span class="unit">mg/dL</span>
                        <span class="small">(표준 참고치: <span>1.5</span> 이하)</span>
                      </div>
                    </li>
                    <!---->
                    <li>
                      <h5 class="title_09 mt4">신사구체여과율 (GFR)</h5>
                      <div class="inputBox flexEnd mt3 ">
                        <p class="input width02">
                          <input type="text" name="">
                        </p>
                        <span class="unit">mL/min</span>
                        <span class="small">(표준 참고치: <span>60</span> 이상)</span>
                      </div>
                    </li>
                    <!---->
                  </ul>
                </div>
                <!--//div-->
                <div>
                  <h4 class="title_05 colorE mt4">간장질환</h4>
                  <ul>
                    <li>
                      <h5 class="title_09 mt4">AST (아스파테이트아미노 전이효소)</h5>
                      <div class="inputBox flexEnd mt3 ">
                        <p class="input width02">
                          <input type="text" name="">
                        </p>
                        <span class="unit">U/L</span>
                        <span class="small">(표준 참고치: <span>40</span> 이하)</span>
                      </div>
                    </li>
                    <!---->
                    <li>
                      <h5 class="title_09 mt4">ALT (알칼리인산 분해효소)</h5>
                      <div class="inputBox flexEnd mt3 ">
                        <p class="input width02">
                          <input type="text" name="">
                        </p>
                        <span class="unit">U/L</span>
                        <span class="small">(표준 참고치: <span>50</span> 이하)</span>
                      </div>
                    </li>
                    <!---->
                    <li>
                      <h5 class="title_09 mt4">감마지티피 (γ-GTP)</h5>
                      <div class="inputBox flexEnd mt3 ">
                        <p class="input width02">
                          <input type="text" name="">
                        </p>
                        <span class="unit">U/L</span>
                      </div>
                      <p class="title_12 mt3">(표준 참고치: (남: 11~63) (여: 8~35))</p>
                    </li>
                    <!---->
                  </ul>
                </div>
                <!--//div-->
              </div>
            </div>
          </section>
        </section>
      </div>
      <!---->
    </div>
    <!--//contents-->
    <!-- footer -->
    <div class="footer typeB">
      <div class="btnArea">
        <button class="btn_border" @click="findPage">저장하기</button><!--disabled 클래스 추가시 클릭안되게 css로 막혀있어요-->
      </div>
    </div>
    <!-- //footer -->
  </div>

</template>

<script>

export default {
  data () {
    return {
      usr_telnum: '',
      selectedDate: ''
    }
  },
  methods: {
    findPage: function () {
      alert('Test')
      this.$router.push('ScreeningSecurityNumber')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
