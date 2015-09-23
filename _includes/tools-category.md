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
    <ul class="tools-list">
      {% for tool in site.data.tools %}
        {% if tool.categories contains include.cat or include.cat == "" %}
          <li class="eight columns">
            <div><img src="https://logo.clearbit.com/{{ tool.url }}" /></div>
            <h2><a href="http://{{ tool.url }}">{{ tool.name }}</a></h2>
            <p>
              {{ tool.description }}
            </p>
            <a href="http://{{ tool.url }}" target="_blank">Visit site</a>
          </li>
        {% endif %}
      {% endfor %}
    </ul>
</div>