import Vue from "vue"
import VButton from './Button/Button.vue'

const Components = {
    VButton,
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
});

export default Components;