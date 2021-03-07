<template>
	<div>
		<div :class="`text-${$vuetify.breakpoint.name}-h5`">{{ point.headline }}</div>
		<div v-for="(item, index) in point.items" :key="index">
			<div :class="`text-${$vuetify.breakpoint.name}-h6`" style="padding-left: 16px; padding-top: 16px">
				{{ item.title }}

			</div>
			<ul style="padding-left: 56px">
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
