---
layout: page
title:
tagline:
---
{% include JB/setup %}

### note list

<ul class="posts">
  {% for post in site.posts %}
    <li><time class="date" datetime="{{ post.date }}">{{ post.date | date: "%Y--%m-%d" }}</time> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

### &raquo; [back to github.com/Rplus](https://github.com/Rplus)
