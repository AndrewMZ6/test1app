<template>
    <p>Current route is: <h3 style="display: inline;"><b>{{ $route.fullPath }}</b></h3></p>
    <RouterLink to="/">
        <button> Домой </button>
    </RouterLink>
    
    <RouterLink to="/about">
        <button>
            О нас
        </button>
    </RouterLink>

    <RouterLink to="/users">
        <button>
            Узерс
        </button>
    </RouterLink>

    <RouterLink to="/concrete">
        <button>
            Конкретный юзер
        </button>
    </RouterLink>
</template>