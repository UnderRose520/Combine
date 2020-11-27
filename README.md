## COMBINE 积木社区

### 视频链接2.0：



### 小程序体验：

![](https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/common/enjoy.jpg)



## 一、什么是**COMBINE 积木社区**？

​		该社区旨在为在校大学生们提供一个按照需求来进行同伴检索的平台，目前大学生所面临的工作任务内容丰富，需求多样，往往需要多个领域的结合才能够很好地完成任务，而跨学科的人员组合很难实现较好的效果，通过传统的靠中间人介绍的方法可能会面临合作伙伴能力不足但是碍于中间人的情面而不好处理的情况，若在网络上随意的邀请又无法保证邀请对象的优势是否符合团队需求，**COMBINE 积木社区**旨在打造一个权威的第三方信誉平台，让同学们能够按需求寻找高质量的同伴，让合作过程有进度记录，让项目成员有违约成本，让合作团队有口碑！

> * 创业项目却专业知识人员？                  来COMBINE!
> * 竞赛团队缺乏可靠队友？                      来COMBINE!
> * 约拍照却摄影大神？                              来COMBINE!
> * 桌游，游戏，吃火锅缺拼友？              来COMBINE!

**COMBINE 积木社区首页图**

![COMBINE首页图](https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/common/combine.png)

> 每个人都会有自己特长，不要觉得自己不会被需要那是缺少一个被发现的平台，也不要觉得自己对渴望找的队友要求苛刻导致无人可寻，COMBINE为你解决这些烦恼。

------

## 二、解决方案定位

​        COMBINE 积木社区是一款以面向大学生为主，后续面向学社衔接的集人才信誉评估，个人实践记录，人才快速组队的功能程序，除此中长期的项目合作，竞赛组队等正式活动，更多的健康的娱乐生活（如约拍，桌游等）组队功能也添加在其中，进一步增加了对客户的粘性。

​		瞄准的痛点为目前大学生对于跨专业组队的需求十分巨大，但是在组队过程中往往无法达到令人满意的结果，COMBINE 积木社区通过绑定学籍系统对用户进行实名制认证以此来进一步规范用户的使用情况，通过标签的形式让用户对自己进行标注，按照需求在社区进行目标搜索，改变了以往人才寻找中的单方面要求的局面，更好地实现了双向选择，合作的成果也能够被社区所保留分享，能够作为未来履历的一份备案，以此积累起来的信誉和能力值也将成为后续第三方对人才评价的一个指标。若进行远程协作和项目交易，平台可提供第三方担保，按照互联网金融标准规范进行短期资金暂存，

## 三、解决方案技术

### 1.基本技术

#### 	1.1合理性

使用前端框架Uni-app，VUE的基本语法以及结合腾讯云进行小程序的页面设计，数据渲染等，例如：在引导页使用数组保存用户选择的兴趣标签，并使用便签定位到推荐关注等相关的页面内容，可以更好的为用户找到其心仪的小伙伴。

####     1.2可靠性

充分考虑了各种边界条件，充分考虑了渲染时数组边界及下标越界问题，同时针对相同的功能进行了多种模块封装，对于相同的样式也定义了全局的CSS样式。

### 2.云技术开发

​       在使用云技术进行开发的过程中，我们使用了微信云进行数据库的创建，将用户头像，注册信息等都存储在其中，轻化了小程序，并且将用户上传动态的图片进行云存储，方便日后用户的访问。

### 3.性能

​		基本实现预期功能，能够满足较少用户同时在线进行动态发布以及实现聊天和点赞关注功能，性能稳定，画面切换流畅。

## 四、解决方案执行

### 1.部署难度

​		COMBINE 积木社区依托微信小程序开发者工具进行开发，以小程序的形式进行运行，对于在校大学生而言，每日使用微信几乎是家常便饭，通过校园网的登陆接口进行身份验证后即可注册登陆，整个过程快捷方便，无复杂步骤，部署难度较小，易于推广。

### 2.成本

