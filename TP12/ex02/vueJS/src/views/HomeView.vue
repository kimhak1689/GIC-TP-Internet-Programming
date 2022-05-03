<script >
import productApi from "../libs/apis/product";
import categoryApi from "../libs/apis/category";
import category from '../libs/apis/category';

export default {
  components: {},
  data() {
    return {
      products: [],
      categories: [],
      allProducts: []
    };
  },
  async mounted() {
    // product
    this.products = await productApi.all();
    // console.log(this.products);
    // category
    this.categories = await categoryApi.categorizedItem();
    // console.log(this.categories);
    // product by category and item
    this.allProducts = await productApi.productByCatAndItem();
    this.products = this.allProducts;
    console.log(this.products);
  },
  methods: {},
};
</script>

<template>
  <main>
    <div class="bg-gray-100 py-2 text-center text-lg relative">
      TopOne.com

      <div
        class="
          absolute
          text-white
          right-2
          top-2
          bg-gray-400
          px-2
          rounded-md
          cursor-pointer
        "
      >
        <router-link to="/dashboard"><div class="">Dashboard</div></router-link>
      </div>
    </div>
    <!-- blocks -->
    <div class="container">
      <div class="left-container">
        <div
          class="p-5 border border-gray-400"
          v-for="category in categories"
          :key="category?._id"
        >
          <b>{{ category.name }}</b>
          <table v-for="item in category?.items" :key="item?._id">
            <tbody>
              <tr>
                <!-- <td>- {{ item?.name }}</td> -->
                <td>
                  <a href="http://localhost:3000/dashboard">. {{ item?.name }}</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="right-container">
        <div
          class="p-5 border border-gray-400"
          v-for="product in products"
          :key="product?._id"
        >
          <b>{{ product.title }}</b>
          <table v-for="price in product?.prices" :key="price?._id">
            <tbody>
              <tr>
                <td>{{ price?.source }}</td>
                <td>{{ price?.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- <h1>You're in Home Page</h1> -->
  </main>
</template>

<style>
table, th, td{
  
}
.title {
  text-align: center;
}
.container {
  display: flex;
}
.left-container {
  width: 30%;
}
.right-container {
  width: 70%;
  display: grid;
  grid-template-columns: auto auto auto auto;
}
</style>