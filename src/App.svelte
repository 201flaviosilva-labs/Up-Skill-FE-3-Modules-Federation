<script>
  import Product from "./lib/Product.svelte";
  import { PRODUCTS } from "./mock";

  const finalPrice = PRODUCTS.reduce((acc, cur) => (acc += cur.price), 0);

  let isVisible = location.pathname === "/cart";

  $: {
    window.reloadSvelte = (isVisibleValue) => {
      isVisible = isVisibleValue;
    };
  }
</script>

{#if isVisible}
  <main>
    <div class="container">
      <h2>Checkout</h2>

      {#each PRODUCTS as product}
        <Product
          title={product.title}
          img={product.img}
          price={product.price}
        />
      {/each}

      <p>Final price: {finalPrice}€</p>
    </div>
  </main>
{/if}

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
</style>
