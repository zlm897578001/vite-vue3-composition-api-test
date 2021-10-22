<template>
  <router-link ref="divRef" to="/home">home</router-link>
  <div class="name">{{ data.str }}</div>
  <el-button type="warning" size="mini" @click="add">++++</el-button>
  <div>parent data:{{parentData}}</div>
  <div>parentDataReactive: {{ parentDataReactive.from }}</div>
  <HelloWorld></HelloWorld>
  <div>storeModuleState_A: {{ storeModuleState_A }}</div>
  <div>storeModuleStateGetters_A: {{storeModuleStateGetters_A}}</div>
  <div>storeModuleState_B: {{ storeModuleState_B }}</div>
  <div>storeModuleStateGetters_B: {{storeModuleStateGetters_B}}</div>
</template>
<script setup>
import { computed, inject, onMounted, reactive, ref } from "vue"
import HelloWorld from '@/components/HelloWorld.vue'
import { useStore } from 'vuex'

const a = ref(0)

const data = reactive({
  str: '',
  color: 'rgb(0,0,0)'
})

function add() {
  a.value++
  strAdd()
}

function strAdd() {
  data.str = a.value + 's'
  data.color = `rgb(${a.value * 10},${a.value * 5},${a.value * 20})`
}

const divRef = ref(null)

const emits = defineEmits(['childEvent'])

console.log('emits', emits);

const props = defineProps({
  parentData: String,
  parentDataReactive: Object
})

const store = useStore();
const storeModuleState_A = computed(() => store.state.moduleA.name)
const storeModuleStateGetters_A = computed(() => store.getters['moduleA/getName'])
console.log(store);
store.dispatch('moduleA/addNameAction', 'dispatch').then(e => console.log(e, 'dispatch'))

const storeModuleState_B = computed(() => store.state.moduleB.name)
const storeModuleStateGetters_B = computed(() => store.getters.getName)

store.dispatch('addNameAction', 'dispatchB').then(e => console.log(e, 'dispatchB'))

onMounted(() => {
  console.log('el------------>', divRef.value, props.parentData);
  setTimeout(() => {
    emits('childEvent', { from: 'canvas' })
  }, 5000)
})
</script>
<style lang="scss" scoped>
.name {
  color: v-bind('data.color');
}
</style>