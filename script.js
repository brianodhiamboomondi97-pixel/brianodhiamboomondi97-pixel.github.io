(function () {
  var r = document.documentElement, b = document.getElementById('theme');
  function cur() { return r.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); }
  function set(t) {
    r.setAttribute('data-theme', t);
    b.textContent = t === 'dark' ? '\u2600\ufe0f' : '\U0001F319';
    b.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
  try { var s = localStorage.getItem('theme'); set(s === 'light' || s === 'dark' ? s : 'dark'); } catch (e) { set('dark'); }
  b.addEventListener('click', function () {
    var t = cur() === 'dark' ? 'light' : 'dark'; set(t);
    try { localStorage.setItem('theme', t); } catch (e) {}
  });

  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  var t = document.getElementById('typed');
  if (t) {
    var words = ['websites', 'web applications', 'booking platforms', 'online marketplaces'], wi = 0, ci = 0, del = false;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { t.textContent = words[0]; }
    else (function tick() {
      var w = words[wi], d = del ? 45 : 90;
      ci += del ? -1 : 1; t.textContent = w.slice(0, ci);
      if (!del && ci === w.length) { del = true; d = 1400; }
      else if (del && ci === 0) { del = false; wi = (wi + 1) % words.length; d = 350; }
      setTimeout(tick, d);
    })();
  }

  var f = document.getElementById('cf');
  if (f) f.addEventListener('submit', function (e) {
    e.preventDefault();
    var n = document.getElementById('cn').value.trim(), em = document.getElementById('ce').value.trim(),
        m = document.getElementById('cm').value.trim(), s = document.getElementById('cfmsg');
    if (!n || !m || !/^\S+@\S+\.\S+$/.test(em)) { s.textContent = 'Please enter your name, a valid email and a message.'; return; }
    s.textContent = 'Opening your email app\u2026';
    location.href = 'mailto:brianodhiamboomondi97@gmail.com?subject=' + encodeURIComponent('Portfolio message from ' + n) +
      '&body=' + encodeURIComponent(m + '\n\nFrom: ' + n + ' (' + em + ')');
  });
})();
