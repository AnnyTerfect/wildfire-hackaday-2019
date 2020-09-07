<template>
  <div>
  	<md-card v-for="notification in notifications">
      <md-card-header>
        <md-icon>{{ notification.icon }}</md-icon>
        {{ notification.message }}
      </md-card-header>
    </md-card>
	</div>
</template>

<script>
export default {
  name: 'Notifications',
  data () {
    return {
      notifications: [
        {
          icon: 'school',
          message: '明天晚上村里集合开会'
        },
        {
          icon: 'home',
          message: '今天晚上交水电费'
        },
      ]
    }
  },
  mounted: function () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .md-card {
    margin-top: 15px;
  }
</style>


