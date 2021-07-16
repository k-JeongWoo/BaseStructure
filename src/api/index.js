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

// 관심프로그램에 의한 병원 목록 조회
function fetchHospitalList (objectValue) {
  return axios.get(`${config.baseUrl}hospital/hospitalList`, {params: objectValue})
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
function fetchMedicineList (stringValue) {
  return axios.get(`${config.baseUrl}medicine/myMedicineList`,
    {
      prams: {
        endDate: '20200709',
        startDate: '20200409'
      }
    })
}

export {
  fetchHospitalList,
  fetchProgramlList,
  fetchProgramRegist,
  fetchInquireRegist,
  fetchUserProgramList,
  fetchMedicineList
}
