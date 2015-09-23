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