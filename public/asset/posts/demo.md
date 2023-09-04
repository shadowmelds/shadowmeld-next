![代表头像](/asset/posts/img/avr.png "Shadowmeld")

# Demo

<p class="update-date">上次更新：2023 年 8 月 27 日</p>

---

### 标题

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

---

### 正文

这里是 shadowmeld-next 开源 demo

---

### 强调

这里是`强调`

> 强调

---

### 折叠

<details>
<summary>👈&nbsp;<b>使用方法(点击展开)</b></summary>
TEST
</details>

---

### 有序列表

1. 第一行
   1. 第一行
   2. 第二行
2. 第二行
3. 第三行

---

### 无序列表

- 第一行
  - 第一行
  - 第二行
- 第二行
- 第三行

---

### 表格

| 页面        | 描述      | URL                                |
|-----------|---------|------------------------------------|
| home      | 主页      | [/app](/)                          |
| blog      | 短文概览    | [/app/posts](/posts)               |
| blog[id]  | 短文页面    | [/app/post/:filename](/post/about) |
| photo     | 照片      | [/app/photo](/photo)               |
| wallpaper | 照片      | [/app/wallpaper](/wallpaper)       |
| component | 组件展示    | [/app/component/](/component)      |

---

### 代码

```
apt-get update
```

<p class="code_title">📄 MainActivity</p>

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContent {
        YourAppTheme {
            Surface(modifier = Modifier.fillMaxSize(), color = MaterialTheme.colorScheme.background) {
                ClockScreen()
            }
        }
    }
}
```

---

### 提示

<aside class="blog-info-bg">
这里是积极的提示内容
</aside>

<aside class="blog-tip-bg">
<p class="warn">
<span class="material-icons">error</span>
<strong>警告</strong>
</p>
这里是警告的提示内容
</aside>