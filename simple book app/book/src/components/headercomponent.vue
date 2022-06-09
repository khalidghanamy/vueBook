<template lang="">
    
        <!-- start of navbar -->
        <div class="row">
            <nav class="navbar navbar-light bg-dark">
                <div class="container-fluid">
                    <button class="navbar-brand btn btn-warning" @click="isCardVisible=true">Books</button>
                    <div class="d-flex align_items-baseline">
                        <p class="px-2" style="color:aliceblue"> your have [{{getTotalItems()}}] items  | total Price [{{formatCurrncy(getTotalPrice())}}]</p>
                        <button class="navbar-brand btn btn-success" @click="isCardVisible=false">My wishlist</button>
                    </div>
                </div>
            </nav>
        </div> <!-- end of navbar -->
    
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style >
    
</style>