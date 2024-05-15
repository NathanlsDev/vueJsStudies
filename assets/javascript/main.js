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
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
      },
      {
        variantId: 2235,
        variantColor: "blue",
      },
    ],
    sizes: ["S: 36", "M: 39", "L: 42", "XL: 45"],
  },
});
