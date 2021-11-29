<template>
  <div class="site-content">
    <div class="card">
      <div class="card-body">
        <h1 class="card-title">Add Loan Information</h1>
        <AddLoanComponent />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AddLoanComponent from "@/components/AddLoan.vue"; // @ is an alias to /src

@Options({
  components: {
    AddLoanComponent,
  },
})
export default class AddLoan extends Vue {}
</script>
