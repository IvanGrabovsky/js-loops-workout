// test/setup-dom.js
// Lightweight, zero-dependency DOM Mock for Node/Vitest test environment

class ClassList {
  constructor(el) {
    this.el = el;
    this._classes = new Set();
    this._syncFromClassName();
  }
  _syncFromClassName() {
    this._classes.clear();
    const parts = (this.el._className || '').trim().split(/\s+/).filter(Boolean);
    parts.forEach(c => this._classes.add(c));
  }
  _syncToClassName() {
    this.el._className = Array.from(this._classes).join(' ');
  }
  add(...names) {
    this._syncFromClassName();
    names.forEach(n => this._classes.add(n));
    this._syncToClassName();
  }
  remove(...names) {
    this._syncFromClassName();
    names.forEach(n => this._classes.delete(n));
    this._syncToClassName();
  }
  toggle(name, force) {
    this._syncFromClassName();
    let res;
    if (force !== undefined) {
      if (force) this._classes.add(name);
      else this._classes.delete(name);
      res = force;
    } else {
      if (this._classes.has(name)) {
        this._classes.delete(name);
        res = false;
      } else {
        this._classes.add(name);
        res = true;
      }
    }
    this._syncToClassName();
    return res;
  }
  contains(name) {
    this._syncFromClassName();
    return this._classes.has(name);
  }
}

class MockElement {
  constructor(tagName) {
    this.tagName = tagName.toUpperCase();
    this.nodeType = 1;
    this.childNodes = [];
    this.parentNode = null;
    this._className = '';
    this._classList = new ClassList(this);
    this._attributes = new Map();
    this.style = {};
    this.dataset = {};
    this.disabled = false;
    this.open = false;
  }

  get className() {
    return this._className;
  }
  set className(val) {
    this._className = String(val || '');
    this._classList._syncFromClassName();
  }

  get classList() {
    return this._classList;
  }

  get children() {
    return this.childNodes.filter(n => n.nodeType === 1);
  }

  get firstElementChild() {
    const ch = this.children;
    return ch[0] || null;
  }

  get lastElementChild() {
    const ch = this.children;
    return ch[ch.length - 1] || null;
  }

  get nextElementSibling() {
    if (!this.parentNode) return null;
    const siblings = this.parentNode.children;
    const idx = siblings.indexOf(this);
    return idx !== -1 && idx + 1 < siblings.length ? siblings[idx + 1] : null;
  }

  get previousElementSibling() {
    if (!this.parentNode) return null;
    const siblings = this.parentNode.children;
    const idx = siblings.indexOf(this);
    return idx > 0 ? siblings[idx - 1] : null;
  }

  get firstChild() {
    return this.childNodes[0] || null;
  }

  get lastChild() {
    return this.childNodes[this.childNodes.length - 1] || null;
  }

  get textContent() {
    let text = '';
    for (const child of this.childNodes) {
      if (child.nodeType === 3) text += child.text;
      else if (child.nodeType === 1) text += child.textContent;
    }
    return text;
  }
  set textContent(val) {
    this.childNodes = [];
    if (val !== undefined && val !== null && val !== '') {
      this.childNodes.push({ nodeType: 3, text: String(val) });
    }
  }

  get innerHTML() {
    return this.textContent;
  }
  set innerHTML(val) {
    this.textContent = String(val || '');
  }

  appendChild(child) {
    if (!child) return null;
    if (child.parentNode) {
      child.parentNode.removeChild(child);
    }
    child.parentNode = this;
    this.childNodes.push(child);
    return child;
  }

  insertBefore(newChild, refChild) {
    if (!newChild) return newChild;
    if (newChild.parentNode) {
      newChild.parentNode.removeChild(newChild);
    }
    newChild.parentNode = this;
    if (!refChild) {
      this.childNodes.push(newChild);
      return newChild;
    }
    const idx = this.childNodes.indexOf(refChild);
    if (idx === -1) {
      this.childNodes.push(newChild);
    } else {
      this.childNodes.splice(idx, 0, newChild);
    }
    return newChild;
  }

