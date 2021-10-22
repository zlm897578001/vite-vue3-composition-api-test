import { ref, reactive, watchEffect, onMounted, inject, getCurrentInstance, defineEmits, defineProps, computed } from "vue";
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, useStore, mapActions } from 'vuex'

export default function useJs() {
  const a = ref(0)

  const data = reactive({
    str: '',
    color: 'rgb(0,0,0)'
  })

  const divRef = ref(null)

  function add() {
    a.value++
    strAdd()
  }

  function strAdd() {
    data.str = a.value + 's'
    data.color = `rgb(${a.value * 10},${a.value * 5},${a.value * 20})`
  }

  // store辅助函数中使用了 this 无法在 setup 中使用
  // console.log(mapState(['name']), mapActions(['addNameAction']), 'store map state');
  // const { name: stateName } = mapState(['name'])
  // const { addNameAction } = mapActions(['addNameAction'])

  // const name = computed(stateName)

  const store = useStore();
  const storeModuleState_A = computed(() => store.state.moduleA.name)
  const storeModuleStateGetters_A = computed(() => store.getters['moduleA/getName'])
  // console.log(store);
  store.dispatch('moduleA/addNameAction', 'dispatch').then(e => console.log(e, 'dispatch'))

  const storeModuleState_B = computed(() => store.state.moduleB.name)
  const storeModuleStateGetters_B = computed(() => store.getters.getName)

  store.dispatch('addNameAction', 'dispatchB').then(e => console.log(e, 'dispatchB'))
  
  const $msg = inject('$msg')

  const vm = getCurrentInstance()
  
  onMounted(() => {
    console.log('el ---------> ', divRef.value);
    vm.appContext.config.globalProperties.$confirm('内容', '标题', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }).then(() => {
      $msg({
        type: 'info',
        message: '这是message'
      })
    })
  })

  return {
    data,
    add,
    divRef,
    HelloWorld,
    storeModuleState_A,
    storeModuleStateGetters_A,
    storeModuleState_B,
    storeModuleStateGetters_B
  }
};
