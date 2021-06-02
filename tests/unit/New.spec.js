import { shallowMount } from '@vue/test-utils'
import New from '@/components/buttons/New.vue'

describe('New.vue', () => {
    it('renders props when passed', () => {
        const text = 'click here'
        const wrapper = shallowMount(New, {
            propsData: {
                text: text
            }
        })

        expect(wrapper.vm.$props.text).toBe(text)
        //expect(document.getElementsByClassName('new-game')[0].innerHTML).toBe((wrapper.vm.$props.text))

    })
})