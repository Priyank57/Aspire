<template>
  <Form
    :validation-schema="schema"
    v-slot="{ errors, isSubmitting }"
    @submit="handleSubmit"
  >
    <div class="form-group mb-2">
      <label for="amount">Name</label>
      <Field
        name="name"
        class="form-control"
        :class="{ 'is-invalid': errors.name }"
      />
      <div v-show="errors.name" class="invalid-feedback">
        {{ errors.name }}
      </div>
    </div>
    <div class="form-group mb-2">
      <label for="amount">Amount</label>
      <Field
        name="amount"
        class="form-control"
        :class="{ 'is-invalid': errors.amount }"
      />
      <div v-show="errors.amount" class="invalid-feedback">
        {{ errors.amount }}
      </div>
    </div>
    <div class="form-group mb-4">
      <label htmlFor="password">Terms</label>
      <Field
        name="terms"
        class="form-control"
        :class="{ 'is-invalid': errors.terms }"
      />
      <div v-show="errors.terms" class="invalid-feedback">
        {{ errors.terms }}
      </div>
    </div>
    <div class="form-group">
      <button class="btn theme-btn" :disabled="isSubmitting">
        <img
          v-show="loading"
          src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
        />
        Save
      </button>
      <router-link to="/loans" class="btn btn-link" style="margin-left: 20px"
        >Back</router-link
      >
    </div>
  </Form>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { mapActions, mapState } from "vuex";
// eslint-disable-next-line
import { Form, Field, FormActions, FormContext } from "vee-validate";
import * as Yup from "yup";

@Options({
  methods: { ...mapActions("loans", ["save"]) },
  computed: { ...mapState("loans", ["loading"]) },
  components: { Form, Field },
})
export default class AddLoanComponent extends Vue {
  loading!: boolean;

  save!: ({
    amount,
    terms,
    name,
  }: {
    amount: number;
    terms: number;
    name: string;
  }) => Promise<void>;

  schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    amount: Yup.string()
      .required("Amount is required")
      .matches(/^\d+$/, "Amount should be numbers"),
    terms: Yup.string()
      .required("Terms is required")
      .matches(/^\d+$/, "Terms should be numbers"),
  });

  handleSubmit(formValues: FormContext['values'], actions: FormContext): void {
    const { amount, terms, name } = formValues;
    if (amount && terms && name) {
      this.save({ amount, terms, name }).then(() => actions.resetForm());
    }
  }
}
</script>
