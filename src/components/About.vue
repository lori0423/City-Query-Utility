<template>
  <div class="about">
    <div class="clearfix">
      <div
          class="picture"
          :style="{
                backgroundImage: 'url(' + (coverImgUrl ? coverImgUrl : picUrl) + ')',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
              }"
      ></div>
      <div class="info">
        <a :href="url" target="_Blank">{{ title }}</a>
        <p style="text-align: right;float:right">{{ ctime }} {{ source }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
}

.clearfix {
  *zoom: 1;
}

.picture {
  float: left;
  width: 70px;
  height: 70px;
  margin-right: 10px;
  margin-top: 10px;
}

.info {
  float: left;
  width: 620px;
}

a {
  color: black;
  font-weight: 700;
  font-size: 14px;
}

a:hover{
  text-decoration: underline;
}
</style>

<script>
export default {
  props: {
    title: String,
    picUrl: String,
    source: String,
    url: String,
    ctime: String,
  },
  data() {
    return {
      coverImgUrl: require("../assets/img/news.jpg"),
      //     "ctime": "2019-12-02 15:16:00",
      //     "title": "建始县公安局原党组副书记向绪燕被开除党籍和公职",
      //     "picUrl": "http://n.sinaimg.cn/hb/transform/20170901/O0NN-fykpysa2405885.jpg",
      //     "url": "http://hb.sina.com.cn/news/zwzl/2019-12-02/detail-iihnzhfz3116800.shtml",
      //     "source": "湖北省纪委监委网站"
    };
  },
}
</script>
