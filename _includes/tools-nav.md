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