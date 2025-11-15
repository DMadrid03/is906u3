<template>
    <nav>
        <ul>
            
            <RouterLink to="/"><li>Home</li></RouterLink>
            <RouterLink to="/about"><li>About</li></RouterLink>
        </ul>
    </nav>
</template>
<style scoped>

    ul{
        list-style: none;
        display: flex;
        gap: 4
    }

    li{
        margin: 0 12px;

    }
    a{
        font-weight: 200;
        font-size: 20.5px;
        color: #26A69A;
        text-decoration: none
    }

    RouterLink.active{
        background-color: #26A69A;
        color: white;
    }
</style>