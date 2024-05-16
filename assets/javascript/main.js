var app = new Vue({
  el: "#app",
  data: {
    brand: "Vue Mastery",
    product: "Socks",
    description: "Vue Socks: +5 comfy code.",
    selectedVariant: 0,
    altText: "A pair of green socks",
    link: "https://www.amazon.com/s?k=green+socks&ref=cs_503_search",
    onSale: true,
    cartItens: 0,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
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
    sizes: ["S: 36", "M: 39", "L: 42", "XL: 45"],
  },
  methods: {
    updateProduct(index) {
      this.selectedVariant = index;
    },
    addToCart() {
      if (this.variants[this.selectedVariant].variantQuantity > 0) {
        this.variants[this.selectedVariant].variantQuantity--;
        this.cartItens++;
      }
      if (this.variants[this.selectedVariant].variantQuantity === 0) {
        this.variants[this.selectedVariant].variantQuantity = false;
      }
    },
    removeFromCart() {
      if (this.cartItens > 0) {
        this.cartItens--;
        this.variants[this.selectedVariant].variantQuantity++;
      }
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
  },
});
