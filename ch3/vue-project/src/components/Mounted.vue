<script setup>
import { onMounted } from 'vue';
onMounted(()=>{
    console.log("onMounted is called 1.")
})
onMounted(()=>{
    console.log("onMounted is called 2.")
})
</script>