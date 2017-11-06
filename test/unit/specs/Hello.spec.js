import Vue from 'vue'
import Welcome from '@/components/WelcomePage'

describe('WelcomePage.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(WelcomePage)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.welcome h1').textContent)
      .to.equal('Vue To-do List')
  })
})
