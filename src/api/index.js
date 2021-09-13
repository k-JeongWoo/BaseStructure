import axios from 'axios'
// HTTP Request & Response 와 관련된 기본 설정
const config = {
  baseUrl: '/api/v1/api/'
}
/* API - 리스트 목록 조회 */
// 사용자 메인화면
function fetchUserMain () {
  return axios.get(`${config.baseUrl}user/userHealthMain`)
}
// 관심프로그램 목록 조회
function fetchProgramlList () {
  return axios.get(`${config.baseUrl}carePrgm/careProgramList`)
}
// 사용자 선택 관심프로그램 목록
function fetchUserProgramList () {
  return axios.get(`${config.baseUrl}/attentionProgram/attentionProgramList`)
}
// 관심프로그램 중간 저장
function fetchProgramRegist (stringValue) {
  const sendData = {
    careProgramIds: stringValue
  }
  return axios.post(`${config.baseUrl}attentionProgram/attentionProgramWrite`, sendData)
}
// 진료 및 투약 이력
function fetchMedicineList () {
  return axios.get(`${config.baseUrl}medicine/myMedicineList`)
}
// 예상 내원일 조회
function fetchUserVisitPlan (objectValue) {
  return axios.get(`${config.baseUrl}hospital/myMagementPlanList`, {params: objectValue})
}
// 금일 복약 목록
function MedicationTodayList () {
  return axios.get(`${config.baseUrl}medicine/takeMedicineTodayList`)
}
// 등록된 병원 ListCnt 판별 -> 주치의 페이지 분기 처리
function myHospitalList () {
  return axios.get(`${config.baseUrl}hospital/myHospital`)
}
// 주치의 병원목록
function hospitalList () {
  return axios.get(`${config.baseUrl}hospital/hospitalList`)
}
// 주치의 병원 기능별 조회
function hospitalHealthyList (objectValue) {
  return axios.get(`${config.baseUrl}hospital/hospitalMain?`, {params: objectValue})
}
// 씨젠 부속병원인지 여부 체크
function hospitalCheck (objectValue) {
  return axios.get(`${config.baseUrl}hospital/seegeneHospital`, {params: objectValue})
}
// 사용자 주치의 병원 등록
function hospitalRegist (objectValue) {
  return axios.post(`${config.baseUrl}hospital/patientWrite`, objectValue)
}
// 병원 상세정보 조회
function hospitalDetail (objectValue) {
  return axios.get(`${config.baseUrl}hospital/hospitalDetail`, {params: objectValue})
}
// 제 3자정보 제공 동의
function personAgreeRegist (objectValue) {
  return axios.post(`${config.baseUrl}hospital/patientAgreeUpdate`, objectValue)
}
// 최근내원이력 상세보기
function recentlyVisitList (objectValue) {
  return axios.get(`${config.baseUrl}clinic/clinicList`, {params: objectValue})
}
// 최근 문의사항 리스트
function fetchInquireList (objectValue) {
  return axios.get(`${config.baseUrl}/medicalInquery/myMedicalInqueryList`, {params: objectValue})
}
// 최근 문의사항 상세보기 Popup
function fetchInquireDetail (objectValue) {
  return axios.get(`${config.baseUrl}medicalInquery/myMedicalInqueryDetail`, {params: objectValue})
}
// 문의사항 삭제
function fetchInquireRemove (objectValue) {
  return axios.post(`${config.baseUrl}medicalInquery/medicalInqueryDelete`, objectValue)
}
// 문의하기 등록
function fetchInquireRegist (objectValue) {
  return axios.post(`${config.baseUrl}medicalInquery/medicalInqueryWrite`, objectValue)
}
// 기능별 건강상태 조회
function fetchHealthDetail (objectValue) {
  return axios.get(`${config.baseUrl}checkupDetail/functionCheckupList`, {params: objectValue})
}
export {
  fetchUserMain,
  fetchProgramlList,
  fetchProgramRegist,
  fetchUserProgramList,
  fetchMedicineList,
  fetchUserVisitPlan,
  MedicationTodayList,
  myHospitalList,
  hospitalList,
  hospitalHealthyList,
  hospitalCheck,
  hospitalRegist,
  hospitalDetail,
  personAgreeRegist,
  recentlyVisitList,
  fetchInquireList,
  fetchInquireDetail,
  fetchInquireRemove,
  fetchInquireRegist,
  fetchHealthDetail
}
