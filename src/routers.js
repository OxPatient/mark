import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from './pages/Index.vue'
import Plan from './pages/Plan.vue'
import NoteDesk from './pages/NoteDesk.vue'
import Note from './pages/Note.vue'

export default new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    // {name: 'Index', path: '/', component: Index},
    {name: 'Plan', path: '/plan', props: {name: "Index"}, component: Plan},
    {name: 'PlanDetail', path: '/plan/:name', props: true, component: Plan},
    {name: 'NoteDesk', path: '/noteDesk', props: true, component: NoteDesk},
    {name: 'Note', path: '/note/:bookId', props: true, component: Note},
    {name: 'NoteDetail', path: '/noteDetail/:noteId', props: true, component: Plan},
    { path: '*', redirect: '/plan' }
  ],
})