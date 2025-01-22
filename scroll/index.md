---
layout: default
title: scroll
pagination: 
  enabled: true
css:
   custom: >-
      /* width */
      ::-webkit-scrollbar {
        width: 6px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
      
      * {
        scrollbar-width: thin;
      }
---

<!-- Home Jumbotron -->
  <section class="intro full-width">
      <div class="wrapintro">
          <h1>AMP Affiliately Theme</h1>
          <h2 class="lead">An AMP-ready Jekyll blog theme</h2>
          <a class="btn" href="https://github.com/chriskyfung/amp-affiliately-jekyll-theme/" rel="noopener noreferrer" target="_blank">View on GitHub <i class='fab fa-github'></i></a>
      </div>
  </section>

<!-- Featured -->
  <section class="featured-posts">
    <div class="section-title">
      <h2><span>Featured</span></h2>
    </div>
    <div class="row listfeaturedtag">
      {% for post in site.posts %}
        {% if post.featured == true %}
            {% include blocks/featured-box.html %}
        {% endif %}
      {% endfor %}
    </div>
  </section>

<!-- Posts Index -->
  {% if paginator.previous_page %}
  {% if paginator.previous_page > 0 %}
  <div id="jumptopageof"></div>
  {% endif %}
  {% endif %}
