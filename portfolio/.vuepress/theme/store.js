import Vuex from 'vuex'
import config from '../config.js'

/*
Loading states:
covering = set by globabl beforeEach route guard (next guard called by revealer after covering transition finishes)
loading - set by globabl beforeResolve route guard
revealing - set by loaded loadable hero component
finished - set by revealer
*/

export default (Vue) => {

  Vue.use(Vuex)

  return new Vuex.Store({
    state: {
      isSearchboxOpen: false,
      isSidebarOpen: false,
      pageLoadingStatus: 'loading',
      revealerTitle: {
        title: '',
        subtitle: ''
      },
      revealerInitialised: false,
      nextGuardCallback : null,
      projectPosition: {
        childLeft: null,
        childTop: null,
        childWidth: null,
        childHeight: null,
        scroll: 0
      },
      lastProject: {
        hasLastProject: false,
        background: ''
      },
      useLastProject: false,
    },
    mutations: {
      SET_SEARCHBOX_STATUS (state, status) {
        state.isSearchboxOpen = status
      },
      SET_SIDEBAR_STATUS (state, status) {
        state.isSidebarOpen = status
      },
      SET_LOADING_STATUS (state, status) {
        state.pageLoadingStatus = status
      },
      SET_TITLE_STATUS (state, status) {
        state.revealerTitle = status
      },
      SET_REVEALER_INIT (state, status) {
        state.revealerInitialised = status
      },
      SET_NEXT_GUARD (state, status) {
        state.nextGuardCallback = status
      },
      SET_PROJECT_POSITION (state, status) {
        state.projectPosition = status
      },
      SET_LAST_PROJECT (state, status) {
        state.lastProject = status
      },
      USE_LAST_PROJECT (state, status) {
        state.useLastProject = status
      }
    },
    actions: {
      setSearchboxStatus (context, payload) {
        context.commit('SET_SEARCHBOX_STATUS', payload)
      },
      setSidebarStatus (context, payload) {
        if (payload === false) {
          context.commit('SET_SEARCHBOX_STATUS', payload)
        }
        context.commit('SET_SIDEBAR_STATUS', payload)
      },
      setLoadingPageContent (context, payload) {
        context.commit('SET_LOADING_STATUS', payload)
      },
      setTitleStatus (context, payload) {
        context.commit('SET_TITLE_STATUS', payload)
      },
      setRevealerInit (context, payload) {
        context.commit('SET_REVEALER_INIT', payload)
      },
      setNextGuardCallback (context, payload) {
        context.commit('SET_NEXT_GUARD', payload)
      },
      setProjectPosition (context, payload) {
        context.commit('SET_PROJECT_POSITION', payload)
      },
      setLastProject (context, payload) {
        context.commit('SET_LAST_PROJECT', payload)
      },
      useLastProject (context, payload) {
        context.commit('USE_LAST_PROJECT', payload)
      }
    }
  })
}