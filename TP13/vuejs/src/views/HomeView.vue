<script>
import productApi from "../libs/apis/product";
import categoryApi from "../libs/apis/category";
import category from "../libs/apis/category";
import product from "../libs/apis/product";

export default {
  components: {},
  data() {
    return {
      products: [],
      categories: [],
    };
  },
  async mounted() {
    // product
    this.products = await productApi.all();
    // console.log(this.products);
    // category
    this.categories = await categoryApi.categorizedItem();
    // console.log(this.categories);
    window.addEventListener("load", () => {
      document.getElementById(
        "weatherImg"
      ).src = `@/assets/images/${product}.png`;
    });
  },
  methods: {
    async onClick(paramCat, paramItem) {
      console.log(paramCat);
      if (paramItem == null) {
        this.products = await productApi.productByCatAndItem(paramCat, "");
      } else {
        this.products = await productApi.productByCatAndItem(
          paramCat,
          paramItem
        );
      }
    },
  },
};
</script>

<template>
  <main>
    <div class="bg-gray-100 py-2 text-center text-lg relative">
      TopOne.com

      <div
        class="absolute text-white right-2 top-2 bg-gray-400 px-2 rounded-md cursor-pointer"
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
          <a href="#" @click="onClick(category._id, null)">
            <b>{{ category.name }}</b>
          </a>
          <table v-for="item in category?.items" :key="item?._id">
            <tbody>
              <tr>
                <!-- <td>- {{ item?.name }}</td> -->
                <td>
                  <a href="#" @click="onClick(category._id, item?._id)"
                    >. {{ item?.name }}</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="right-container">
        <div
          class="card"
          style="width: 18rem"
          v-for="product in products"
          :key="product?._id"
        >
          <div class="">
            <img
              class="card-img-top"
              style="width: 100px"
              v-bind:src="'src/assets/images/' + product?.imageUrl"
              alt="Card image cap"
            />
          </div>
          <b>{{ product?.title }}</b>
          <div class="card-body">
            <table v-for="price in product?.prices" :key="price?._id">
              <tbody>
                <tr>
                  <div class="price">
                    <div>{{ price?.source }}</div>
                    &nbsp;
                    <div>{{ price?.price }} $</div>
                  </div>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- <div
          class="p-5 border border-gray-400"
          v-for="product in products"
          :key="product?._id"
        > 
          <img src="@/assets/images/1.png" alt="">
          <b>{{ product.title }}</b>
          <table v-for="price in product?.prices" :key="price?._id">
            <tbody>
              <tr>
                <div class="price">
                  <div class="right">{{ price?.source }}</div>
                  <div class="left">{{ price?.price }}</div>
                </div>
              </tr>
            </tbody>
          </table>
        </div> -->
      </div>
    </div>
    <!-- <h1>You're in Home Page</h1> -->
  </main>
</template>

<style>
table,
th,
td {
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
  width: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.price {
  display: flex;
}
.price .right {
  width: 100px;
}
.price .left {
  width: 20px;
}
.card {
  display: flex;
  align-items: center;
  margin: 10px;
}
</style>
