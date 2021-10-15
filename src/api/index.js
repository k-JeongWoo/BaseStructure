import axios from 'axios'
// HTTP Request & Response 와 관련된 기본 설정
const config = {
  baseUrl: '/api/data/V1.0/api/'
}
/* API - 리스트 목록 조회 */
// 사용자 메인화면
function fetchUserMain () {
  return axios.get(`${config.baseUrl}user/userHealthMain`)
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

// 복약 알람 등록
function MedicationAlarmRegist (objectValue) {
  return axios.post(`${config.baseUrl}medicine/takeMedicineWrite`, objectValue)
}
// 복약 상태 등록
function MedicationStatusRegist (objectValue) {
  return axios.post(`${config.baseUrl}medicine/takeMedicineHistoryWrite`, objectValue)
}

// 복약 히스토리 목록
function MedicationHistory (objectValue) {
  return axios.get(`${config.baseUrl}medicine/takeMedicineHistoryList`, {params: objectValue})
}

// 복약 알람 수정
function MedicationAlarmModify (objectValue) {
  return axios.post(`${config.baseUrl}medicine/takeMedicineUpdate`, objectValue)
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
// 알림 리스트
function fetchNoticeList () {
  return axios.get(`${config.baseUrl}alarm/alarmList`)
}
// 알림 On Off
function fetchAlarmUpdate () {
  return axios.post(`${config.baseUrl}alarm/alarmUpdate`)
}
// 사용자 회원 탈퇴
function fetchUserDelete () {
  return axios.post(`${config.baseUrl}user/userDelete`)
}
// 임직원 인증
function fetchEmployeeCertification (objectValue) {
  return axios.post(`${config.baseUrl}user/sendSeegeneMail`, objectValue)
}
// 건강검진 List
function fetchMyCheckupList () {
  return axios.get(`${config.baseUrl}checkup/myCheckupList`)
}

export {
  fetchUserMain,
  fetchMedicineList,
  fetchUserVisitPlan,
  MedicationTodayList,
  MedicationAlarmRegist,
  MedicationStatusRegist,
  MedicationHistory,
  MedicationAlarmModify,
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
  fetchHealthDetail,
  fetchNoticeList,
  fetchAlarmUpdate,
  fetchUserDelete,
  fetchEmployeeCertification,
  fetchMyCheckupList
}
