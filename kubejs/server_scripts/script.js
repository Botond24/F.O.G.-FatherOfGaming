// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true


onEvent('recipes', event => {
	event.remove({output:'fwaystones:abyss_watcher'})
	const vpicks = ['minecraft:wooden_pickaxe', 'minecraft:stone_pickaxe', 'minecraft:golden_pickaxe', 'minecraft:iron_pickaxe']
	vpicks.forEach(item => {
		event.remove({output:item})
	});
	event.remove({output:'minecraft:wood_pickaxe'})

	const pickheads = [Item.of('tconstruct:pick_head', '{Material:"tconstruct:wood"}'), Item.of('tconstruct:pick_head', '{Material:"tconstruct:rock"}'), 'create:golden_sheet', 'create:iron_sheet']
	for (let i = 0; i < vpicks.length; i++) {
		var out = vpicks[i];
		event.shaped(out,['HBH', ' S ', ' S '],{
			'H': pickheads[i],
			'B': Item.of('tconstruct:tool_binding', '{Material:"tconstruct:wood"}'),
			'S': Item.of('tconstruct:tool_handle', '{Material:"tconstruct:wood"}')
		})	
	}
	event.recipes.createMechanicalCrafting('fwaystones:abyss_watcher',
		[
			'  G  ',
			' GBG ',
			'GBNBG',
			' GBG ',
			'  G  '
		],
		{
			'G':'minecraft:glowstone_dust',
			'B':'hexcasting:pride_colorizer_bisexual',
			'N':'minecraft:nether_star'
		}
		)
})

onEvent('item.tags', event => {
	event.get("c:brass_ingots").add("create:brass_ingot")
	event.get("c:ingots/brass").add("techreborn:brass_ingot")
	event.get("c:chestplates").remove("minecraft:elytra")
	event.get("bookshelf:chestplates").remove("minecraft:elytra")
})

onEvent('lootjs', event => {
	event
		.addLootTableModifier("towers_of_the_wild_reworked:tower_chest")
		.addLoot("minecraft:elytra")
})