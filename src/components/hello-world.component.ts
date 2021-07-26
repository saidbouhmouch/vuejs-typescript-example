import { Options,Vue} from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string

  beforeCreate(){
    console.log("++++ beforeCreate");
  }

  created() {
    console.log("++++ created");
  }

  beforeMount(){
    console.log("+++ beforeMount");
  }

  mounted(){
    console.log("+++ mounted");
  }

  beforeUpdate(){
    console.log("+++ beforeUpdate");
  }

  updated(){
    console.log("+++ updated");
  }

  beforeUnmount(){
    console.log("+++ beforeUnmount");
  }

  unmounted(){
    console.log("+++ unmounted");
  }

}

