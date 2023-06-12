<script>
    import { goto } from "$app/navigation";
    import { hikingService } from "../../services/hiking_service.ts";

    hikingService.logout();
    goto("/");
</script>
