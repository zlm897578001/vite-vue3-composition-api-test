<template>
  <router-view
    @childEvent="childEvent"
    :parentData="parentData"
    :parentDataReactive="parentDataReactive"
    :parentDataRefObj="parentDataRefObj"
    :parentDataReactiveDeep="parentDataReactiveDeep"
    :parentDataRefDeep="parentDataRefDeep"
    :parentDataReactiveArray="parentDataReactiveArray"
    :parentDataRefArray="parentDataRefArray"
    :parentDataReactiveArrayObj="parentDataReactiveArrayObj"
    :parentDataReactiveObjArray="parentDataReactiveObjArray"
  ></router-view>
</template>

<script setup>
import { ref, reactive } from "vue";

const parentData = ref('layout')
const parentDataReactive = reactive({ from: 'reactive layout'})
const parentDataRefObj = ref({ from: 'ref obj layout'})
const parentDataReactiveDeep = reactive({ from: { dep: 'ref obj dep layout' }})
const parentDataRefDeep = ref({ from: { dep: 'ref obj dep layout' }})
const parentDataReactiveArray = reactive(['layout'])
const parentDataRefArray = ref(['layout'])
const parentDataReactiveArrayObj = reactive([{ from: 'layout'}])
const parentDataReactiveObjArray = reactive({from: [{ from: 'layout'}]})

function childEvent(args) {
  console.log('layout', args);
  parentData.value = args.from
  parentDataReactive.from = args.from
  parentDataRefObj.value.from = args.from
  parentDataReactiveDeep.from.dep = args.from
  parentDataRefDeep.value.from.dep = args.from
  parentDataReactiveArray[0] = args.from
  parentDataReactiveArray[1] = args.from
  parentDataRefArray.value[0] = args.from
  parentDataRefArray.value[1] = args.from
  parentDataReactiveArrayObj[0].from = args.from
  parentDataReactiveObjArray.from[0].from = args.from
}

console.log(parentDataRefObj, 'ref obj');
</script>

<style lang="scss" scoped>
.layout {
  color: #00aaff;
}
</style>