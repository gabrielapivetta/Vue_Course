<template>
    <section>
        <h2>My Friends</h2>
        <ul>
            <friend-contact></friend-contact>
            <friend-contact></friend-contact>
        </ul>
    </section>
</template>

<script>
//export default instead of const app because it will be imported on another fila (main.js) and we're saying everything in here will be sent there as an object.
export default {
    data (){
        return {
            friends: [
                {
                    if: 'manuel',
                    name: 'Manuel Soares',
                    phone: '94561 8456',
                    email: 'manuel@localhost.com'
                },
                {
                    if: 'julia',
                    name: 'Julia Mendes',
                    phone: '98989 1234',
                    email: 'julia@localhost.com'
                }
            ]
        };
    }
}
</script>
