var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    description: "Vue Socks: +5 comfy code.",
    image:
      "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
    altText: "A pair of green socks",
    link: "https://www.amazon.com/s?k=green+socks&ref=cs_503_search",
    onSale: true,
    inStock: 5,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage:
          "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage:
          "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
      },
    ],
    sizes: ["S: 36", "M: 39", "L: 42", "XL: 45"],
    cartItens: 0,
  },
  methods: {
    updateProduct(variantImage) {
      this.image = variantImage;
    },
    addToCart() {
      if (this.inStock > 0) {
        this.inStock--;
        this.cartItens++;
      }
    },
    removeFromCart() {
      if (this.cartItens > 0) {
        this.cartItens--;
        this.inStock++;
      }
    },
  },
});
