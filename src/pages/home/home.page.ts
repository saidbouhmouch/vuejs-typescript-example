import { Options, Vue} from 'vue-class-component';
import HelloWorld from '../../components/hello-world.component.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomePage extends Vue {}