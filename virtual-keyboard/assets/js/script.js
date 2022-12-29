function getTemplate(state) {
  return '<main class="main">\n'
    + '    <section class="title">\n'
    + '        <h1>RSS Виртуальная клавиатура</h1>\n'
    + '    </section>\n'
    + '    <section class="window">\n'
    + '        <div class="window__area">\n'
    + '              <textarea class="window__textarea" name="textarea" rows="10" cols="70">\n'
    + '              </textarea>\n'
    + '        </div>\n'
    + '    </section>\n'
    + '    <section class="keyboard">\n'
    + '        <div class="keyboard__line">\n'
    + '            <div class="keyboard__key keyboard__key_colored">\n'
    + '                <div class="keyboard__secondkey">~</div>\n'
    + '                `\n'
    + '            </div>\n'
    + '            <div class="keyboard__key">\n'
    + '                <div class="keyboard__secondkey">!</div>\n'
    + '                1\n'
    + '            </div>\n'
    + '            <div class="keyboard__key">\n'
    + '                <div class="keyboard__secondkey">@</div>\n'
    + '                2\n'
    + '            </div>\n'
    + '            <div class="keyboard__key">\n'
    + '                <div class="keyboard__secondkey">#</div>\n'
    + '                3\n'
    + '            </div>\n'
    + '            <div class="keyboard__key">\n'
    + '                <div class="keyboard__secondkey">$</div>\n'
    + '                4\n'
    + '            </div>\n'
    + '            <div class="keyboard__key">\n'
    + '                <div class="keyboard__secondkey">%</div>\n'
    + '                5\n'
    + '            </div>\n'
    + '            <div class="keyboard__key">\n'
    + '                <div class="keyboard__secondkey">^</div>\n'
    + '                6\n'
    + '            </div>\n'
    + '            <div class="keyboard__key">\n'
    + '                <div class="keyboard__secondkey">&</div>\n'
    + '                7\n'
    + '            </div>\n'
    + '            <div class="keyboard__key">\n'
    + '                <div class="keyboard__secondkey">*</div>\n'
    + '                8\n'
    + '            </div>\n'
    + '            <div class="keyboard__key">\n'
    + '                <div class="keyboard__secondkey">(</div>\n'
    + '                9\n'
    + '            </div>\n'
    + '            <div class="keyboard__key">\n'
    + '                <div class="keyboard__secondkey">)</div>\n'
    + '                0\n'
    + '            </div>\n'
    + '            <div class="keyboard__key">\n'
    + '                <div class="keyboard__secondkey">_</div>\n'
    + '                -\n'
    + '            </div>\n'
    + '            <div class="keyboard__key">\n'
    + '                <div class="keyboard__secondkey">+</div>\n'
    + '                =\n'
    + '            </div>\n'
    + '            <div class="keyboard__key keyboard__key_colored keyboard__key_wide">Backspace</div>\n'
    + '        </div>\n'
    + '        <div class="keyboard__line">\n'
    + '            <div class="keyboard__key keyboard__key_colored keyboard__key_tab">Tab</div>\n'
    + '            <div class="keyboard__key" data-key="q">q</div>\n'
    + '            <div class="keyboard__key" data-key="w">w</div>\n'
    + '            <div class="keyboard__key" data-key="e">e</div>\n'
    + '            <div class="keyboard__key" data-key="r">r</div>\n'
    + '            <div class="keyboard__key" data-key="t">t</div>\n'
    + '            <div class="keyboard__key" data-key="y">y</div>\n'
    + '            <div class="keyboard__key" data-key="u">u</div>\n'
    + '            <div class="keyboard__key" data-key="i">i</div>\n'
    + '            <div class="keyboard__key" data-key="o">o</div>\n'
    + '            <div class="keyboard__key" data-key="p">p</div>\n'
    + '            <div class="keyboard__key" data-key="[">[</div>\n'
    + '            <div class="keyboard__key" data-key="]">]</div>\n'
    + '            <div class="keyboard__key" data-key="slash">\\</div>\n'
    + '            <div class="keyboard__key keyboard__key_colored" data-key="del">DEL</div>\n'
    + '        </div>\n'
    + '        <div class="keyboard__line">\n'
    + '            <div class="keyboard__key keyboard__key_colored keyboard__key_wide">Caps Lock</div>\n'
    + '            <div class="keyboard__key">a</div>\n'
    + '            <div class="keyboard__key">s</div>\n'
    + '            <div class="keyboard__key">d</div>\n'
    + '            <div class="keyboard__key">f</div>\n'
    + '            <div class="keyboard__key">g</div>\n'
    + '            <div class="keyboard__key">h</div>\n'
    + '            <div class="keyboard__key">j</div>\n'
    + '            <div class="keyboard__key">k</div>\n'
    + '            <div class="keyboard__key">l</div>\n'
    + '            <div class="keyboard__key">;</div>\n'
    + '            <div class="keyboard__key">\'</div>\n'
    + '            <div class="keyboard__key keyboard__key_colored keyboard__key_enter">ENTER</div>\n'
    + '        </div>\n'
    + '        <div class="keyboard__line">\n'
    + '            <div class="keyboard__key keyboard__key_colored keyboard__key_wide">Shift</div>\n'
    + '            <div class="keyboard__key">\\</div>\n'
    + '            <div class="keyboard__key">z</div>\n'
    + '            <div class="keyboard__key">x</div>\n'
    + '            <div class="keyboard__key">c</div>\n'
    + '            <div class="keyboard__key">v</div>\n'
    + '            <div class="keyboard__key">b</div>\n'
    + '            <div class="keyboard__key">n</div>\n'
    + '            <div class="keyboard__key">m</div>\n'
    + '            <div class="keyboard__key">,</div>\n'
    + '            <div class="keyboard__key">.</div>\n'
    + '            <div class="keyboard__key">/</div>\n'
    + '            <div class="keyboard__key keyboard__key_colored">🠕</div>\n'
    + '            <div class="keyboard__key keyboard__key_colored">Shift</div>\n'
    + '        </div>\n'
    + '        <div class="keyboard__line">\n'
    + '            <div class="keyboard__key keyboard__key_colored keyboard__key_ctrl">Ctrl</div>\n'
    + '            <div class="keyboard__key keyboard__key_colored">Win</div>\n'
    + '            <div class="keyboard__key keyboard__key_colored">Alt</div>\n'
    + '            <div class="keyboard__key keyboard__key_space">Space</div>\n'
    + '            <div class="keyboard__key keyboard__key_colored">Alt</div>\n'
    + '            <div class="keyboard__key keyboard__key_colored keyboard__key_ctrl">Ctrl</div>\n'
    + '            <div class="keyboard__key keyboard__key_colored">🠔</div>\n'
    + '            <div class="keyboard__key keyboard__key_colored">🠗</div>\n'
    + '            <div class="keyboard__key keyboard__key_colored">🠖</div>\n'
    + '        </div>\n'
    + '    </section>\n'
    + '    <section class="comments">\n'
    + '        <div>\n'
    + '            <p>Клавиатура создана в операционной системе Windows </p>\n'
    + '            <p>Для переключения языка комбинация: левыe ctrl + alt</p>\n'
    + '        </div>\n'
    + '    </section>\n'
    + '</main>';
}

class VKeyboard {
  constructor(selector, state) {
    this.vkb = document.querySelector(selector);
    this.state = state;
    this.render(this.state);
    this.listen();
  }

  // eslint-disable-next-line class-methods-use-this
  mouseHandler(e) {
    console.log(e.target.dataset.key+' '+e.target.innerHTML);
  }

  // eslint-disable-next-line class-methods-use-this
  keypressHandler(e) {
    console.log(e.code);
  }

  listen() {
    this.mouseHandler = this.mouseHandler.bind(this);
    this.vkb.addEventListener('click', this.mouseHandler);
    this.vkb.addEventListener('keydown', this.keypressHandler);
  }

  render(state) {
    this.vkb.innerHTML = getTemplate(state);
  }
}

// eslint-disable-next-line no-unused-vars
const vKeyboard = new VKeyboard('body', 'TEST');
