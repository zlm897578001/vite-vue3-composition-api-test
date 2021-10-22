<template>
  <router-link to='/canvas'>canvas</router-link>
  <div ref="divRef" class="name">{{ data.str }}</div>
  <el-button type="warning" size="mini" @click="add">++++</el-button>
  <div>parent data: {{ parentData }}</div>
  <div>parentDataReactive: {{ parentDataReactive.from }}</div>
  <div>parentDataRefObj: {{parentDataRefObj.from}}</div>
  <div>parentDataReactiveDeep: {{parentDataReactiveDeep.from.dep}}</div>
  <div>parentDataRefDeep: {{parentDataRefDeep.from.dep}}</div>
  <div>parentDataReactiveArray: {{parentDataReactiveArray}}</div>
  <div>parentDataRefArray: {{parentDataRefArray}}</div>
  <div>parentDataReactiveArrayObj: {{parentDataReactiveArrayObj}}</div>
  <div>parentDataReactiveObjArray: {{parentDataReactiveObjArray}}</div>
  <HelloWorld></HelloWorld>
  <!-- <div>map state name{{ name }}</div> -->
  <div>storeModuleState_A: {{ storeModuleState_A }}</div>
  <div>storeModuleStateGetters_A: {{storeModuleStateGetters_A}}</div>
  <div>storeModuleState_B: {{ storeModuleState_B }}</div>
  <div>storeModuleStateGetters_B: {{storeModuleStateGetters_B}}</div>
  <el-button type="danger" @click="thisCallBack">{{$store.state.moduleB.name}}</el-button>
</template>
<script setup>
import useJs from './useJs'

// 只能放在setup 不能放到 useJS
const emits = defineEmits(['childEvent'])
const props = defineProps({
  parentData: String,
  parentDataReactive: Object,
  parentDataRefObj: Object,
  parentDataReactiveDeep: Object,
  parentDataRefDeep: Object,
  parentDataReactiveArray: Object,
  parentDataRefArray: Object,
  parentDataReactiveArrayObj: Object,
  parentDataReactiveObjArray: Object
})

console.log('emits', emits, props);

setTimeout(() => {
  emits('childEvent', { from: 'home' })
}, 5000);

const thisCallBack = () => {
  console.log(this, 'this');
}

const {
  data,
  add,
  divRef,
  HelloWorld,
  storeModuleState_A,
  storeModuleStateGetters_A,
  storeModuleState_B,
  storeModuleStateGetters_B
} = useJs()
</script>
<style lang="scss" scoped>
.name {
  color: v-bind('data.color');
}
</style>