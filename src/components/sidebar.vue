<template>
  <div class="sidebar custom-scroll-div">
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt=""/>
      <p>Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
      <button
          class="navbar-toggler toggle-btn"
          type="button"
          data-toggle="collapse"
          data-target="#menu-content"
          aria-controls="menu-content"
          aria-expanded="false"
          aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>

    <div class="menu-list collapse out" id="menu-content">
      <ul>
        <li class="active">
          <router-link :to="{ name: 'home' }">
            <div class="img"><i class="icon-home"></i></div>
            <div class="text">Home</div>
          </router-link>
        </li>
        <li class="">
          <a href="#" title=""
          >
            <div class="img"><i class="icon-card"></i></div>
            <div class="text">Cards</div>
          </a
          >
        </li>
        <li>
          <router-link :to="{ name: 'loans' }">
            <div class="img"><i class="icon-payment"></i></div>
            <div class="text">Loans</div>
          </router-link
          >
        </li>
        <li>
          <a href="#" title=""
          >
            <div class="img"><i class="icon-credit"></i></div>
            <div class="text">Credit</div>
          </a
          >
        </li>
        <li>
          <a href="#" title=""
          >
            <div class="img"><i class="icon-user"></i></div>
            <div class="text">Settings</div>
          </a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class Sidebar extends Vue {
}
</script>
