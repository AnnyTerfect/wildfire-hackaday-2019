<template>
  <div>
    <md-card class="md-elevation-0">
      <md-field>
        <label>搜索</label>
        <md-input v-model="money"></md-input>
        <md-icon>search</md-icon>
      </md-field>
    </md-card>

    <md-card v-for="card in cards">
      <md-card-area class="menu-container">
        <md-menu class="card-menu" md-size="big" md-direction="bottom-end">
          <md-button class="md-icon-button">
            <md-icon>star</md-icon>
          </md-button>
        </md-menu>
      </md-card-area>

      <md-card-header>
        <md-card-media md-radio="1:1">
          <img :src="card.src">
        </md-card-media>
        <md-card-header-text>
          <div class="md-title">{{ card.title1 }}</div>
          <div class="md-subhead">{{ card.title2 }}</div>
        </md-card-header-text>
      </md-card-header>

    </md-card>
  </div>
</template>

<script>
export default {
  name: 'InterJob',
  data () {
    return {
      cards: [
        {
          src: require('../../assets/Interaction/job1.jpg'),
          title1: '电器修理工',
          title2: '100/h',
        },
        {
          src: require('../../assets/Interaction/job2.jpg'),
          title1: '房屋维修工',
          title2: '100/h',
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
    margin-top: 15px;
  }

  .md-card-media {
    margin-left: 0;
    margin-right: 10px;
  }

  .md-subhead {
    position: absolute;
    bottom: 15px;
  }


</style>


