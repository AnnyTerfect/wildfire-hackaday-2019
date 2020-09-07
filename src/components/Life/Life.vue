<template>
  <div>
    <md-card v-for="card in cards">
      <md-card-area class="menu-container">
        <md-menu class="card-menu" md-size="big" md-direction="bottom-end">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>more_vert</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item @click="doACall" :to="card.to">
              <span>{{ card.menu1 }}</span>
              <md-icon>menu</md-icon>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </md-card-area>

      <md-card-header class="card-header">
        <md-card-area class="card-area">
            <span class="md-subhead">{{ card.title2 }}</span>
        </md-card-area>
      </md-card-header>

        <md-card-media-cover>
        <md-card-media md-ratio="16:9">
          <img :src="card.src" alt="Skyscraper">
        </md-card-media>
      </md-card-media-cover>
      <md-card-actions>
        <md-button>{{ card.title1 }}</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'Education',
  data () {
    return {
      cards: [
        {
          menu1: '更多',
          title1: '菜谱',
          title2: '',
          to: '/Life/Menu',
          src: require('../../assets/Life/menu.png')
        },
        {
          menu1: '更多',
          title1: '菜价',
          title2: '',
          to: '/Life/Money',
          src: require('../../assets/Life/price.png')
        },
        {
          menu1: '更多',
          title1: '医疗预约',
          title2: '',
          to: '/Life/Reverse',
          src: require('../../assets/Life/reverse.png')
        },
        {
          menu1: '更多',
          title1: '约车进城',
          title2: '',
          to: '/Life/Goout',
          src: require('../../assets/Life/goout.png')
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

  .md-title {
    white-space: nowrap;
    color: #FFF;
  }

  .md-subhead {
    color: #FFF;
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

  .md-title {
    color: #000;
    font-size: 23px;
    background: #FFF;
    display: block;
  }

  .md-icon {
    color: #FFF !important;
  }

</style>


