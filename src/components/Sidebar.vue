<script>
    export default {
        name: "Sidebar",
    };
</script>


<template>
     <aside class="sidebar">
        <p>test</p>
        <p>test</p>
        <p>test</p>
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
    align-content: center;
    justify-content: center;
    transition: width 0.3s ease; 
    width: 23vw; 
    max-width: 435px; 
    min-width: 150px;
}


</style>