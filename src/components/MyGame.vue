<template>
    <div class="lila">
        <div class="cell" v-for="(cell, index) in cells" :key="index" @dragover.prevent @drop="handleDrop($event, index)">
            <div class="chip" v-if="cell" draggable="true" @dragstart="handleDragStart($event, index)"
                @dragend="handleDragEnd($event)" :style="{
                        'background-image': 'url(' + backgroundImageUrl + ')',
                    }">
                <template v-if="!backgroundImageUrl">
                    <input id="fileInput" type="file" @change="onFileChange" />
                    <img src="../assets/plus.png" alt="plus">
                    <span>ДОБАВИТЬ ФОТО</span>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "Grid",

    setup() {
        const backgroundImageUrl = ref("");
        const onFileChange = (event) => {
            const file = event.target.files[0];
            backgroundImageUrl.value = URL.createObjectURL(file);
        };
        const cells = ref([
            null,
            null,
            null,
            null,
            true,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
        ]);
        let dragIndex = null;

        function handleDrop(event, targetIndex) {
            if (dragIndex !== null && dragIndex !== targetIndex) {
                const sourceValue = cells.value[dragIndex];
                cells.value[dragIndex] = cells.value[targetIndex];
                cells.value[targetIndex] = sourceValue;
            }
            dragIndex = null;
        }

        function handleDragStart(event, index) {
            dragIndex = index;
            event.dataTransfer.setData("text/plain", index);
            event.target.style.opacity = "0.4";
        }

        function handleDragEnd(event) {
            event.target.style.opacity = "1";
        }

        return {
            cells,
            handleDrop,
            handleDragStart,
            handleDragEnd,
            onFileChange,
            backgroundImageUrl,
        };
    },
};
</script>
<style scoped>
.lila {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    width: 774px;
    height: 600px;
    padding: 20px 28px 58px;
    margin: 0 auto;
    background-color: transparent;
    background-image: url('../assets/background.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    box-shadow: 1px 1px 20px 10px #9291ae95;
}

.cell {
    position: relative;
    display: inline-block;
}

.chip {
    cursor: pointer;
    width: 35px;
    height: 35px;
    background-color: rgb(247, 234, 234);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 2px solid #9291ae95;
    box-shadow: 1px 1px 20px 10px #9291ae95;
    border-radius: 50%;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
}

img {
    opacity: .8;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    animation: 1s linear 0s infinite alternate plusAnimation;
}

@keyframes plusAnimation {

    100% {
        width: 30px;
    }
}

span {
    text-align: center;
    color: #838634;
    font-weight: 600;
    font-size: 8px;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
}

#fileInput {
    position: absolute;
    cursor: pointer;
    display: block;
    opacity: 0;
    width: 65px;
    height: 65px;
    z-index: 10;
}
</style>