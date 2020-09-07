<template>
  <div>
    <md-tabs md-alignment="fixed">
      <md-tab class="tab" md-label="生活分享" @click="tab = 0"></md-tab>
      <md-tab class="tab" md-label="帮助求助" @click="tab = 1"></md-tab>
      <md-tab class="tab" md-label="相亲" @click="tab = 2"></md-tab>
    </md-tabs>

    <div>
	    <md-content class="content" :class="tab0">
	      <md-label class="md-subheading heading-left">
	        今天
	      </md-label>
	      <md-label class="md-subheading heading-right">
	        {{ date }}
	      </md-label>

	      <md-list class="md-triple-line">
	      	<md-content v-for="item in shareItems">
		        <md-list-item>
		          <md-avatar>
		            <img :src="item.icon">
		          </md-avatar>

		          <md-card-content class="md-list-item-text">
		            <span>{{ item.title1 }}</span>
		            <span>{{ item.title2 }}</span>
		            <p>{{ item.description }}</p>
		          </md-card-content>
		        </md-list-item>

		        <md-list-item>
		          <div class="md-layout md-gutter">
						    <div class="md-layout-item">
					    		<img :src="item.src1">
					    		</img>
						    </div>
						    <div class="md-layout-item">
						    	<img :src="item.src2" />
						    </div>
						    <div class="md-layout-item">
						    	<img :src="item.src3" />
						    </div>
						  </div>
		        </md-list-item>
		      </md-content>
	      </md-list>
	    </md-content>

	    <md-content class="content" :class="tab1">
	      <md-label class="md-subheading heading-left">
	        Today
	      </md-label>
	      <md-label class="md-subheading heading-right">
	        {{ date }}
	      </md-label>

	      <md-list class="md-triple-line">
	      	<md-content v-for="item in helpItems">
		        <md-list-item>
		          <md-avatar>
		            <img src="https://placeimg.com/40/40/people/1">
		          </md-avatar>

		          <md-card-content class="md-list-item-text">
		            <span>{{ item.title1 }}</span>
		            <span>{{ item.title2 }}</span>
		            <p>{{ item.description }}</p>
		          </md-card-content>
		        </md-list-item>

		        <md-list-item>
		          <div class="md-layout md-gutter">
						    <div class="md-layout-item">
						    	<img :src="item.src1" />
						    </div>
						    <div class="md-layout-item">
						    	<img :src="item.src2" />
						    </div>
						    <div class="md-layout-item">
						    	<img :src="item.src3" />
						    </div>
						  </div>
		        </md-list-item>
		      </md-content>
	      </md-list>
	    </md-content>

	    <md-content class="content" :class="tab2">
	      <md-label class="md-subheading heading-left">
	        Today
	      </md-label>
	      <md-label class="md-subheading heading-right">
	        {{ date }}
	      </md-label>

	      <md-list class="md-triple-line">
	      	<md-content v-for="item in coupleItems">
		        <md-list-item>
		          <md-avatar>
		            <img src="https://placeimg.com/40/40/people/1">
		          </md-avatar>

		          <md-card-content class="md-list-item-text">
		            <span>{{ item.title1 }}</span>
		            <span>{{ item.title2 }}</span>
		            <p>{{ item.description }}</p>
		          </md-card-content>
		        </md-list-item>

		        <md-list-item>
		          <div class="md-layout md-gutter">
						    <div class="md-layout-item">
						    	<img :src="item.src1" />
						    </div>
						    <div class="md-layout-item">
						    	<img :src="item.src2" />
						    </div>
						    <div class="md-layout-item">
						    	<img :src="item.src3" />
						    </div>
						  </div>
		        </md-list-item>
		      </md-content>
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
      first: true,
      tab: 0,
      shareItems: [
      	{
      		icon: require('../../assets/Society/icon1.png'),
      		title1: '我有一个酸',
      		title2: '',
      		description: '嘻嘻爷明天回来啦',
      		src1: require('../../assets/Society/img11.png'),
      		src2: '',
      		src3: '',
      	},
      	{
      		icon: require('../../assets/Society/icon2.png'),
      		title1: '吃货研究所',
      		title2: '',
      		description: 'pick的大多数都出道了 真的只有佛系追星才会更快乐',
      		src1: require('../../assets/Society/img21.png'),
      		src2: require('../../assets/Society/img22.png'),
      		src3: '',
      	},
      	{
      		icon: require('../../assets/Society/icon3.png'),
      		title1: '吃货研究所',
      		title2: '',
      		description: '好瘦的猪',
      		src1: require('../../assets/Society/img31.png'),
      		src2: require('../../assets/Society/img32.png'),
      		src3: '',
      	},
      ]
    }
  },
  computed: {
    tab0: function() {
      return { 'md-hide': this.tab != 0 };
    },
    tab1: function() {
      return { 'md-hide': this.tab != 1 };
    },
    tab2: function() {
      return { 'md-hide': this.tab != 2 };
    },

    date: function () {
    	return new Date().toDateString();
    }
  },
  mounted: function () {
  },
  methods: {
    changeTab: function (args) {
    	console.log(this.haha)

      this.first = !this.first;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tab {
    width: 33.3%;
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

  .time {
  	position: absolute;
  	right: 20px;
  	top: 40%;
  }

  img {
  	width: 100%;
  }

  .md-layout {
  	width: 100%;
  }

  .add {
  	position: fixed;
  	bottom: 40px;
  }
</style>


