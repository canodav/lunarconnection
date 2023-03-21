<script>
    import { onMount } from 'svelte';
    import Header from '../../components/header.svelte';
    // get parameters from url
    import { page } from '$app/stores';

    export let data;


    const date1 = $page.url.searchParams.get('date1');
    const date2 = $page.url.searchParams.get('date2');

    
</script>

<Header />
<main id="page-content">
    <p>{date1}</p>
    <div id="moon-container">
      <img src={data.moon1} alt="moon1 {data.moon1}" class="top-image" />
      <img src={data.moon2} alt="moon2 {data.moon2}" class="bottom-image" />
    </div>
    <p>{date2}</p>
    <div id="dates">
    </div>
    
</main>
<footer>
    @2023 LunarConnection 
</footer>

<style>
    img{
        width: 100%;
        
    }
</style>
