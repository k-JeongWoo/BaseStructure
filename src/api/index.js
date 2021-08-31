import axios from 'axios'

// HTTP Request & Response 와 관련된 기본 설정
const config = {
  baseUrl: '/api/v1/api/'
}

/* API - 리스트 목록 조회 */
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

// 진료문의 등록
function fetchInquireRegist (arrayValue) {
  const sendData = {
    'careProgramIds': arrayValue.careProgramIds,
    'hospitalId': arrayValue.selectHospital,
    'medicalInquiryDesc': arrayValue.mdclInqrsDesc,
    'medicalInquiryTitle': arrayValue.mdclInqrsTitle,
    'medicalInquirySeegeneMail': arrayValue.emplyEmail.concat('@seegene.com')
  }
  return axios.post(`${config.baseUrl}medicalInquery/medicalInqueryWrite`, sendData)
}

// 진료 및 투약 이력
function fetchMedicineList (objectValue) {
  return axios.get(`${config.baseUrl}medicine/myMedicineList`, {params: objectValue})
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
function hospitalListCnt () {
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
export {
  fetchProgramlList,
  fetchProgramRegist,
  fetchInquireRegist,
  fetchUserProgramList,
  fetchMedicineList,
  fetchUserVisitPlan,
  MedicationTodayList,
  hospitalListCnt,
  hospitalList,
  hospitalHealthyList
}
