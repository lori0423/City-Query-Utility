# City-Query-Utility


## 01 configuration

### 1.1 工具

- `node js`
- `vue`
- `postman`
- `IntelliJ IDEA 2021.2.2`

### 1.2 所调用的`api`

|      | 城市信息\ `api`相关信息               | 来源             | 网址                                                         | 请求方式 | 参数                                                         | 返回数据类型 | 调用举例                                                     |
| ---- | ------------------------------------- | ---------------- | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ | ------------ | ------------------------------------------------------------ |
| 1    | **General**                           | 维基百科         | https://zh.wikipedia.org                                     | get      | 搜索语句message                                              | `json`       | https://zh.wikipedia.org/api/rest_v1/page/summary/北京       |
| 2    | **Train Transport(查询车票基本信息)** | 中国铁路12306    | https://kyfw.12306.cn/otn/leftTicketPrice                    | get      | 日期、始发站、终点站、车票类型                               | `json`       | https://kyfw.12306.cn/otn/leftTicket/query?leftTicketDTO.train_date=2021-10-27&leftTicketDTO.from_station=北京&leftTicketDTO.to_station=广州南&purpose_codes=ADULT |
| 3    | **Train Transport(查询车票价格)**     | 中国铁路12306    | https://kyfw.12306.cn/otn/leftTicketPrice                    | get      | 火车编号、始发站编号、终点站编号、座位类型、日期（部分数据从上一个api请求中获得） | `json`       | https://kyfw.12306.cn/otn/leftTicket/queryTicketPrice?train_no=2400000Z950G&from_station_no=01&to_station_no=10&seat_types=431&train_date=2021-10-28" |
| 4    | **Weather**                           | Weather Unlocked | [Weather Unlocked API - forecast](https://developer.weatherunlocked.com/documentation/localweather/forecast) | get      | 申请的`app_id`、`app_id`以及地点经纬度                       | xml          | http://api.weatherunlocked.com/api/current/51.50,-0.12?app_id=3a537fed&app_key=6f36393f7343c2023c38f86f22eb55af |
| 5    | **News**                              | 天行数据         | https://www.tianapi.com/                                     | get      | 1.` key`（自己申请的key） 2. `areaname`（城市名）            | `json`       | http://api.tianapi.com/areanews/index?key=f7e5fea22ad13f980c22d28e7bb77a01&areaname=北京 |
| 6    | **Map**                               | 高德地图         | [高德开放平台高德地图API (amap.com)](https://lbs.amap.com/)  | fetch    | 1. ` key`（自己申请的key）2. address地点名                   | `json`       | https://restapi.amap.com/v3/geocode/geo?key=b46e001d88ea385075cc97e1c892ce37&address=北京 |
| 7    | **Cityscape**                         | 维基百科         | https://zh.wikipedia.org                                     | get      | 搜索语句message                                              | `json`       | https://zh.wikipedia.org/api/rest_v1/page/summary/北京       |

## 02 deployment

### 2.1 运行

1. Project setup

```
npm install
```

2. Compiles and hot-reloads for development

```
npm run serve
```

## 03 实现效果

### 3.1 初始化

![初始化](C:\Users\luoji\Documents\GitHub\City-Query-Utility\初始化.jpeg)
【如果图片显示不出，请查看主目录下的 初始化.jpeg】

### 3.2 举例实现

![](C:\Users\luoji\Documents\GitHub\City-Query-Utility\举例实现.jpeg)
【如果图片显示不出，请查看主目录下的 举例实现.jpeg】

## 04 问题与解决

### 4.1 调用12306跨域

添加`vue.config.js`文件，解决问题相关的代码如下：

```javascript
 '/traininfo': {       //此处并非和url一致
            target:'https://kyfw.12306.cn/otn/leftTicket',
            changeOrigin:true, //允许跨域
            pathRewrite:{
                '^/traininfo': ''
            },
            secure: false,
            onProxyReq(proxyReq, req, res) {
              const temp = req.headers['train_cookie'];
              if(temp){
                proxyReq.setHeader('cookie', temp)

              }

            }
        },
```

### 4.2 调用`wikipedia`不成功

> 挂`VPN`就解决了！！！

### 4.3 `vue`处理`XML`数据

解决方案详见https://blog.csdn.net/tanfei_/article/details/104238003 

核心工作：添加`xml2json.js`文件

### 4.4 高德地图跨域问题

解决方法：把get请求改为fetch请求

代码如下：

```javascript
  //地名转换为经纬度 
async addressToLnglat(address) {
      return fetch(
          "https://restapi.amap.com/v3/geocode/geo?key=b46e001d88ea385075cc97e1c892ce37&address=" +
          address
      )
          .then(function (response) {
            return response.json();
          })
          .then((res) => {
            if (res.geocodes[0].location) {
              return res.geocodes[0].location;
            } else return -1;
          });
    },
```

