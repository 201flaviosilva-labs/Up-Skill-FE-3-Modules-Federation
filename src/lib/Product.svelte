<script>
  export let title;
  export let img;
  export let price;
</script>

<div class="container">
  <div>
    <h3>{title}</h3>
    <img src={img} alt="product" />
  </div>
  <p>Price: {price}€</p>
</div>

<style>
  div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 8px;

    border: 1px solid black;
    border-radius: 2px;
  }

  img {
    width: 150px;
    height: 100px;
    object-fit: contain;
  }
</style>
