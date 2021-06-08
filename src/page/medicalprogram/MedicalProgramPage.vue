<template lang="html">
  <div>
    <div>관심있는 진료 프로그램을 선택하면 더 자세한 진료를 받을 수 있어요.</div>
    <medicalform style="margin-top: 100px"></medicalform>
  </div>
</template>

<script>
import MedicalProgram from '@/components/medicalprogram/MedicalProgramForm'

export default {
  components: {
    'medicalform': MedicalProgram
  }
}
</script>

<style>
@import '../../assets/resources/css/common.css';
@import '../../assets/resources/css/index.css';
</style>
