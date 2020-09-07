<template>
  <div>
    <md-tabs @md-changed="changeTab" md-alignment="fixed">
      <md-tab class="tab" id="tab-home" md-icon="notifications">
      </md-tab>
      <md-tab class="tab" id="tab-pages" md-icon="list"></md-tab>
    </md-tabs>

    <md-content class="content" :class="{ 'md-hide': !first }">
      <md-label class="md-subheading heading-left">
        Today
      </md-label>
      <md-label class="md-subheading heading-right">
        {{ new Date().toDateString() }}
      </md-label>

      <md-list class="md-triple-line">
        <md-content v-for="item in items">
          <md-list-item>
            <md-avatar>
              <img :src="item.src" alt="People">
            </md-avatar>

            <div class="md-list-item-text">
              <span>{{ item.title1 }}</span>
              <span>{{ item.title2 }}</span>
              <p>{{ item.description }}</p>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon>more_vert</md-icon>
            </md-button>
          </md-list-item>
          <md-divider class="md-inset"></md-divider>
        </md-content>
      </md-list>
    </md-content>

    <md-content class="content" :class="{ 'md-hide': first }">
      <md-list>
        <md-list-item>
          <md-field>
            <md-icon>A</md-icon>
            <label>出发地</label>
            <md-input v-model="startPlace"></md-input>
          </md-field>
        </md-list-item>

        <md-list-item>
          <md-field>
            <md-icon>B</md-icon>
            <label>目的地</label>
            <md-input v-model="endPlace"></md-input>
          </md-field>
        </md-list-item>

        <md-list-item>
          <md-field>
            <label for="movie">出发时间</label>
            <md-input v-model="time"></md-input>
          </md-field>
        </md-list-item>

        <md-list-item>
          <md-field>
            <label>备注</label>
            <md-textarea v-model="detail"></md-textarea>
          </md-field>
        </md-list-item>

        <md-list-item class="md-layout">
          <md-button class="md-layout-item">
            提交
          </md-button>
        </md-list-item>        
      </md-list>
    </md-content>
  </div>
</template>

<script>
export default {
  name: 'lifeGoout',
  data () {
    return {
      first: true,
      items: [
        {
          src: require('../../assets/Life/driver1.jpg'),
          title1: '张司机',
          title2: '27岁',
          description: ''
        },
        {
          src: require('../../assets/Life/driver2.jpg'),
          title1: '王司机',
          title2: '35岁',
          description: ''
        },
        {
          src: require('../../assets/Life/driver3.jpg'),
          title1: '李司机',
          title2: '41岁',
          description: ''
        },
      ]
    }
  },
  mounted: function () {
    console.log(this.items())
  },
  methods: {
    changeTab: function () {
      this.first = !this.first;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tab {
    width: 50%;
  }

  .content {
    padding: 10px;
    min-height: 503px;
  }

  .heading-left {
    position: absolute;
    left: 10px;
    z-index: 10;
  }

  .heading-right {
    position: absolute;
    right: 10px;
    z-index: 10;
  }
</style>


