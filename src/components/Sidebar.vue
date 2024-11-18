<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { ref } from 'vue'

const isOverlay = ref(false)
const toggleSidebar = () => {
  isOverlay.value = !isOverlay.value
}
const router = useRouter()
const navigate = (route: string) => {
  router.push(route)
  isOverlay.value = false
}
</script>

<template>
  <aside :class="['sidebar', { 'sidebar--overlay': isOverlay }]">
    <div class="profile">
      <div class="profile-pic">
        <span>JS</span>
      </div>
      <button class="name" @click="navigate('/')">Jatinder Sohal</button>
      <p class="tagline">Computer Science Graduate</p>
    </div>
    <nav class="nav-links">
      <button @click="navigate('/currentProject')">Current Project</button>
      <button @click="navigate('/allProjects')">All Projects</button>
      <button @click="navigate('/education&experiance')">Education & Experiance</button>
      <button @click="navigate('/skills')">Skills</button>
    </nav>
    <div class="icons">
      <RouterLink to="#">Github</RouterLink>
      <RouterLink to="#">Resume</RouterLink>
      <RouterLink to="#">Email</RouterLink>
    </div>
  </aside>

  <button class="toggle-btn" @click="toggleSidebar">Toggle Navigation</button>
</template>

<style scoped>
.sidebar {
  background: url('../assets/1.jpg') center center / cover no-repeat;
  filter: brightness(85%);
  padding: 20px;
  margin-right: 10px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  width: 23vw;
  max-width: 455px;
  min-width: 150px;
  z-index: 10;
}
.sidebar--overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  max-width: 100%;
}
.sidebar--overlay .profile-pic {
}
Button {
  text-decoration: none;
  background-color: transparent;
  color: white;
  transition: 0.4s;
  font-weight: 480;
  border: none;
  font-size: 1rem;
  padding: 6px 5px;
}
Button:hover {
  background-color: hsla(80, 67%, 68%, 0.2);
}
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
}
.profile-pic {
  background-color: #333;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
.name {
  font-size: 2.1rem;
  font-weight: bold;
}
.tagline {
  font-size: 1.3rem;
}
.nav-links {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  font-size: 1.1rem;
}
.icons {
  margin-bottom: 15%;
}
.toggle-btn {
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: #333;
  color: white;
  z-index: 30;
}
</style>
