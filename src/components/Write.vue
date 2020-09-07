<template>
  <div>
  	<md-card class="textarea md-elevation-0">
  		<md-field>
	      <label>说说</label>
	      <md-textarea class="textarea" v-model="description"></md-textarea>
	      <md-icon>description</md-icon>
    	</md-field>

	  	<md-field>
		    <label>上传图片</label>
		    <md-file id="file" @change="changeFile" :path="src" accept="image/*" />
	  	</md-field>

	  	<md-content>
	  		<img class="full" :src="src" />
	  	</md-content>

	  	<md-content class="md-layout md-alignment-enter-Left">
	  		<md-switch class="md-layout-item" v-model="transfer" @change="stylize" v-show="src != ''">风格化</md-switch>
	  	</md-content>
    </md-card>

    <div class="mask-container" v-show="wait">
	    <div class="spinner">
		    <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
	  	</div>

	  	<div class="mask"></div>
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
      src: '',
    	transfer: false,
    	wait: false,
      description: ''
    }
  },
  mounted: function () {
  },
  methods: {
    changeTab: function (args) {
    	console.log(this.haha)

      this.first = !this.first;
    },
    changeFile: function () {
    	let 
    		fileInput = document.getElementById('file'),
				file = fileInput.files[0];
    	this.src = window.URL.createObjectURL(file);

  		reader.readAsDataURL(file);
    },
    stylize: function () {
    	if (this.transfer) {
    		this.wait = true;
        let file = document.getElementById('file');
        this.axios.post('/model', '')
          .then(res => {
            console.log(res)
          // 成功回调
          }, res => {
          // 错误回调
        })
    	}
    },
    test: function () {
        let 
          file = document.getElementById('file').files[0],
          data = { 'file': file }
        this.axios.post('/model/predict', data)
          .then(res => {
            console.log(res)
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
  .textarea {
  	margin-top: 20px;
  	height: 200px;
  }

  .md-field:last-child {
    margin-bottom: 40px;
  }

  .md-content {
  	text-align: center;
  }

  .full {
  	height: 80px;
  }

  .mask-container {
  	position: fixed;
  	left: 0;
  	top: 0;
  	right: 0;
  	bottom: 0;
  	z-index: 100;
  }

  .spinner {
  	position: fixed;
  	left: 50%;
  	top: 50%;
  	transform: translate(-50%, -50%);
  	z-index: 100;
  }

  .mask {
  	position: fixed;
  	left: 0;
  	top: 0;
  	right: 0;
  	bottom: 0;
  	background: #333;
  	opacity: 0.5;
  	z-index: 10;
  }
</style>


