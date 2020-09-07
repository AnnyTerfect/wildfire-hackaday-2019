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
  name: 'lifeMenu',
  data () {
    return {
      cardTwins: [
        {
          left: {
            title1: '凉拌通心粉',
            title2: '',
            src: require('../../assets/Life/delicious1.jpg')
          },
          right: {
            title1: '烤肉',
            title2: '',
            src: require('../../assets/Life/delicious2.jpg')
          }
        },
        {
          left: {
            title1: '番茄鸡蛋汤',
            title2: '',
            src: require('../../assets/Life/delicious3.jpg')
          },
          right: {
            title1: '烤羊排',
            title2: '',
            src: require('../../assets/Life/delicious4.jpg')
          }
        },
        {
          left: {
            title1: '玉米牛排',
            title2: 'hehe',
            src: require('../../assets/Life/delicious5.jpg')
          },
          right: {
            title1: '甘蓝牛腩',
            title2: '',
            src: require('../../assets/Life/delicious6.jpg')
          }
        },
        {
          left: {
            title1: '凉拌猪肉',
            title2: '',
            src: require('../../assets/Life/delicious7.jpg')
          },
          right: {
            title1: '泰国香米',
            title2: '',
            src: require('../../assets/Life/delicious8.jpg')
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

  .md-title {
    font-size: 18px;
  }


</style>


