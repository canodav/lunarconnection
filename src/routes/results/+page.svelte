<script>
    // get parameters from url
    import { page } from '$app/stores';
    import { getMoonImage } from './moon';
    
    const date1 = $page.url.searchParams.get('date1');
    const date2 = $page.url.searchParams.get('date2');
    var moon1 = '';
    var moon2 = '';
    
    // get Date objects
    if(date1 && date2){

        const dateObj1 = new Date(date1);
        const dateObj2 = new Date(date2);

            
        // get moon images
        moon1 = getMoonImage(dateObj1);
        moon2 = getMoonImage(dateObj2);

    }


    
    
</script>

<main id="page-container">
    <h1>LunarConnection</h1>
    <div id="moon-container">
      <img src={moon1} alt="moon1" class="top-image" />
      <img src={moon2} alt="moon2" class="bottom-image" />
    </div>
    
</main>