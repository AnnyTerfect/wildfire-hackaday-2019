<template>
  <div>
    <md-tabs @md-changed="changeTab" md-alignment="fixed">
      <md-tab class="tab" id="tab-home" md-icon="notifications">
      </md-tab>
      <md-tab class="tab" id="tab-pages" md-icon="add_circle"></md-tab>
    </md-tabs>

    <md-content class="content" :class="{ 'md-hide': !first }">
        <md-label class="md-subheading heading-left">
          今天
        </md-label>
        <md-label class="md-subheading heading-right">
          {{ new Date().toDateString() }}
        </md-label>
      <md-list class="md-triple-line">
        <md-list-item>
          <md-avatar>
            <img src="../../assets/Life/doctor1.jpg" alt="Doctor">
          </md-avatar>

          <div class="md-list-item-text">
            <span>张医生</span>
            <span>专家</span>
            <p>专治骨科</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>more</md-icon>
          </md-button>
        </md-list-item>
        <md-divider class="md-inset"></md-divider>

        <md-list-item>
          <md-avatar>
            <img src="../../assets/Life/doctor2.jpg" alt="Doctor">
          </md-avatar>

          <div class="md-list-item-text">
            <span>李医生</span>
            <span>专家</span>
            <p>专治皮肤科</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>more</md-icon>
          </md-button>
        </md-list-item>
        <md-divider class="md-inset"></md-divider>
      </md-list>

    </md-content>

    <md-content class="content" :class="{ 'md-hide': first }">
      <md-list>
        <md-list-item>
          <md-field>
            <label for="movie">预约日期</label>
            <md-select v-model="date">
              <md-option value="Monday">周一</md-option>
              <md-option value="Tuesday">周二</md-option>
              <md-option value="Wednesday">周三</md-option>
              <md-option value="Thursday">周四</md-option>
              <md-option value="Friday">周五</md-option>
              <md-option value="Saturday">周六</md-option>
              <md-option value="Sunday">周日</md-option>
            </md-select>
          </md-field>
        </md-list-item>

        <md-list-item>
          <md-field>
            <label for="movie">预约时间</label>
            <md-select v-model="time">
              <md-option value="Morning">上午</md-option>
              <md-option value="Noon">中午</md-option>
              <md-option value="Afternoon">下午</md-option>
            </md-select>
          </md-field>
        </md-list-item>

        <md-list-item>
          <md-field>
            <label>姓名</label>
            <md-input v-model="name"></md-input>
          </md-field>
        </md-list-item>

        <md-list-item>
          <md-field>
            <label>电话</label>
            <md-input v-model="phone"></md-input>
          </md-field>
        </md-list-item>

        <md-list-item class="md-layout">
          <md-button class="md-layout-item md-primary">
            提交
          </md-button>
        </md-list-item>
      </md-list>
    </md-content>
</div>
  </div>
</template>

<script>
export default {
  name: 'lifeReverse',
  data () {
    return {
      first: true
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


