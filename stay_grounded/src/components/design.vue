<template>
    <div class="container">
      <h2>{{ title }}</h2>

      <form class="text-center border border-light p-5">
        <p class="h4 mb-4">Design your own drink</p>

        <!-- Drink Name -->
        <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Drink Name">

        <!-- Milk -->
        <label>Choose Dairy</label>
        <select class="browser-default custom-select mb-4">
          <option value="1" selected>Whole Milk</option>
          <option value="2">2%</option>
          <option value="3">Fat Free</option>
          <option value="4">Almond Milk</option>
          <option value="5">Coconut Milk</option>
        </select>

        <!-- Drink Type -->
        <label>Which category will the drink fall in?</label>
        <div class="controls col-md-8 "  style="margin-bottom: 10px">
          <label class="radio-inline"><input type="radio" checked="checked" style="margin-bottom: 30px">Coffee</label>
          <label class="radio-inline"> <input type="radio" style="margin-bottom: 30px">Tea </label>
          <label class="radio-inline"> <input type="radio" style="margin-bottom: 30px">Cold Drinks </label>
          <label class="radio-inline"> <input type="radio" style="margin-bottom: 30px">Other </label>
        </div>

        <!-- Flavors -->
        <label>Flavors</label>
        <select class="browser-default custom-select mb-4">
          <option value="" disabled>Choose option</option>
          <option value="1" selected>Cocoa</option>
          <option value="2">Vanilla</option>
          <option value="3">Strawberry</option>
          <option value="4">Lime</option>
        </select>

        <!-- Message -->
        <div class="form-group">
          <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Message"></textarea>
        </div>

        <!-- Brew button -->
        <div class="custom-control custom-checkbox mb-4">
          <button class="btn btn-info btn-warning" type="submit">Send</button>
        </div>

      </form>

    </div>
</template>

<script>
    export default {
        name: "design",
        data() {
          return {
            title : 'Build your own drink!!!!!'
          }
        }
    }
</script>

<style scoped>

</style>
