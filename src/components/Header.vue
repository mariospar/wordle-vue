<script setup>
const emit = defineEmits(["open-help", "reset"]);
const props = defineProps({ gameOver: Boolean });
</script>

<template>
	<main class="header">
		<section>
			<div class="title">
				<img src="../assets/w.png" alt="W" />
				<img src="../assets/o.png" alt="O" />
				<img src="../assets/r.png" alt="R" />
				<img src="../assets/d.png" alt="D" />
				<img src="../assets/l.png" alt="L" />
				<img src="../assets/e.png" alt="E" />
			</div>
			<span class="material-icons" @click="emit('open-help')"
				>help_outline</span
			>
			<span
				class="material-icons"
				:class="{ hide: !props.gameOver }"
				@click="emit('reset')"
				>replay</span
			>
		</section>
	</main>
</template>

<style lang="scss" scoped>
span.hide {
	opacity: 0;
	pointer-events: none;
}

.header {
	position: relative;

	.title {
		margin: auto;
    transform: translateX(24px);

		img {
			width: 10vmin;
			height: 10vmin;
			max-height: 50px;
			max-width: 50px;
			border-radius: 8px;
			margin: 0 5px;
		}
	}
}
</style>
