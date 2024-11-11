<script>
    export default {
        name: "Sidebar",
    };
    import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
    <aside class="sidebar">
        <div class="profile">
            <div class="profile-pic">
                <span>JS</span>
            </div>
            <RouterLink class="name" to="/">Jatinder Sohal</RouterLink>
            <p class="tagline">Computer Science Graduate</p>
        </div>
        <nav class="nav-links">
            <RouterLink to="/currentProject">Current Project</RouterLink>
            <RouterLink to="/allProjects">All Projects</RouterLink>
            <RouterLink to="/education&experiance">Education & Experiance</RouterLink>
            <RouterLink to="/skills">Skills</RouterLink>
        </nav>
        <div class="icons">
            <RouterLink to="#">Github</RouterLink>
            <RouterLink to="#">Resume</RouterLink>
            <RouterLink to="#">Email</RouterLink>

        </div>
    </aside>
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
    transition: width 0.3s ease; 
    width: 23vw; 
    max-width: 455px; 
    min-width: 150px;
}
.profile {
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin-bottom: 5%;
}
.profile-pic{
    background-color: #333;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 6%;
}
.name{
    font-size: 2.1rem;
    font-weight: bold;

}
.tagline{
    font-size: 1.3rem;
}
.nav-links{
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
    font-size: 1.1rem;
}
.icons{
    margin-bottom: 15%;
}
</style>