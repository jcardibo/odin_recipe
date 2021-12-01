class Food {
  constructor(name, definition, history, ingredient, steps) {
    this.name = name
    this.definition = definition
    this.history = history
    this.ingredient = ingredient
    this.steps = steps
    this.showStep = function (recipeStep) {
      for (steps in recipeStep) {
        console.log(steps.stepNumber + ' : ' + steps.stepText)
      }
    }
  }
}

export default Food
