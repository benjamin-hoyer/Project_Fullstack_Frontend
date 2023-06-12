<script lang="ts">
    import type { Hike } from '../../services/hiking_types';
    export let hike: Hike;
</script>

<div class="card-image">
    <figure class="image is-4by3">
        <a href="category/{hike.categoryid}/hike/{hike._id}" ><img src="{hike.img[0]}" alt="Nothing here yet"></a>
    </figure>
</div>