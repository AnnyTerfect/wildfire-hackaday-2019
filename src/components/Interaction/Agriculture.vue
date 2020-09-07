<template>
  <div>
    <div class="md-layout md-gutter" v-for="cardTwin in cardTwins">
      <div class="md-layout-item">
        <md-card>
          <md-card-media>
            <img :src="cardTwin.left.src">
          </md-card-media>

          <md-card-header>
            <div class="md-title">{{ cardTwin.left.title1 }}</div>
            <div class="md-subhead">{{ cardTwin.left.title2 }}</div>
          </md-card-header>
        </md-card>
      </div>

      <div class="md-layout-item">
        <md-card>
          <md-card-media>
            <img :src="cardTwin.right.src">
          </md-card-media>

          <md-card-header>
            <div class="md-title">{{ cardTwin.right.title1 }}</div>
            <div class="md-subhead">{{ cardTwin.right.title2 }}</div>
          </md-card-header>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InterAgriculture',
  data () {
    return {
      cardTwins: [
        {
          left: {
            title1: '胡萝卜',
            title2: '10/斤',
            src: require('../../assets/interaction/carrot.png')
          },
          right: {
            title1: '南瓜',
            title2: '8/斤',
            src: require('../../assets/interaction/pumpkin.png')
          }
        },
        {
          left: {
            title1: '奶牛',
            title2: '1000/头',
            src: require('../../assets/interaction/cow.png')
          },
          right: {
            title1: '羊',
            title2: '1200/头',
            src: require('../../assets/interaction/sheep.png')
          }
        },
      ],
    }
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    padding: 5px;
  }

  .card-header {
    position: absolute;
  }

  .menu-container {
    position: relative;
    width: 100%;
  }

  .card-menu {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10;
  }

  .card-area {
    position: absolute;
    z-index: 100;
  }

  .md-card {
    margin: 0;
  }

  .md-layout-item {
    margin: 3px 10px 0 10px;
    padding: 0 !important;
  }

  .md-layout :nth-child(2n-1) {
    margin-right: 3px;
  }

  .md-layout :nth-child(2n) {
    margin-left: 3px;
  }


</style>


