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
