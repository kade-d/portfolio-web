<template>
	<div>
		<div class="md-headline">{{ point.headline }}</div>
		<div v-for="(item, index) in point.items" :key="index">
			<div class="md-title" style="padding-left: 16px; padding-top: 16px;">
				{{ item.title }}

			</div>
			<ul class="md-subheading" style="padding-left: 56px">
				<li v-for="(subItem, index) in item.subItems" :key="index">
					{{ subItem.name }}
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
    export default {
        name: 'ResumeItem',
        props: {
            point: {}
        }
    }
</script>
<style lang="scss" scoped>

	@media (min-width: 768px) {
	}
</style>
