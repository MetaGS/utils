//<div id="view" class="view" tabindex="0">Text</div>

    const view = document.getElementById('view');
   

    view.onfocus = function(event) {
      
      const textarea = document.createElement('textarea');
      textarea.value = this.innerHTML;
      
      textarea.className = 'edit';
      view.replaceWith(textarea);
      textarea.focus();
      
      textEnter = document.getElementById('textEnter');

      textarea.onblur = function(event) {
        view.innerHTML = this.value;
        textarea.replaceWith(view)
      }
    };
