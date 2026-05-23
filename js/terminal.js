/**
 * terminal.js
 * Handles input, history, tab-completion, and rendering.
 */

(function () {
  const input       = document.getElementById('cmd-input');
  const outputArea  = document.getElementById('output-area');
  const termBody    = document.getElementById('terminal-body');

  let history       = [];
  let historyIndex  = -1;
  let tabMatches    = [];
  let tabIndex      = 0;

  // ── Focus input whenever the terminal is clicked ──────
  document.addEventListener('click', () => input.focus());
  input.focus();

  // ── Run a command ─────────────────────────────────────
  function runCommand(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    // Push to history
    history.unshift(raw);
    historyIndex = -1;

    if (cmd === 'clear') {
      outputArea.innerHTML = '';
      return;
    }

    // Echo the command
    const block = document.createElement('div');
    block.className = 'output-block';

    const echo = document.createElement('div');
    echo.className = 'echoed-cmd';
    echo.innerHTML = `<span class="prompt-echo">guest@portfolio:~$</span> ${escapeHtml(raw)}`;
    block.appendChild(echo);

    // Render output
    const out = document.createElement('div');
    out.className = 'output-content';

    if (COMMANDS.hasOwnProperty(cmd) && COMMANDS[cmd] !== null) {
      out.innerHTML = COMMANDS[cmd]();
    } else if (cmd === 'clear') {
      // handled above
    } else {
      out.innerHTML = `<span class="output-error">bash: ${escapeHtml(cmd)}: command not found</span>\nType <kbd>help</kbd> to see available commands.`;
    }

    block.appendChild(out);
    outputArea.appendChild(block);
    scrollBottom();

    // Trigger resume download if requested
    if (cmd === 'resume') {
      const link = document.createElement('a');
      link.href = 'assets/resume.pdf';
      link.download = 'alex-rivera-resume.pdf';
      link.click();
    }
  }

  // ── Keyboard handler ──────────────────────────────────
  input.addEventListener('keydown', (e) => {
    switch (e.key) {

      case 'Enter':
        runCommand(input.value);
        input.value = '';
        tabMatches = [];
        break;

      case 'ArrowUp':
        e.preventDefault();
        if (historyIndex < history.length - 1) {
          historyIndex++;
          input.value = history[historyIndex];
        }
        break;

      case 'ArrowDown':
        e.preventDefault();
        if (historyIndex > 0) {
          historyIndex--;
          input.value = history[historyIndex];
        } else {
          historyIndex = -1;
          input.value = '';
        }
        break;

      case 'Tab':
        e.preventDefault();
        handleTab();
        break;

      case 'l':
        if (e.ctrlKey) {
          e.preventDefault();
          outputArea.innerHTML = '';
        }
        break;

      default:
        tabMatches = [];
        tabIndex   = 0;
        break;
    }
  });

  // ── Tab completion ─────────────────────────────────────
  function handleTab() {
    const partial = input.value.toLowerCase();
    if (!partial) return;

    if (tabMatches.length === 0) {
      tabMatches = COMMAND_LIST.filter(c => c.startsWith(partial));
      tabIndex   = 0;
    }

    if (tabMatches.length === 1) {
      input.value = tabMatches[0];
    } else if (tabMatches.length > 1) {
      input.value = tabMatches[tabIndex % tabMatches.length];
      tabIndex++;
    }
  }

  // ── Utilities ──────────────────────────────────────────
  function scrollBottom() {
    termBody.scrollTop = termBody.scrollHeight;
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Auto-scroll after boot animation completes
  setTimeout(scrollBottom, 2000);
})();