​		成本方面该小程序成本较低，依托腾讯云进行用户数据库的搭建，在目前用户数量的前提下并不会需要较大开销，若用户规模达到一定规模，那流量所带来的盈利也将足够下一步的存储开销所需。

### 3.风险控制

​		作为实名制认证的小程序，对用户的约束力度应当大于一般的小程序，再加之学校教务系统的认证之后，学生信誉度成为了进一步限制用户文明规范使用小程序的手段；在平台提供第三方担保时，按照互联网金融标准规范进行短期资金暂存，向微信支付寻求相关技术保护；用户发表动态时经过关键字查找，敏感词屏蔽等方法进行调控，整体风险控制能力较高。

## 五、开源规范

### [1.LICENSE开源许可证](https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/WeChat Mini Program/file/LISENCE.md)

```
MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### 2.GitHub代码托管

https://github.com/UnderRose520/Combine/tree/combine2.0

### 3.脚本描述构建

https://github.com/UnderRose520/Combine

### 4.贡献指南(contributing.md)

https://github.com/UnderRose520/Combine

### 5.部署说明(deployment.md)

https://github.com/UnderRose520/Combine

### 6.更新日志（changelog.md）

https://github.com/UnderRose520/Combine

## 六、项目部署说明

#### 一、注册

1.1 打开微信公众平台官网，点击“立即注册”按钮。

1.2 进入注册选项里，找到“小程序”选项，点击进入。

1.3 进入小程序注册页面。

​		1.3.1填写未被微信平台注册、未被微信开放平台注册、未被个人微信号绑定过的邮箱，这三者必须同时满足，不然邮箱这一关就过不了，例如下面的情况；

​		1.3.2 上一步的邮箱填写正确后，下面的登录密码、验证码，以及勾选服务协议操作之后，点击“注册”按钮即可；

1.4 邮箱激活部分。

​		1.4.1 登录申请小程序的那个邮箱，点击进入收件箱，会收到一封微信发的激活账户的邮件；

​		1.4.2 点击邮件进入，会进入到微信公众平台里面的信息登记界面；

1.5 用户信息登记部分。

​		1.5.1 选择注册国家/地区，以及主体类型；

​		1.5.2 主体信息登记：姓名身份证号、管理员手机号、短信验证码，以及管理员的个人微信扫描二维码进行身份验证，最后点击“继续”按钮；

​		1.5.3 主体信息确认步骤，确认无误之后，点击“确定”按钮；

​		1.5.4 信息提交成功后，微信小程序就注册成功，然后需要去登录小程序账号密码进行小程序的信息完善；

1.6 新注册的微信小程序信息完善。

​		1.6.1 小程序发布之前需要先补充小程序的基本信息；

​		1.6.2 给小程序添加项目成员；

​		1.6.2 对项目成员进行删除；

#### 二、发布 (开发前需要填写小程序的APPID)

2.1 上传代码
		2.1.1 代码编写完毕后，点击微信开发者工具右上角“上传”；

​		2.1.2 如果之前上传过了就会出现下面的提示，点击“确定”进行下一步操作；

​		2.1.3 填写项目备注以及版本号信息，确认信息无误后点击“上传；

​		2.1.4 上传成功后会出现提示弹框，如下图所示；

2.2 提交审核

​		2.2.1 上传成功后进入公众平台，打开“开发管理”；

​		2.2.2 然后后边下拉，这里就有刚才提交的版本了；

​		2.2.3 点击提交审核，会弹出“相关须知”这个是必须同意的；

​		2.2.4 点击下一步，会弹出一个新的窗口，用于填写一些检索信息；

2.3 发布版本

​		2.3.1 等待一段时间就审核通过了，收到通知信息后在审核版本里会出现一个审核通过待发布的版本，由于我是事后补写的这里就没有待发布的版本了，点

击“发布”后等待大概5分钟就能在小程序里搜到了；

2.4 配置请求域名

​		2.4.1 进入公众平台，点击左侧导航栏“开发”；

​		2.4.2 点击“开发设置”，根据需要添加“合法域名”；

​		2.4.3 修改或删除请求的“合法域名”，开发–>开发设置–>request合法域名–>修改；

#### 三、项目开发（使用uni-app和腾讯云）

3.1 创建uni-app小程序项目

3.2 创建文件夹page，common，static，store，unpackege，cloudfunctions

3.3 编写代码

​		3.3.1 结合UI，使用vue语法来编写代码效果，并使用CSS，SCSS来进行布局，注意条件编译（针对某一个功能，不同平台有不同的要求 app 和小程序不一定相同）

​		3.3.2 对于某些功能，某些样式，可以在common里面进行统一设置，然后在App.vue里面引入样式，在这里，对于某些图表使用的是阿里云的iconfont矢量图，主要是用于小程序的底部导航栏，以及一些特色的图标

​		3.3.3 对于某些特定的，能够在不同页面使用到的功能，我们在component文件里面添加了组件，方便在其他文件进行使用，同时，为了进行数据传递，使用了父子组件间传数据的方法，我们的component组件不含数据，只是做模板使用

3.4 使用腾讯云进行小程序后端开发

​		3.4.1 在uni-app项目里面创建cloudfunctions，并关联腾讯云服务空间

​		3.4.2 创建数据库数据集合，然后根据不同功能创建不同的数据表，每个数据表下有每个特定功能的JSON的数据，有各种类型的，包括字符，数字，对象，数组等

3.5 前端调用腾讯云

​		3.5.1 在前端创建云函数，并上传部署

​		3.5.2 前端使用云函数，从腾讯云数据库得到数据并渲染加载到前端页面

3.6 调试

​		3.6.1 使用微信开发者工具进行调试，同时可以真机调试，打印调试输出的结果

​		3.6.2 根据调试输出结果，进行修改功能代码，调整逻辑

3.7 运行发布，具体内容可根据小程序的发布流程进行操作，在第二步已经有，在此不赘述

3.8 维护

​		3.8.1 进行版本迭代，更新

​		3.8.2 修复bug		

## 七、项目规划跟踪甘特图

## ![跟踪甘特图](https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/WeChat Mini Program/file/甘特图.png)



## 八、功能

### 1.支持功能

- [x] 支持话题专区讨论
- [x] 支持私聊功能
- [x] 支持社区动态发表
- [x] 支持创建合作小组并提供小组共同开发功能
- [x] 支持第三方担保交易

### 2.功能截图

**1）引导标签页：**

![](https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/ScreenShot/引导页2.PNG)



**2）首页：**

![](https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/ScreenShot/首页1.PNG)

**3）话题分类：**

![悄悄话](https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/ScreenShot/话题分类.PNG)

**4）发布页：**

![](https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/ScreenShot/发布页2.PNG)



**5）社区动态：**

![](https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/WeChat Mini Program/pic/8.png)







**6）视频页：**

![](https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/WeChat Mini Program/pic/7.png)

**7）more：**

![](https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/WeChat Mini Program/pic/2.png)

**8）发布页：**

![](https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/WeChat Mini Program/pic/5.png)

**9）聊天页：**

![](https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/WeChat Mini Program/pic/1.png)

**10）聊天详情：**

![](https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/WeChat Mini Program/pic/3.png)

**11）我的：**

![](https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/WeChat Mini Program/pic/4.png)

**12）个人空间：**

![](https://7463-tcb-aqbwkdsxtag6xcvb0a3f9-b82c2d-1304009197.tcb.qcloud.la/WeChat Mini Program/pic/6.png)





### 九、项目统计

| 文件                    |      | 数量(个) |
| ----------------------- | ---: | :------: |
| Component               |      |    46    |
| Common                  |      |    10    |
| Page                    |      |    35    |
| Cloud Functions(腾讯云) |      |    14    |
| Mark Down               |      |    7     |

### 十、项目总结

​		本次项目在团队成员的协作配合下，按照项目计划初步实现了基本功能和基本界面效果，团队成员在设计过程中分工明确、认真负责，共同完成了本项目的开发。非常感谢腾讯和学校能够给我们提供这个小程序开发的机会，并且提供了相关的技术指导和技术支持，希望我们在接下来的职业生涯中能够将此次开发经验运用到工作中。
