---
layout: page
title:
tagline:
---
{% include JB/setup %}

### Post list

<ul class="posts">
  {% for post in site.posts %}
    <li><time class="date" datetime="{{ page.date }}">{{ page.date | date: "%Y-%m-%d" }}</time> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

### &raquo; [back to github.com/Rplus](https://github.com/Rplus)
