<template>
  <div class="">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Amount</th>
          <th scope="col">Total Terms</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in loans" :key="item.id">
          <th scope="row">{{ key + 1 }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.terms }}</td>
          <td><button class="btn theme-btn" @click="handleRepay(item.id)">Repay</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions } from "vuex";
@Options({
  props: { loans: [] },
  methods: { ...mapActions("loans", ["repay"]) },
})
export default class LoanComponent extends Vue {
  repay!: (id: string) => void;
  handleRepay(id: string) {
    this.repay(id);
  }
}
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
