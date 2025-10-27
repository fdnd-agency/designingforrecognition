<script>
    export let data
    const sponsors = data.Sponsor
    </script>

<section class="sponsors">
    <header class="title">
    <h2>Onze partners</h2>
    </header>



    <!-- Bovenste rij (links → rechts) -->
    <div class="logo-top">
    <ul class="logo-strip-top">
        {#each sponsors as q, i}
        <li><img src="https://fdnd-agency.directus.app/assets/{q.logo}" alt="AMS Institute"></li>
        {/each}
    </ul>
    </div>
    <div>
    <ul class="logo-strip-bottom">
        {#each sponsors as q}
        <li><img src="https://fdnd-agency.directus.app/assets/{q.logo}" alt="AMS Institute"></li>
        {/each}
    </ul>
    <!-- {#each sponsors as q, i}
        {#if i == 2}
            <ul class="logo-strip-bottom">
            {:else}
            <ul class="logo-strip-top">
        {/if}
    
        <li><img src="https://fdnd-agency.directus.app/assets/{q.logo}" alt="AMS Institute"></li>
    </ul>
    {/each} -->

    </div>

    <!-- Onderste rij (rechts → links, omgekeerde volgorde) -->
    <!-- <div class="logo-bottom">
    <ul class="logo-strip-bottom">
        <li><img src="/assets/Waag.png" alt="Waag Futurelab"></li>
        <li><img src="/assets/TUDelft.png" alt="TU Delft"></li>
        <li><img src="/assets/City-of-Rotterdam.png" alt="Gemeente Rotterdam"></li>
        <li><img src="/assets/City-of-Amsterdam.png" alt="City of Amsterdam"></li>
        <li><img src="/assets/AMS_LogoWHITE.png" alt="AMS Institute"></li>
    </ul>
    <ul class="logo-strip-bottom">
        <li><img src="/assets/Waag.png" alt="Waag Futurelab"></li>
        <li><img src="/assets/TUDelft.png" alt="TU Delft"></li>
        <li><img src="/assets/City-of-Rotterdam.png" alt="Gemeente Rotterdam"></li>
        <li><img src="/assets/City-of-Amsterdam.png" alt="City of Amsterdam"></li>
        <li><img src="/assets/AMS_LogoWHITE.png" alt="AMS Institute"></li>
    </ul>
    </div> -->
</section>

<style>
:root{
    --blue-hero:#1B427D;
    --blue-hero-contrast:#fff;
    --accent-light:#BFD6FF;
}

:global(body){ 
    margin:0; 
    background:#1B427D;
    overflow-x: hidden;
    color:var(--blue-hero-contrast);
}

.sponsors{
    background: var(--bg, var(--blue-hero));
    width:100%;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding-block:1.50em;
    text-align:center;
}

.title{
    padding-bottom:16px;
}

.title h2{
    color:var(--blue-hero-contrast);
    line-height:1.2;
    margin:0;
    height: 2em;
}

.title h2::after{
    content:"";
    display:block;
    height:3px;
    width:64px;
    margin:12px auto 0;
    background:var(--accent-light);
}

/* logo's top en bottom */

.logo-top,
.logo-bottom{
    position:relative;
    width:100%;
    max-width:100vw;
    overflow:hidden;
    padding-block:12px;
    border-bottom:1px solid rgba(191,214,255,.15);
    display:flex;
    margin-bottom:16px;
    background:linear-gradient(to bottom, rgba(191,214,255,.06) 0%, rgba(191,214,255,0) 100%);
}

.logo-bottom{
    margin-bottom:0;
    background:linear-gradient(to top, rgba(191,214,255,.06) 0%, rgba(191,214,255,0) 100%);
}

.logo-strip-top,
.logo-strip-bottom{
    list-style:none;
    margin:0;
    padding:0;
    display:flex;
    align-items:center;
    gap:clamp(8px,1.5vw,20px);
    padding-inline:24px;
}

.logo-strip-top li,
.logo-strip-bottom li{
    display:flex;
    align-items:center;
}

.logo-strip-top img,
.logo-strip-bottom img{
    max-height:5.5em;
    height:auto;
    width:auto;
    object-fit:contain;
}

  /* Animatie auto carousel */

.logo-strip-top{
    animation: scroll-left-to-right 30s linear infinite;
}

.logo-strip-bottom{
    animation: scroll-right-to-left 30s linear infinite;
}

@keyframes scroll-left-to-right {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(0); }
}

@keyframes scroll-right-to-left {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-100%); }
}

@media (prefers-reduced-motion: reduce){
    .logo-strip-top,
    .logo-strip-bottom{
    animation:none;
    transform:none;
    }
}
</style>
