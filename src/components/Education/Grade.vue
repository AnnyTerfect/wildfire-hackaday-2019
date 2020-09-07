<template>
  <div>
    <md-tabs @md-changed="changeTab" md-alignment="fixed">
      <md-tab class="tab" id="tab-home" md-icon="notifications">
      </md-tab>
      <md-tab class="tab" id="tab-pages" md-icon="people"></md-tab>
    </md-tabs>

    <md-content class="content" :class="{ 'md-hide': !first }">
      <md-label class="md-subheading heading-left">
        今天
      </md-label>

      <md-list class="md-triple-line">
        <div v-for="item in funItems">
          <md-list-item :to="item.to">
            <md-avatar>
              <img :src="item.src">
            </md-avatar>

            <div class="md-list-item-text">
              <span>{{ item.title1 }}</span>
              <span>{{ item.title2 }}</span>
              <p>{{ item.passage }}</p>
            </div>
          </md-list-item>

          <md-divider class="md-inset"></md-divider>
        </div>
      </md-list>
    </md-content>

    <md-content class="content" :class="{ 'md-hide': first }">
      <md-label class="md-subheading heading-left">
        今天
      </md-label>

      <md-list class="md-triple-line">
        <div v-for="item in groupItems">
          <md-list-item>
            <md-avatar>
              <img :src="item.src" />
            </md-avatar>

            <div class="md-list-item-text">
              <span>{{ item.title1 }}</span>
              <span>{{ item.title2 }}</span>
              <p>{{ item.passage }}</p>
            </div>
          </md-list-item>

          <md-divider class="md-inset"></md-divider>
        </div>
      </md-list>
    </md-content>
</div>
  </div>
</template>

<script>
export default {
  name: 'Education',
  data () {
    return {
      first: true,
      funItems: [
        {
          title1: '作业字迹检查',
          title2: '字迹鉴别',
          src: require('../../assets/logo.png'),
          passage: `上传作业检查两份材料是否为一人所写`,
          to: '/Education/Discriminate',
        },
        {
          title1: '成绩查询',
          title2: 'hehe',
          src: require('../../assets/logo.png'),
          passage: `fsdafsadf
          fdsafsadf`,
          to: '/Education/Grade'
        },
        {
          title1: 'haha',
          title2: 'hehe',
          src: require('../../assets/logo.png'),
          passage: `fsdafsadf
          fdsafsadf`,
        },
        {
          title1: 'haha',
          title2: 'hehe',
          src: require('../../assets/logo.png'),
          passage: `fsdafsadf
          fdsafsadf`,
        },
        {
          title1: 'haha',
          title2: 'hehe',
          src: require('../../assets/logo.png'),
          passage: `fsdafsadf
          fdsafsadf`,
        },
        {
          title1: 'haha',
          title2: 'hehe',
          src: require('../../assets/logo.png'),
          passage: `fsdafsadf
          fdsafsadf`,
        },
      ],

      groupItems: [
        {
          title1: 'Page2',
          title2: 'page2',
          src: require('../../assets/logo.png'),
          passage: `fsdafsadf
          fdsafsadf`,
        },
        {
          title1: 'haha',
          title2: 'hehe',
          src: require('../../assets/logo.png'),
          passage: `fsdafsadf
          fdsafsadf`,
        },
        {
          title1: 'haha',
          title2: 'hehe',
          src: require('../../assets/logo.png'),
          passage: `fsdafsadf
          fdsafsadf`,
        },
        {
          title1: 'haha',
          title2: 'hehe',
          src: require('../../assets/logo.png'),
          passage: `fsdafsadf
          fdsafsadf`,
        },
        {
          title1: 'haha',
          title2: 'hehe',
          src: require('../../assets/logo.png'),
          passage: `fsdafsadf
          fdsafsadf`,
        },
        {
          title1: 'haha',
          title2: 'hehe',
          src: require('../../assets/logo.png'),
          passage: `fsdafsadf
          fdsafsadf`,
        },
      ]
    }
  },
  mounted: function () {
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


