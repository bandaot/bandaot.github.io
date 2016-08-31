---
title: 如何在 Ubuntu 16.04 使用360随身wifi2
date: 2016-08-31 22:49:46
tags:
- ubuntu
- 360wifi
- MT7601U
---

# 前言
平时在公司主要使用环境是Ubuntu 16.04，网上各种搜教程，似乎360 wifi用的比较多，小米百度等随身wifi也一样，都是MT7601的芯片，哪个便宜买哪个，都一样的东西。没想到Ubuntu 16.04已经自带驱动，不过该驱动并不支持AP模式，14.04下的驱动无法编译，网上各种需要解决方案无果，最终解决方式是通过Virtual Box安装Windows 虚拟机成功开启网络。

## 安装 Virtual Box
先安装Virtual Box虚拟机，我是直接官网下的，感觉版本会新点
[Virtual Box](https://www.virtualbox.org/wiki/Linux_Downloads)

## 下载免费Windows镜像
微软官方提供免费的Windows10镜像用于测试Edge浏览器，每次可以免费使用90天，然后需要重新激活，官方建议导入后，建立一次快照

[https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/)

## 导入Virtual Box虚拟机
下载到一个文件夹，然后用Virtual Box的导入功能导入，然后打卡设置，按照说明打开USB2.0的控制器，添加设备
必须用第一个按钮添加一个过滤器
随便设置一个名称比如360wifi，然后VendorID：148f
Product ID：760b，其他不用填。然后开机就好了。

## 设置Wifi热点
插入360wifi，虚拟机会自动根据规则将Wifi卡接入到Windows中，这个时候可以看到已经能够搜索到其它wifi。这时千万别装360自己的驱动程序，装了就重来吧。Windows10自带的驱动和软件反而兼容性更好，性能更好。打开网络设置，里面有个移动热点（Mobile hotspot）的选项，打开这个选项卡，点击编辑，设置好网络名称和密码，然后点最上面的分享我的网络连接到其它设备开关，很快就能打开网络分享，Android手机实测可以用，苹果应该也没有问题。

有不懂的可以留言问我。
