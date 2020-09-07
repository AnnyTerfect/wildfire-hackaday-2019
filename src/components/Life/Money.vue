<template>
  <div>
    <md-card>
      <md-card-media-cover>
        <md-card-media md-ratio="16:9">
          <img :src="src">
        </md-card-media>

        <md-card-area>
          <md-card-actions>
            <md-button class="md-icon-button">
              <md-icon>edit</md-icon>
            </md-button>
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>

    <md-card>
      <md-card-header>
        <div class="md-layout-item">
          <md-field>
            <label for="veg">菜品选择</label>
            <md-select v-model="veg" name="veg" id="veg">
              <md-option value="黄瓜">黄瓜</md-option>
              <md-option value="西红柿">西红柿</md-option>
              <md-option value="大白菜">大白菜</md-option>
              <md-option value="土豆">土豆</md-option>
              <md-option value="芹菜">芹菜</md-option>
              <md-option value="青椒">青椒</md-option>
            </md-select>
          </md-field>
        </div>
      </md-card-header>

      <md-card-content class="md-layout">
        <md-button class="md-layout-item" @click="commit">
          提交
        </md-button>
      </md-card-content>
    </md-card>

    <md-card>
      <md-card-header>
        <md-table>
          <md-table-row>
            <md-table-head>天数</md-table-head>
            <md-table-head>菜价</md-table-head>
          </md-table-row>

          <md-table-row v-for="price in prices">
            <md-table-cell>{{ price.day }}</md-table-cell>
            <md-table-cell>{{ price.price }}</md-table-cell>
          </md-table-row>
        </md-table>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'lifeMoney',
  data: function () {
    return {
      veg: '黄瓜',
      src: require('../../assets/Life/黄瓜.png'),
      prices: [
      ]
    }
  },
  mounted: function () {
  },
  computed: {
  },
  methods: {
    commit: function () {
      this.src = require('../../assets/Life/' + this.veg + '.png');
      let url = `/api?name=${this.veg}&space=北京朝阳区大洋路农副产品批发市场`;
      this.axios.get(url)
          .then(res => {
            let result = res.data.list

            this.prices = []
            for (let i = 0; i < result.length; i++) {
              this.prices.push({ day: i + 1, price: result[i].fields.average })
            }
          // 成功回调
          }, res => {
          // 错误回调
          })

    }
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


