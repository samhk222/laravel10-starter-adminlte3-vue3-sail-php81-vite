<template>
    chamandou um componente e tals
    {{ todo }}
</template>
<script>
import axios from "axios";

export default {
    name: "Oi",
    components: {},
    props: {
        agendaId: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            todo: {}
        };
    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then((r) => this.todo = r.data)
    },
    methods: {
        operacaoData(termo) {
            this.$emit("operacao-data", {id: this.agendaId, termo});
        },
    },
};
</script>
