<template>
  <div class="site-content">
    <div class="top-head">
      <div class="left">
        <h1>Loan Information</h1>
      </div>
      <div class="button">
        <router-link :to="{ name: 'addLoan' }" class="btn theme-btn"
          ><i class="icon-plus"></i>New Loan</router-link
        >
      </div>
    </div>
    <LoanComponent :loans="loans" :v-if="!loading"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoanComponent from "@/components/Loan.vue"; // @ is an alias to /src
import { mapActions, mapState } from "vuex";

@Options({
  components: {
    LoanComponent,
  },
  computed: { ...mapState("loans", ["loans", "loading"]) },
  methods: { ...mapActions("loans", ["getAll"]) },
})
export default class Loan extends Vue {
  loading!: boolean;
  mounted() {
    (this as any).getAll();
  }
}
</script>
