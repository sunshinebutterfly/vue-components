<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import { computed, defineComponent, onMounted, reactive, ref, watch } from 'vue'
 import Button from './components/button/button.vue'
 import SIcon from './components/icon/icon.vue'
 import Collapse from './components/collapse/collapse.vue'
 import CollapseItem from './components/collapse/collapseItem.vue'
 import type {ButtonInstance} from './components/button/button.ts'
 import {ref,onMounted} from 'vue'
 import {Loading, Search } from '@element-plus/icons-vue'
 const buttonRef = ref<ButtonInstance | null>(null)
const val = ref(['a','b'])
 onMounted( () => {
  if(buttonRef.value){
    console.log(buttonRef.value.ref)
  }
  
 })
</script>

<template>
  <h1>hello HelloWorld</h1>
  <h2>hello HelloWorld</h2>
  <h3>hello HelloWorld</h3>
  <br><br>
  <Button type="primary" :icon="Search">primary button</Button>
  <Button type="success">success button</Button>
  <Button type="warning">warning button</Button>
  <Button type="danger">disabled button</Button>
  <Button type="info">info</Button>
  <br><br>
  <Button plain type="primary" :icon="Loading">primary button</Button>
  <Button plain type="primary" :icon="Search">primary button</Button>
  <Button plain type="success">success button</Button>
  <Button plain type="warning">warning button</Button>
  <Button plain type="danger">disabled button</Button>
  <Button plain type="info">info</Button>
  <br><br>
  <div>
    <S-Icon color="#409EFC" size="22" class="is-loading">
      <Loading></Loading>
    </S-Icon>
    <S-Icon color="#ff0000" class="is-loading">
      <Edit></Edit>
    </S-Icon>
    <S-Icon size="20">
      <Edit></Edit>
    </S-Icon>
    <S-Icon class="is-loading">
      <Edit></Edit>
    </S-Icon>
  </div>
  
  <a href="#">link</a>
  <hr/>
  <!-- <RouterView /> -->

  <Collapse v-model="val" accordion>
    <Collapse-Item name="a">
      <template #title>
        <h1> title </h1>
      </template>
      <h1>head title</h1>
      <div>aaaaaa</div>
    </Collapse-Item>
    <Collapse-Item name="b" title="this bbbbbbb">
      <div>nnnnnnbbbbbbbbbbbbb</div>
    </Collapse-Item>
    <Collapse-Item name="c" disabled title="this cccccccccccc">
      <div>cccccccccccccccc</div>
    </Collapse-Item>
  </Collapse>
  {{ val }}
</template>

<style scoped>
</style>
