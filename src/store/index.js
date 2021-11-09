const headerBtnType = {
  'page_tutorial': {
    titleTxt: 'home', // TEXT
    titleGbn: 'IM', // TX(TEXT), IM(IMAGE), NN (NONE)
    LGNBGbn: 'HA', // TYPE HA(HAMBERGER), BA(BACK), AC(ACTION), NN (NONE)
    RGNBGbn: 'AR', // TYPE AR(ALARM), CL(CLOSE), JM(JUMP), NN (NONE)
    conClass: 'main' // ex) 'noBg inquery_info_01',
  },
  'page_main': {
    titleTxt: 'home', // TEXT
    titleGbn: 'IM', // TX(TEXT), IM(IMAGE), NN (NONE)
    LGNBGbn: 'HA', // TYPE HA(HAMBERGER), BA(BACK), AC(ACTION), NN (NONE)
    RGNBGbn: 'AR', // TYPE AR(ALARM), CL(CLOSE), JM(JUMP), NN (NONE)
    conClass: 'main' // ex) 'noBg inquery_info_01',
  },
  'page_doctorMain': {
    titleTxt: 'viocross', // TEXT
    titleGbn: 'IM', // TX(TEXT), IM(IMAGE), NN (NONE)
    LGNBGbn: 'HA', // TYPE HA(HAMBERGER), BA(BACK), AC(ACTION), NN (NONE)
    RGNBGbn: 'AR', // TYPE AR(ALARM), CL(CLOSE), JM(JUMP), NN (NONE)
    conClass: 'main_doctor' // ex) 'noBg inquery_info_01',
  },
  'page_medication_history': {
    titleTxt: '내가 먹은 약 기록', // TEXT
    titleGbn: 'TX', // TX(TEXT), IM(IMAGE), NN (NONE)
    LGNBGbn: 'NN', // TYPE HA(HAMBERGER), BA(BACK), AC(ACTION), NN (NONE)
    RGNBGbn: 'CL', // TYPE AR(ALARM), CL(CLOSE), JM(JUMP), NN (NONE)
    conClass: 'main' // ex) 'noBg inquery_info_01',
  },
  'page_medication_setting': {
    titleTxt: '알람/약 설정', // TEXT
    titleGbn: 'TX', // TX(TEXT), IM(IMAGE), NN (NONE)
    LGNBGbn: 'AC', // TYPE HA(HAMBERGER), BA(BACK), AC(ACTION), NN (NONE)
    RGNBGbn: 'CL', // TYPE AR(ALARM), CL(CLOSE), JM(JUMP), NN (NONE)
    conClass: 'main' // ex) 'noBg inquery_info_01',
  },
  'page_hospital_introduce': {
    titleTxt: '병원명', // TEXT
    titleGbn: 'TX', // TX(TEXT), IM(IMAGE), NN (NONE)
    LGNBGbn: 'BA', // TYPE HA(HAMBERGER), BA(BACK), AC(ACTION), NN (NONE)
    RGNBGbn: 'NN', // TYPE AR(ALARM), CL(CLOSE), JM(JUMP), NN (NONE)
    conClass: 'hospital_02' // ex) 'noBg inquery_info_01',
  },
  'page_Login': {
    titleTxt: '', // TEXT
    titleGbn: 'TX', // TX(TEXT), IM(IMAGE), NN (NONE)
    LGNBGbn: 'BA', // TYPE HA(HAMBERGER), BA(BACK), AC(ACTION), NN (NONE)
    RGNBGbn: 'NN', // TYPE AR(ALARM), CL(CLOSE), JM(JUMP), NN (NONE)
    conClass: 'main' // ex) 'noBg inquery_info_01',
  },
  'page_myInfo': {
    titleTxt: '내 정보 관리', // TEXT
    titleGbn: 'TX', // TX(TEXT), IM(IMAGE), NN (NONE)
    LGNBGbn: 'BA', // TYPE HA(HAMBERGER), BA(BACK), AC(ACTION), NN (NONE)
    RGNBGbn: 'NN', // TYPE AR(ALARM), CL(CLOSE), JM(JUMP), NN (NONE)
    conClass: 'main' // ex) 'noBg inquery_info_01',
  },
  'page_healthInfo': {
    titleTxt: '국민건강보험 정보 불러오기', // TEXT
    titleGbn: 'TX', // TX(TEXT), IM(IMAGE), NN (NONE)
    LGNBGbn: 'BA', // TYPE HA(HAMBERGER), BA(BACK), AC(ACTION), NN (NONE)
    RGNBGbn: 'NN', // TYPE AR(ALARM), CL(CLOSE), JM(JUMP), NN (NONE)
    conClass: 'main' // ex) 'noBg inquery_info_01',
  },
  'page_healthInfo_detail': {
    titleTxt: '국민건강보험 정보 관리', // TEXT
    titleGbn: 'TX', // TX(TEXT), IM(IMAGE), NN (NONE)
    LGNBGbn: 'BA', // TYPE HA(HAMBERGER), BA(BACK), AC(ACTION), NN (NONE)
    RGNBGbn: 'NN', // TYPE AR(ALARM), CL(CLOSE), JM(JUMP), NN (NONE)
    conClass: 'noBg healthIn_info01' // ex) 'noBg inquery_info_01',
  },
  'page_healthInfo_Cancer': {
    titleTxt: '국민건강보험 정보 관리', // TEXT
    titleGbn: 'TX', // TX(TEXT), IM(IMAGE), NN (NONE)
    LGNBGbn: 'BA', // TYPE HA(HAMBERGER), BA(BACK), AC(ACTION), NN (NONE)
    RGNBGbn: 'NN', // TYPE AR(ALARM), CL(CLOSE), JM(JUMP), NN (NONE)
    conClass: 'noBg healthIn_info02' // ex) 'noBg inquery_info_01',
  },
  'page_healthInfo_Info': {
    titleTxt: '국민건강보험 정보 관리', // TEXT
    titleGbn: 'TX', // TX(TEXT), IM(IMAGE), NN (NONE)
    LGNBGbn: 'BA', // TYPE HA(HAMBERGER), BA(BACK), AC(ACTION), NN (NONE)
    RGNBGbn: 'NN', // TYPE AR(ALARM), CL(CLOSE), JM(JUMP), NN (NONE)
    conClass: 'noBg healthIn_info03' // ex) 'noBg inquery_info_01',
  },
  'page_healthInfo_item': {
    titleTxt: '검사내용', // TEXT
    titleGbn: 'TX', // TX(TEXT), IM(IMAGE), NN (NONE)
    LGNBGbn: 'NN', // TYPE HA(HAMBERGER), BA(BACK), AC(ACTION), NN (NONE)
    RGNBGbn: 'BA', // TYPE AR(ALARM), CL(CLOSE), JM(JUMP), NN (NONE)
    conClass: 'main' // ex) 'noBg inquery_info_01',
  },
  'page_hospital_List': {
    titleTxt: '병원목록 조회', // TEXT
    titleGbn: 'TX', // TX(TEXT), IM(IMAGE), NN (NONE)
    LGNBGbn: 'BA', // TYPE HA(HAMBERGER), BA(BACK), AC(ACTION), NN (NONE)
    RGNBGbn: 'NN', // TYPE AR(ALARM), CL(CLOSE), JM(JUMP), NN (NONE)
    conClass: 'noBg hospital_01' // ex) 'noBg inquery_info_01',
  },
  'page_hospital_regist': {
    titleTxt: '주치의 병원 등록', // TEXT
    titleGbn: 'TX', // TX(TEXT), IM(IMAGE), NN (NONE)
    LGNBGbn: 'AC', // TYPE HA(HAMBERGER), BA(BACK), AC(ACTION), NN (NONE)
    RGNBGbn: 'CL', // TYPE AR(ALARM), CL(CLOSE), JM(JUMP), NN (NONE)
    conClass: 'noBg hospital_enrollment' // ex) 'noBg inquery_info_01'
  },
  'page_alarm': {
    titleTxt: '알림', // TEXT
    titleGbn: 'TX', // TX(TEXT), IM(IMAGE), NN (NONE)
    LGNBGbn: 'BA', // TYPE HA(HAMBERGER), BA(BACK), AC(ACTION), NN (NONE)
    RGNBGbn: 'NN', // TYPE AR(ALARM), CL(CLOSE), JM(JUMP), NN (NONE)
    conClass: 'main' // ex) 'noBg inquery_info_01',
  },
  'page_QnA': {
    titleTxt: '문의내용 상세보기', // TEXT
    titleGbn: 'TX', // TX(TEXT), IM(IMAGE), NN (NONE)
    LGNBGbn: 'NN', // TYPE HA(HAMBERGER), BA(BACK), AC(ACTION), NN (NONE)
    RGNBGbn: 'CL', // TYPE AR(ALARM), CL(CLOSE), JM(JUMP), NN (NONE)
    conClass: 'main' // ex) 'noBg inquery_info_01',
  },
  'page_notice': {
    titleTxt: '알림', // TEXT
    titleGbn: 'TX', // TX(TEXT), IM(IMAGE), NN (NONE)
    LGNBGbn: 'BA', // TYPE HA(HAMBERGER), BA(BACK), AC(ACTION), NN (NONE)
    RGNBGbn: 'NN', // TYPE AR(ALARM), CL(CLOSE), JM(JUMP), NN (NONE)
    conClass: 'noBg notice' // ex) 'noBg inquery_info_01',
  },
  'page_common_back': {
    titleTxt: 'title', // TEXT
    titleGbn: 'TX', // TX(TEXT), IM(IMAGE), NN (NONE)
    LGNBGbn: 'BA', // TYPE HA(HAMBERGER), BA(BACK), AC(ACTION), NN (NONE)
    RGNBGbn: 'NN', // TYPE AR(ALARM), CL(CLOSE), JM(JUMP), NN (NONE)
    conClass: '' // ex) 'noBg inquery_info_01',
  },
  'page_common_close': {
    titleTxt: 'title', // TEXT
    titleGbn: 'TX', // TX(TEXT), IM(IMAGE), NN (NONE)
    LGNBGbn: 'NN', // TYPE HA(HAMBERGER), BA(BACK), AC(ACTION), NN (NONE)
    RGNBGbn: 'CL', // TYPE AR(ALARM), CL(CLOSE), JM(JUMP), NN (NONE)
    conClass: '' // ex) 'noBg inquery_info_01',
  }
}

export {
  headerBtnType
}
