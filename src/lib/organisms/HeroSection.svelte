<script>
//@ts-nocheck

export let project
export let callout

const BASE = 'https://fdnd-agency.directus.app/assets'

//hulp functie haalt het image-id op uit directus ook als het een object is
const getId = (x) => x?.img?.id || x?.img

//slaat image id op voor deze
const heroId = getId(project)
const calloutId = getId(callout)

//functie om tekst te beperken tot max aantal zinnen
function limitSentences(text, max) {
if (!text) {
    return ''
}
const sentences = text.split('.')
const result = sentences.slice(0, max)

return result.join('.')
}

const shortHeroText = limitSentences(project?.description, 3)
const shortCalloutText = limitSentences(callout?.description, 2)
</script>
<section class="hero">
    <figure class="hero__bg">
        {#if heroId}
        <img src={`${BASE}/${heroId}`} alt="" />
        {/if}
    </figure>


    <div class="hero__overlay"></div>

    <!-- HERO TEXT -->
    <header class="hero__content">
    <h1 class="hero__title">{project.title}</h1>
    <p class="hero__copy">{shortHeroText}</p>
    <a class="hero__cta" href="#c">➜</a>
    </header>

    <!-- CARD -->
    <aside class="hero__card">
        <figure class="hero__card-figure">
        {#if calloutId}
            <img
            src={`${BASE}/${calloutId}`}
            alt=""
            />
        {/if}

        <figcaption class="hero__card-body">
            <h2 class="hero__card-title">{callout.title}</h2>
            <span class="hero__card-accent"></span>
            <p class="hero__card-caption">{shortCalloutText}</p>
        </figcaption>
        </figure>
    </aside>

    <span class="hero__timebar"></span>
</section>
