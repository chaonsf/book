##项目用到less
-mock  模拟数据
-api 所有的接口
-base基础组件
-components 页面级组件

##热门图书功能
-先写服务端，确保数据能正常返回
-增加api方法，实现调取数据功能
-在哪个组件种应用这个api，如果是一个基础组件需要用这些数据，在使用这个组建的父级中调用这个方法，将数据传递给基础组件
##写一个基础组件
1.创建一个vue文件
2.在需要使用这个组件的父级中引用这个组件
3.在组件中组测
4。以标签的形式使用