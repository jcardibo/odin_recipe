import Food from './class.js'
import text from './text.js'

const lasagna = new Food(
  'Lasagna',
  text.definition,
  text.history,
  text.ingredientArray,
  text.recipeStep,
)

console.log(lasagna)
