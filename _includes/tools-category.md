<div class="subnav">
  <div class="container">
    <ul>
      <li><a href="/tools-for-remote-workers-digital-nomads">All</a></li>
      {% for cat in site.category-list %}
          <li><a href="/tools-for-remote-workers-digital-nomads/{{ cat }}">{{ cat | capitalize }}</a></li>
      {% endfor %}
    </ul>
  </div>
</div>

<div class="container">
  <div class="sixteen columns">
    <ul class="tools">
      {% for tool in site.data.tools %}
        {% if tool.categories contains include.cat or include.cat == "" %}
          <li>
            <div><img src="/images/{{ tool.image }}.png" /></div>
            <h2><a href="{{ tool.url }}">{{ tool.name }}</a></h2>
            <p>
              {{ tool.description }}
            </p>
            <a href="{{ tool.url }}">Visit site</a>
          </li>
        {% endif %}
      {% endfor %}
    </ul>
  </div>
</div>