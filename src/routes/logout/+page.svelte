<script>
	import { goto } from '$app/navigation';
	import { userService } from '../../services/user_service.ts';

	userService.logout();
	goto('/');
</script>
