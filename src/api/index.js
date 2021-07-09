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

// 병원 목록 조회
function fetchHospitalList (stringValue) {
  const sendData = {
    hospitalId: stringValue
  }
  return axios.get(`${config.baseUrl}hospital/hospitalList`, sendData)
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

//
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

export {
  fetchHospitalList,
  fetchProgramlList,
  fetchProgramRegist,
  fetchInquireRegist,
  fetchUserProgramList
}
