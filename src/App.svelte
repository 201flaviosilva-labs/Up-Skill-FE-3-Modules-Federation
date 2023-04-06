<script>
  import Product from "./lib/Product.svelte";
  import { PRODUCTS } from "./mock";

  const finalPrice = PRODUCTS.reduce((acc, cur) => (acc += cur.price), 0);

  let isVisible = location.pathname === "/cart";

  window.will.subscribe(
    "route-change",
    ({ route }) => (isVisible = route === "/cart")
  );
</script>

<button class="cart-button" on:click={() => (isVisible = !isVisible)}
  >Card</button
>

{#if isVisible}
  <div>
    <div class="container">
      <h2>Checkout</h2>

      <div class="products-list">
        {#each PRODUCTS as product}
          <Product
            title={product.title}
            img={product.img}
            price={product.price}
          />
        {/each}
      </div>

      <p>Final price: {finalPrice}€</p>
    </div>
  </div>
{/if}

<style>
  .cart-button {
    position: fixed;
    bottom: 8px;
    right: 8px;
  }
  .container {
    max-width: 80%;
    position: fixed;
    bottom: 8px;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center safe;
    gap: 8px;

    overflow-x: auto;
  }

  .products-list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center safe;
    gap: 8px;
    padding: 8px;
    overflow-x: auto;
    border: 1px solid black;
  }
</style>
