Vue.component("product-details", {
  props: {
    details: {
      type: Array,
      required: true,
    },
    sizes: {
      type: Array,
      required: true,
    },
  },
  template: `
  <div class="details">
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
    <ul>
      <li v-for="size in sizes">{{ size }}</li>
    </ul>
  </div>
  `,
});

Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
    cartItens: {
      type: Array,
      required: true,
    },
    variants: {
      type: Array,
      required: true,
    },
  },
  template: `
  <article class="product">
    <figure>
      <img :src="image" :alt="altText" />
    </figure>

    <aside>
      <div class="desc">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <p>Shipping: {{ shipping }}</p>
        <a :href="link" target="_blank">More products like this</a>
        <p v-if="onSale && inStock">On Sale!</p>
        <p v-if="inStock">In stock ({{inStock}})</p>
        <p v-else :class="{ disabledText: !inStock }">Out of Stock</p>
      </div>

      <div class="details">
        <div>
          <p
            v-for="(variant, index) in variants"
            :key="variant.variantId"
            class="colorBox"
            :style="{ backgroundColor: variant.variantColor }"
            @mouseover="updateProduct(index)"
          ></p>
        </div>
      </div>
    </aside>

    <div class="interact">
      <button
        @click="addToCart"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock}"
      >
        Add
      </button>
      <button
        @click="removeFromCart"
        :disabled="!cartItens.length"
        :class="{ disabledButton: !cartItens.length}"
      >
        Remove
      </button>
    </div>
  </article>  
  `,
  data() {
    return {
      brand: "Vue Mastery",
      product: "Socks",
      description: "Vue Socks: +5 comfy code.",
      selectedVariant: 0,
      altText: "A pair of green socks",
      link: "https://www.amazon.com/s?k=green+socks&ref=cs_503_search",
      onSale: true,
    };
  },

  methods: {
    updateProduct(index) {
      this.selectedVariant = index;
    },
    addToCart() {
      this.$emit("add-to-cart", this.selectedVariant, this.variants[this.selectedVariant].variantId);
    },
    removeFromCart() {
      this.$emit("remove-from-cart", this.selectedVariant, this.variants[this.selectedVariant].variantId);
    },
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return "$ 2.99";
    },
  },
});

var app = new Vue({
  el: "#app",
  data: {
    premium: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    sizes: ["S: 36", "M: 39", "L: 42", "XL: 45"],
    cartItens: [],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage:
          "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
        variantQuantity: 5,
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage:
          "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
        variantQuantity: 2,
      },
    ],
  },

  methods: {
    updateCart(variantIndex) {
      this.cartItens.unshift(this.variants[variantIndex].variantId)
      this.variants[variantIndex].variantQuantity--;
    },
    decreaseCart(variantIndex) {
      if (this.cartItens.length > 0){
        this.cartItens.shift(this.variants[variantIndex].variantId)
        this.variants[variantIndex].variantQuantity++;
      }
    },
  },
});
