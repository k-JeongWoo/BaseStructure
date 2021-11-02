import axios from 'axios'
// HTTP Request & Response 와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.cellimedi.com/svc/V1.0/'
  // baseUrl: 'http://sgn-stg.neodreams.co.kr:8080/svc/V1.0/'
}
/* API - 리스트 목록 조회 */
// 로그인 정보 조회
function fetchLoginUserInfo () {
  return axios.get(`${config.baseUrl}user/userInfo`, {withCredentials: true})
}
// 사용자 메인화면
function fetchUserMain () {
  return axios.get(`${config.baseUrl}user/userHealthMain`, {withCredentials: true})
}
// 사용자 수정 화면
function fetchUserUpdate (objectValue) {
  return axios.post(`${config.baseUrl}user/userUpdate`, objectValue, {withCredentials: true})
}

// 회원 가입시 사용자 정보 ( SNS Basci Info )
function fetchUserBasicInfo () {
  return axios.get(`${config.baseUrl}auth/tokenUserInfo`, {withCredentials: true})
}

// 회원가입 추가 정보 입력
function fetchUserAddInfoRegist (objectValue) {
  return axios.post(`${config.baseUrl}auth/signup`, objectValue, {withCredentials: true})
}
// 사용자 수정 상세페이지
function fetchUserDetail () {
  return axios.get(`${config.baseUrl}user/userDetail`, {withCredentials: true})
}
// 진료 및 투약 이력
function fetchMedicineList () {
  return axios.get(`${config.baseUrl}medicine/myMedicineList`, {withCredentials: true})
}
// 예상 내원일 조회
function fetchUserVisitPlan (objectValue) {
  return axios.get(`${config.baseUrl}hospital/myMagementPlanList`, {params: objectValue, withCredentials: true})
}
// 금일 복약 목록
function MedicationTodayList () {
  return axios.get(`${config.baseUrl}medicine/takeMedicineTodayList`, {withCredentials: true})
}

// 복약 알람 등록
function MedicationAlarmRegist (objectValue) {
  return axios.post(`${config.baseUrl}medicine/takeMedicineWrite`, objectValue, {withCredentials: true})
}
// 복약 상태 등록
function MedicationStatusRegist (objectValue) {
  return axios.post(`${config.baseUrl}medicine/takeMedicineHistoryWrite`, objectValue, {withCredentials: true})
}

// 복약 히스토리 목록
function MedicationHistory (objectValue) {
  return axios.get(`${config.baseUrl}medicine/takeMedicineHistoryList`, {params: objectValue, withCredentials: true})
}

// 복약 알람 수정
function MedicationAlarmModify (objectValue) {
  return axios.post(`${config.baseUrl}medicine/takeMedicineUpdate`, objectValue, {withCredentials: true})
}

// 등록된 병원 ListCnt 판별 -> 주치의 페이지 분기 처리
function myHospitalList () {
  return axios.get(`${config.baseUrl}hospital/myHospital`, {withCredentials: true})
}
// 주치의 병원목록
function hospitalList () {
  return axios.get(`${config.baseUrl}hospital/hospitalList`, {withCredentials: true})
}
// 주치의 병원 기능별 조회
function hospitalHealthyList (objectValue) {
  return axios.get(`${config.baseUrl}hospital/hospitalMain?`, {params: objectValue, withCredentials: true})
}
// 씨젠 부속병원인지 여부 체크
function hospitalCheck (objectValue) {
  return axios.get(`${config.baseUrl}hospital/seegeneHospital`, {params: objectValue, withCredentials: true})
}
// 사용자 주치의 병원 등록
function hospitalRegist (objectValue) {
  return axios.post(`${config.baseUrl}hospital/patientWrite`, objectValue, {withCredentials: true})
}
// 병원 상세정보 조회
function hospitalDetail (objectValue) {
  return axios.get(`${config.baseUrl}hospital/hospitalDetail`, {params: objectValue, withCredentials: true})
}
// 제 3자정보 제공 동의
function personAgreeRegist (objectValue) {
  return axios.post(`${config.baseUrl}hospital/patientAgreeUpdate`, objectValue, {withCredentials: true})
}
// 최근내원이력 상세보기
function recentlyVisitList (objectValue) {
  return axios.get(`${config.baseUrl}clinic/clinicList`, {params: objectValue, withCredentials: true})
}
// 최근 문의사항 리스트
function fetchInquireList (objectValue) {
  return axios.get(`${config.baseUrl}/medicalInquery/myMedicalInqueryList`, {params: objectValue, withCredentials: true})
}
// 최근 문의사항 상세보기 Popup
function fetchInquireDetail (objectValue) {
  return axios.get(`${config.baseUrl}medicalInquery/myMedicalInqueryDetail`, {params: objectValue, withCredentials: true})
}
// 문의사항 삭제
function fetchInquireRemove (objectValue) {
  return axios.post(`${config.baseUrl}medicalInquery/medicalInqueryDelete`, objectValue, {withCredentials: true})
}
// 문의하기 등록
function fetchInquireRegist (objectValue) {
  return axios.post(`${config.baseUrl}medicalInquery/medicalInqueryWrite`, objectValue, {withCredentials: true})
}
// 기능별 건강상태 조회
function fetchHealthDetail (objectValue) {
  return axios.get(`${config.baseUrl}checkupDetail/functionCheckupList`, {params: objectValue, withCredentials: true})
}
// 알림 리스트
function fetchNoticeList () {
  return axios.get(`${config.baseUrl}alarm/alarmList`, {withCredentials: true})
}
// 알림 On Off
function fetchAlarmUpdate () {
  return axios.post(`${config.baseUrl}alarm/alarmUpdate`, {}, {withCredentials: true})
}
// 사용자 회원 탈퇴
function fetchUserDelete () {
  return axios.post(`${config.baseUrl}user/userDelete`, {}, {withCredentials: true})
}
// 임직원 인증
function fetchEmployeeCertification (objectValue) {
  return axios.post(`${config.baseUrl}user/sendSeegeneMail`, objectValue, {withCredentials: true})
}
// 건강검진 List
function fetchMyCheckupList (objectValue) {
  return axios.get(`${config.baseUrl}checkup/myCheckupList`, {params: objectValue, withCredentials: true})
}

// 건강검진 문서 조회
function fetchCheckupDocList () {
  return axios.get(`${config.baseUrl}checkup/checkupDocList`, {withCredentials: true})
}

// 검진 질병별 상세 목록
function fetchDeseaseDetail (objectValue) {
  return axios.get(`${config.baseUrl}checkupDetail/checkupDetailDeseaseList`, {params: objectValue, withCredentials: true})
}
// 건강검진 PDF
function fetchCheckupDocument (objectValue) {
  return axios.get(`${config.baseUrl}checkupDetail/checkupDocument`, {params: objectValue, withCredentials: true})
}

// 건강검진 상세 목록
function fetchCheckupDetailList (objectValue) {
  return axios.get(`${config.baseUrl}checkupDetail/checkupDetailList`, {params: objectValue, withCredentials: true})
}

// 사용자 로그아웃
function fetchUserLogout () {
  return axios.post(`${config.baseUrl}user/loginout`, {}, {withCredentials: true})
}

export {
  fetchLoginUserInfo,
  fetchUserMain,
  fetchUserUpdate,
  fetchUserDetail,
  fetchUserAddInfoRegist,
  fetchUserBasicInfo,
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
  fetchMyCheckupList,
  fetchCheckupDocList,
  fetchDeseaseDetail,
  fetchCheckupDocument,
  fetchCheckupDetailList,
  fetchUserLogout
}
