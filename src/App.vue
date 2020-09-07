<template>
  <div class="page-container">
    <md-app :class="full" md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button" @click="topButtonClick">
            <md-icon>{{ topButton }}</md-icon>
          </md-button>
        </div>

        <span class="md-title ">{{ title }}</span>

        <div class="md-toolbar-section-end" v-if="!isAdd && !isWrite">
        </div>

        <div class="md-toolbar-section-end" v-if="isAdd">
          <md-button class="md-icon-button" :class="{ 'md-hide': !isAdd }" to="Write">
            <md-icon>add</md-icon>
          </md-button>
        </div>

        <div class="md-toolbar-section-end" v-if="isWrite">
          <md-button :class="{ 'md-hide': !isWrite }">
            <md-label>提交</md-label>
          </md-button>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item @click="menuHide" to="/Society">
            <img class="head-icon" src="./assets/headicon.jpg" />
          </md-list-item>

          <md-list-item @click="menuHide" to="/Society">
            <span class="md-list-item-text">个人信息</span>
          </md-list-item>

          <md-list-item @click="menuHide" to="/Functions">
            <md-icon>functions</md-icon>
            <span class="md-list-item-text">功能</span>
          </md-list-item>

          <md-list-item @click="menuHide" to="/Notifications">
            <md-icon>notifications</md-icon>
            <span class="md-list-item-text">通知</span>
          </md-list-item>

          <md-list-item @click="menuHide" to="/Notifications" v-if="!notifications.length">
            <md-icon></md-icon>
            <span class="md-list-item-text">无通知</span>
          </md-list-item>          

          <md-list-item @click="menuHide" to="/Notifications" v-for="notification in notifications">
            <md-icon></md-icon>
            <span class="md-list-item-text">{{ notification.message }}</span>
          </md-list-item>

          <md-list-item @click="menuHide" to="/Settings">
            <md-icon>settings</md-icon>
            <span class="md-list-item-text">设置</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="content">
        <router-view/>
      </md-app-content>
    </md-app>

    <div :class="bottomHide">
      <md-bottom-bar md-sync-route>
        <md-bottom-bar-item :class="socClass" to="/Society" exact md-label="社交" md-icon="face"></md-bottom-bar-item>
        <md-bottom-bar-item :class="eduClass" to="/Education/" exact md-label="教育" md-icon="book"></md-bottom-bar-item>
        <md-bottom-bar-item :class="intClass" to="/Interaction/" exact md-label="城乡" md-icon="event_seat"></md-bottom-bar-item>
        <md-bottom-bar-item :class="lifeClass" to="/Life/" exact md-label="生活" md-icon="date_range"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .page-container {
    position: fixed;
    width: 100%;
    height: 100%;
  }

  .md-app {
    height: calc(100% - 60px);
  }

  .full {
    height: 100%;
  }

  .md-title {
    color: white;
  }

  .md-content {
    padding: 0;
  }

  .md-drawer {
    width: 80%;
    max-width: calc(100% - 100px);
  }

  .head-icon {
    width: 100px;
    border-radius: 50px;
  }
</style>

<script>
export default {
  name: 'Reveal',
  data: function () {
    return {
      menuVisible: false,
      notifications: [
      ]
    }
  },
  mounted: function () {

  },
  computed: {
    title: function () {
      switch (this.$route.path.split('/')[1]) {
        case 'Society': {
          return '社交';
          break;
        };
        case 'Education': {
          return '教育';
          break;
        };
        case 'Interaction': {
          return '城乡';
          break;
        };
        case 'Life': {
          return '生活';
          break;
        };
      }
    },
    socClass: function () {
      return {
        'router-link-exact-active': this.$route.path.indexOf('Society') > 0,
        'router-link-active': this.$route.path.indexOf('Society') > 0, 
        'md-active': this.$route.path.indexOf('Society') > 0
      }
    },
    eduClass: function () {
      return {
        'router-link-exact-active': this.$route.path.indexOf('Education') > 0,
        'router-link-active': this.$route.path.indexOf('Education') > 0, 
        'md-active': this.$route.path.indexOf('Education') > 0
      }
    },
    intClass: function () {
      return {
        'router-link-exact-active': this.$route.path.indexOf('Interaction') > 0,
        'router-link-active': this.$route.path.indexOf('Interaction') > 0, 
        'md-active': this.$route.path.indexOf('Interaction') > 0
      }
    },
    lifeClass: function () {
      return {
        'router-link-exact-active': this.$route.path.indexOf('Life') > 0,
        'router-link-active': this.$route.path.indexOf('Life') > 0, 
        'md-active': this.$route.path.indexOf('Life') > 0
      }
    },
    isFull: function () {
      return this.$route.path.indexOf('Notifications') > 0 ||
        this.$route.path.indexOf('Functions') > 0 ||
        this.$route.path.indexOf('Settings') > 0 ||
        this.$route.path.indexOf('Write') > 0;
    },
    full: function () {
      return  {
        'full': this.isFull
      };
    },
    isAdd: function () {
      return this.$route.path.indexOf('Society') > 0;
    },
    isWrite: function () {
      return this.$route.path.indexOf('Write') > 0;
    },
    topButton: function () {
      return this.isFull ? 'arrow_back': 'menu'
    },
    bottomHide: function () {
      return {
        'md-hide': this.isFull
      }
    }
  },
  methods: {
    menuHide: function () {
      this.menuVisible = false
    },
    classItem: function (className) {
      return document.getElementsByClassName(className)[0];
    },
    topButtonClick: function () {
      if (!this.isFull) {
        this.menuVisible = !this.menuVisible;
      }
      else {
        this.$router.back()
      }
    }
  }
}

</script>