  prepend(child) {
    if (!child) return null;
    if (child.parentNode) {
      child.parentNode.removeChild(child);
    }
    child.parentNode = this;
    this.childNodes.unshift(child);
    return child;
  }

  removeChild(child) {
    const idx = this.childNodes.indexOf(child);
    if (idx !== -1) {
      this.childNodes.splice(idx, 1);
      child.parentNode = null;
      return child;
    }
    return null;
  }

  remove() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  }

  setAttribute(name, val) {
    const sName = String(name).toLowerCase();
    const sVal = String(val);
    this._attributes.set(sName, sVal);
    if (sName === 'class') this.className = sVal;
    if (sName === 'id') this.id = sVal;
    if (sName === 'disabled') this.disabled = true;
    if (sName === 'open') this.open = true;
    if (sName.startsWith('data-')) {
      const camel = sName.slice(5).replace(/-([a-z])/g, (_, l) => l.toUpperCase());
      this.dataset[camel] = sVal;
    }
  }

  getAttribute(name) {
    const sName = String(name).toLowerCase();
    if (this._attributes.has(sName)) return this._attributes.get(sName);
    if (sName === 'class') return this.className || null;
    if (sName === 'id') return this.id || null;
    if (sName.startsWith('data-')) {
      const camel = sName.slice(5).replace(/-([a-z])/g, (_, l) => l.toUpperCase());
      return this.dataset[camel] !== undefined ? this.dataset[camel] : null;
    }
    return null;
  }

  hasAttribute(name) {
    return this.getAttribute(name) !== null;
  }

  removeAttribute(name) {
    const sName = String(name).toLowerCase();
    this._attributes.delete(sName);
    if (sName === 'disabled') this.disabled = false;
    if (sName === 'open') this.open = false;
    if (sName.startsWith('data-')) {
      const camel = sName.slice(5).replace(/-([a-z])/g, (_, l) => l.toUpperCase());
      delete this.dataset[camel];
    }
  }

  querySelector(sel) {
    return this.querySelectorAll(sel)[0] || null;
  }

  querySelectorAll(sel) {
    const results = [];
    const walk = (node) => {
      for (const child of node.children) {
        if (matches(child, sel)) results.push(child);
        walk(child);
      }
    };
    walk(this);
    return results;
  }
}

function matches(el, sel) {
  if (!sel) return false;
  const parts = sel.trim().split(/\s+/);
  if (parts.length === 1) return matchSingle(el, parts[0]);
  if (!matchSingle(el, parts[parts.length - 1])) return false;
  let p = el.parentNode;
  let idx = parts.length - 2;
  while (p && idx >= 0) {
    if (matchSingle(p, parts[idx])) {
      idx--;
    }
    p = p.parentNode;
  }
  return idx < 0;
}

function matchSingle(el, sel) {
  if (!el || el.nodeType !== 1) return false;
  if (sel.startsWith('.')) return el.classList.contains(sel.slice(1));
  if (sel.includes('.')) {
    const [tag, cls] = sel.split('.');
    return el.tagName === tag.toUpperCase() && el.classList.contains(cls);
  }
  if (sel.includes('[')) {
    const tag = sel.split('[')[0];
    if (tag && el.tagName !== tag.toUpperCase()) return false;
    return true;
  }
  return el.tagName === sel.toUpperCase();
}

class MockDocument {
  createElement(tagName) {
    return new MockElement(tagName);
  }
  querySelector(sel) {
    return null;
  }
  querySelectorAll(sel) {
    return [];
  }
}

if (!globalThis.document) {
  globalThis.document = new MockDocument();
}
if (!globalThis.HTMLElement) {
  globalThis.HTMLElement = MockElement;
}

export { MockElement, MockDocument };
