<template>
  <div class="container" id="mydiv">
    <!-- start of navbar -->
    <div class="row">
      <nav class="navbar navbar-light bg-dark fixed-top" id="navbar">
        <div class="container-fluid">
          <button
            class="navbar-brand btn btn-warning"
            @click="isCardVisible = true"
          >
            Books
          </button>
          <div class="d-flex align_items-baseline">
            <p class="px-2" style="color: aliceblue">
              your have [{{ getTotalItems() }}] items | total Price [{{
                formatCurrncy(getTotalPrice())
              }}]
            </p>
            <button
              class="navbar-brand btn btn-success"
              @click="isCardVisible = false"
            >
              My wishlist
            </button>
          </div>
        </div>
      </nav>
    </div>
    <!-- end of navbar -->

    <div class="row justify-content-evenly mt-5" v-if="isCardVisible">
      <!-- start of card -->
      <div
        class="card mt-5"
        style="width: 18rem"
        v-for="book in books"
        :key="book.ISBN"
      >
        <img :src="book.image" class="card-img-top" :alt="book.title" />
        <div class="card-body row">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">category : book</li>
            <li class="list-group-item"><span>ISBN : </span>{{ book.ISBN }}</li>
            <li class="list-group-item">
              <span class="col-6">Title : </span>{{ book.title }}
            </li>
            <li class="list-group-item">
              <span
                :class="[
                  book.noOfPages >= 50 ? 'more' : '',
                  book.noOfPages < 50 ? 'less' : '',
                  book.noOfPages == 0 ? 'none' : '',
                ]"
                >Number of pages : </span
              >{{ book.noOfPages }}
            </li>
            <li class="list-group-item">
              <span>Price : {{ formatCurrncy(book.price.value) }}</span>
            </li>
          </ul>
        </div>
        <div class="row card-footer text-muted">
          <div class="col-6">
            <p><span>inStock : </span>{{ book.stock }}</p>
          </div>
          <div class="col-6">
            <button
              class="btn btn-primary"
              :disabled="book.added ? true : false"
              @click="addToWishList(book)"
            >
              Add to list
            </button>
          </div>
          <!-- end of card -->
        </div>
      </div>
    </div>
    <div class="row bg-light" v-if="!isCardVisible">
      <h2 class="text-danger text-center" v-if="list.items.length == 0">
        sorry , no items in wishist
      </h2>
      <div
        class="row mt-5"
        style="margin-left: 5px"
        v-if="!list.items.length == 0"
      >
        <table class="table table-striped table-bordered bg-light mt-4" style="width: 120%">
          <thead>
            <tr class="text-center">
              <th>name</th>
              <th>image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>

          </thead>
          <tbody class="text-center">
            <tr
              class="text-center"
              v-for="item in list.items"
              :key="item.book.ISBN"
            >
              <td>{{ item.book.title }}</td>
              <td>
                <img :src="item.book.image" style="width: 50px; height: 50px" />
              </td>

              <td>{{ formatCurrncy(item.book.price.value) }}</td>
              <td>
                <button
                  class="btn btn-danger"
                  @click="removeFromWishList(item)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="text-center">
              <th colspan="2">total price</th>
              <th colspan="1">{{ formatCurrncy(getTotalPrice()) }}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    // reactive properties
    books: books,

    isCardVisible: true,
    message: "Hello World",
    list: {
      items: [],
    },
  }),

  methods: {
    addToWishList(book) {
      book.added = true;
      this.list.items.push({
        book: book,
      });
    },
    removeFromWishList(item) {
      item.book.added = false;
      this.list.items.splice(
        this.list.items.findIndex((Iitem) => Iitem.book.ISBN == item.book.ISBN),
        1
      );
    },
    getTotalPrice() {
      let total = 0;
      for (let i = 0; i < this.list.items.length; i++) {
        total += this.list.items[i].book.price.value;
      }
      return total;
    },
    getTotalItems() {
      let total = 0;
      for (let i = 0; i < this.list.items.length; i++) {
        total++;
      }
      return total;
    },
    formatCurrncy(value) {
      let formatter = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      return formatter.format(value);
    },
  },
};
</script>

<style>
.more {
  color: green;
}

.less {
  color: rgb(156, 141, 5);
}

.none {
  color: red;
}

.card {
  box-shadow: 2px 2px 2px lightblue;
  background-image: linear-gradient(to top, transparent 70%, lightblue);
}

.card:hover {
  cursor: pointer;
  background-image: linear-gradient(to top, lightblue, transparent 70%);
  transform: scale(1.02);
}

</style>
